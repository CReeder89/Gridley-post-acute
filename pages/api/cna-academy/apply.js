import nodemailer from 'nodemailer';
import { formidable } from 'formidable';
import fs from 'fs';

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export const config = {
  api: {
    bodyParser: false,
  },
};

function firstValue(value) {
  if (Array.isArray(value)) return value[0];
  return value ?? '';
}

function firstFile(file) {
  if (!file) return null;
  return Array.isArray(file) ? file[0] : file;
}

async function parseMultipart(req) {
  const form = formidable({
    multiples: false,
    maxFileSize: 8 * 1024 * 1024, // 8MB per file
  });
  const [fields, files] = await form.parse(req);
  return { fields, files };
}

function yesNo(value) {
  if (value === 'yes') return 'Yes';
  if (value === 'no') return 'No';
  return value || '—';
}

function educationLabel(value) {
  const map = {
    high_school: 'High School',
    ged: 'GED',
    college: 'College',
  };
  return map[value] || value || '—';
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { fields, files } = await parseMultipart(req);

    const captchaToken = firstValue(fields.captchaToken);
    const firstName = firstValue(fields.firstName);
    const lastName = firstValue(fields.lastName);
    const email = firstValue(fields.email);
    const phone = firstValue(fields.phone);
    const dob = firstValue(fields.dob);
    const address = firstValue(fields.address);
    const educationLevel = firstValue(fields.educationLevel);
    const schoolName = firstValue(fields.schoolName);
    const graduationYear = firstValue(fields.graduationYear);
    const currentEmployer = firstValue(fields.currentEmployer);
    const previousExperience = firstValue(fields.previousExperience);
    const whyCna = firstValue(fields.whyCna);
    const workedInHealthcare = firstValue(fields.workedInHealthcare);
    const transportationAvailable = firstValue(fields.transportationAvailable);
    const availableStartDate = firstValue(fields.availableStartDate);

    // Verify reCAPTCHA (same pattern as careers / contact)
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      { method: 'POST' }
    );
    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.success) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed' });
    }

    const destination =
      process.env.EMAIL_TO_CAREER || process.env.EMAIL_TO_JOB;

    if (!destination) {
      console.error('EMAIL_TO_CAREER (and EMAIL_TO_JOB fallback) is not configured');
      return res.status(500).json({ message: 'Application email destination is not configured.' });
    }

    const attachments = [];
    const fileMeta = [];

    for (const key of ['resume', 'diploma', 'governmentId']) {
      const uploaded = firstFile(files[key]);
      if (!uploaded?.filepath) continue;

      const filename = uploaded.originalFilename || `${key}.bin`;
      attachments.push({
        filename,
        content: fs.readFileSync(uploaded.filepath),
      });
      fileMeta.push(`${key}: ${filename}`);

      // Clean temp upload
      try {
        fs.unlinkSync(uploaded.filepath);
      } catch {
        // ignore cleanup errors
      }
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT, 10),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email || process.env.EMAIL_USER,
      to: destination,
      replyTo: email || undefined,
      subject: `West Harbor CNA Academy Application: ${firstName} ${lastName}`.trim(),
      text: [
        'New West Harbor CNA Academy application',
        '',
        '— Personal Information —',
        `Name: ${firstName} ${lastName}`,
        `Date of Birth: ${dob}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Address: ${address}`,
        '',
        '— Education —',
        `Level: ${educationLabel(educationLevel)}`,
        `School: ${schoolName || '—'}`,
        `Graduation Year: ${graduationYear || '—'}`,
        '',
        '— Employment —',
        `Current Employer: ${currentEmployer}`,
        `Previous Experience: ${previousExperience}`,
        '',
        '— Questions —',
        `Why become a CNA?: ${whyCna}`,
        `Worked in healthcare: ${yesNo(workedInHealthcare)}`,
        `Transportation available: ${yesNo(transportationAvailable)}`,
        `Available start date: ${availableStartDate}`,
        '',
        '— Documents —',
        fileMeta.length ? fileMeta.join('\n') : 'No files attached',
      ].join('\n'),
      attachments,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Application sent successfully!' });
  } catch (error) {
    console.error('CNA Academy application error:', error);
    return res.status(500).json({ message: 'Failed to send application.' });
  }
}
