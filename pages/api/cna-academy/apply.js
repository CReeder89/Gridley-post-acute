import nodemailer from 'nodemailer';
import { del, get } from '@vercel/blob';

const MAX_TOTAL_FILE_SIZE = 18 * 1024 * 1024;
const ALLOWED_FILE_TYPES = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);
const REQUIRED_DOCUMENTS = ['resume', 'diploma', 'governmentId'];

async function verifyCaptcha(token) {
  if (!token || !process.env.RECAPTCHA_SECRET_KEY) return false;
  const body = new URLSearchParams({ secret: process.env.RECAPTCHA_SECRET_KEY, response: token });
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  return Boolean((await response.json()).success);
}

async function toBuffer(stream) {
  const reader = stream.getReader();
  const chunks = [];
  let length = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(Buffer.from(value));
    length += value.byteLength;
    if (length > MAX_TOTAL_FILE_SIZE) throw new Error('Documents exceed the allowed combined size.');
  }
  return Buffer.concat(chunks, length);
}

function cleanFilename(value, fallback) {
  const name = typeof value === 'string' ? value.split(/[\\/]/).pop() : '';
  return (name || fallback).replace(/[\r\n"]/g, '_').slice(0, 180);
}

function yesNo(value) {
  if (value === 'yes') return 'Yes';
  if (value === 'no') return 'No';
  return value || '—';
}

function educationLabel(value) {
  const map = { high_school: 'High School', ged: 'GED', college: 'College' };
  return map[value] || value || '—';
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  let documentPaths = [];
  try {
    const body = req.body || {};
    const { captchaToken, documents = {} } = body;
    if (!(await verifyCaptcha(captchaToken))) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed. Please try again.' });
    }
    if (REQUIRED_DOCUMENTS.some((key) => !documents[key]?.pathname)) {
      return res.status(400).json({ message: 'Please upload your resume, diploma or GED, and government ID.' });
    }

    documentPaths = REQUIRED_DOCUMENTS.map((key) => documents[key].pathname);
    const uniquePaths = new Set(documentPaths);
    const validPaths = REQUIRED_DOCUMENTS.every((key) =>
      /^cna-applications\/[a-f0-9-]{36}\/(resume|diploma|governmentId)\/[\w.-]+$/i.test(documents[key].pathname) &&
      documents[key].pathname.split('/')[2] === key
    );
    if (!validPaths || uniquePaths.size !== REQUIRED_DOCUMENTS.length) {
      return res.status(400).json({ message: 'One or more uploaded documents are invalid. Please upload them again.' });
    }

    const attachments = [];
    let totalSize = 0;
    for (const key of REQUIRED_DOCUMENTS) {
      const requested = documents[key];
      const blobResult = await get(requested.pathname, { access: 'private' });
      if (!blobResult || blobResult.statusCode !== 200 || !blobResult.stream) {
        throw new Error('An uploaded document could not be retrieved. Please upload it again.');
      }
      const contentType = blobResult.blob.contentType;
      if (!ALLOWED_FILE_TYPES.has(contentType)) throw new Error('A document has an unsupported file type.');
      const content = await toBuffer(blobResult.stream);
      totalSize += content.length;
      if (totalSize > MAX_TOTAL_FILE_SIZE) throw new Error('Documents exceed the allowed combined size.');
      attachments.push({
        filename: cleanFilename(requested.filename, `${key}.pdf`),
        content,
        contentType,
      });
    }

    const destination = process.env.EMAIL_TO_CAREER || process.env.EMAIL_TO_JOB;
    if (!destination) return res.status(500).json({ message: 'Application email destination is not configured.' });

    const { firstName = '', lastName = '', email = '', phone = '', dob = '', address = '',
      educationLevel = '', schoolName = '', graduationYear = '', currentEmployer = '',
      previousExperience = '', whyCna = '', workedInHealthcare = '',
      transportationAvailable = '', availableStartDate = '' } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT, 10),
      secure: false,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });
    await transporter.sendMail({
      from: {
        name: 'New Application',
        address: process.env.EMAIL_USER || destination,
      },
      to: destination,
      replyTo: email || undefined,
      subject: `West Harbor CNA Training Application: ${firstName} ${lastName}`.trim(),
      text: [
        'New West Harbor CNA Training application', '', '— Personal Information —',
        `Name: ${firstName} ${lastName}`, `Date of Birth: ${dob}`, `Email: ${email}`,
        `Phone: ${phone}`, `Address: ${address}`, '', '— Education —',
        `Level: ${educationLabel(educationLevel)}`, `School: ${schoolName || '—'}`,
        `Graduation Year: ${graduationYear || '—'}`, '', '— Employment —',
        `Current Employer: ${currentEmployer}`, `Previous Experience: ${previousExperience}`,
        '', '— Questions —', `Why become a CNA?: ${whyCna}`,
        `Worked in healthcare: ${yesNo(workedInHealthcare)}`,
        `Transportation available: ${yesNo(transportationAvailable)}`,
        `Available start date: ${availableStartDate}`, '', '— Documents —',
        attachments.map((file) => file.filename).join('\n'),
      ].join('\n'),
      attachments,
    });

    try {
      await del(documentPaths, { access: 'private' });
    } catch (error) {
      // Email has already been delivered; keep the successful submission response and log cleanup failure.
      console.error('CNA application Blob cleanup failed:', error);
    }
    return res.status(200).json({ message: 'Application sent successfully!' });
  } catch (error) {
    console.error('CNA Training application error:', error);
    if (/size|larger than/i.test(error?.message || '')) {
      return res.status(413).json({ message: 'The three documents must total 18 MB or less.' });
    }
    return res.status(500).json({ message: error?.message || 'Failed to send application.' });
  }
}
