import nodemailer from 'nodemailer';
import { del, get } from '@vercel/blob';

const MAX_FILE_SIZE = 15 * 1024 * 1024;
const ALLOWED_FILE_TYPES = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

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
    if (length > MAX_FILE_SIZE) throw new Error('The resume exceeds the allowed size.');
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
    const { captchaToken } = body;
    const documents = body.documents && typeof body.documents === 'object' ? body.documents : {};
    if (!(await verifyCaptcha(captchaToken))) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed. Please try again.' });
    }
    if (documents.diploma?.pathname || documents.governmentId?.pathname) {
      return res.status(400).json({ message: 'Only an optional resume can be attached to this application.' });
    }

    const attachments = [];
    const requestedResume = documents.resume;
    if (requestedResume) {
      if (!requestedResume.pathname || !/^cna-applications\/[a-f0-9-]{36}\/resume\/[\w.-]+$/i.test(requestedResume.pathname)) {
        return res.status(400).json({ message: 'The uploaded resume is invalid. Please upload it again.' });
      }
      documentPaths = [requestedResume.pathname];
      const blobResult = await get(requestedResume.pathname, { access: 'private' });
      if (!blobResult || blobResult.statusCode !== 200 || !blobResult.stream) {
        throw new Error('The uploaded resume could not be retrieved. Please upload it again.');
      }
      const contentType = blobResult.blob.contentType;
      if (!ALLOWED_FILE_TYPES.has(contentType)) throw new Error('The resume has an unsupported file type.');
      const content = await toBuffer(blobResult.stream);
      attachments.push({
        filename: cleanFilename(requestedResume.filename, 'resume.pdf'),
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
        `Available start date: ${availableStartDate}`, '', '— Optional Resume —',
        attachments[0]?.filename || 'Not provided',
      ].join('\n'),
      attachments,
    });

    try {
      if (documentPaths.length > 0) await del(documentPaths, { access: 'private' });
    } catch (error) {
      // Email has already been delivered; keep the successful submission response and log cleanup failure.
      console.error('CNA application Blob cleanup failed:', error);
    }
    return res.status(200).json({ message: 'Application sent successfully!' });
  } catch (error) {
    console.error('CNA Training application error:', error);
    if (/size|larger than/i.test(error?.message || '')) {
      return res.status(413).json({ message: 'The resume must be 15 MB or less.' });
    }
    return res.status(500).json({ message: error?.message || 'Failed to send application.' });
  }
}
