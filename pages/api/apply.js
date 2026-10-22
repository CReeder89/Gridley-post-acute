import nodemailer from 'nodemailer';
import { del, get } from '@vercel/blob';

const MAX_RESUME_SIZE = 15 * 1024 * 1024;
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
    if (length > MAX_RESUME_SIZE) throw new Error('The resume must be 15 MB or smaller.');
  }
  return Buffer.concat(chunks, length);
}

function safeFilename(value) {
  const basename = typeof value === 'string' ? value.split(/[\\/]/).pop() : '';
  return (basename || 'resume').replace(/[\r\n"]/g, '_').slice(0, 180);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  let uploadedPath;
  try {
    const { name, email, phone, position, resumeLink = '', resumeDocument, coverLetter, captchaToken } = req.body || {};
    if (!(await verifyCaptcha(captchaToken))) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed. Please try again.' });
    }
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !position?.trim() || !coverLetter?.trim()) {
      return res.status(400).json({ message: 'Please complete all required application fields.' });
    }
    if (resumeDocument && resumeLink.trim()) {
      return res.status(400).json({ message: 'Please upload a resume or provide a resume link, not both.' });
    }
    if (!resumeDocument && !resumeLink.trim()) {
      return res.status(400).json({ message: 'Upload a resume or provide a link to one.' });
    }

    let attachment;
    if (resumeDocument) {
      uploadedPath = resumeDocument.pathname;
      if (!/^job-applications\/[a-f0-9-]{36}\/resume\/[\w.-]+$/i.test(uploadedPath || '')) {
        return res.status(400).json({ message: 'The uploaded resume is invalid. Please upload it again.' });
      }
      const blobResult = await get(uploadedPath, { access: 'private' });
      if (!blobResult || blobResult.statusCode !== 200 || !blobResult.stream) {
        return res.status(400).json({ message: 'The uploaded resume could not be retrieved. Please upload it again.' });
      }
      if (!ALLOWED_FILE_TYPES.has(blobResult.blob.contentType)) {
        return res.status(400).json({ message: 'The resume file type is not supported.' });
      }
      attachment = {
        filename: safeFilename(resumeDocument.filename),
        contentType: blobResult.blob.contentType,
        content: await toBuffer(blobResult.stream),
      };
    } else {
      try {
        const link = new URL(resumeLink);
        if (!['http:', 'https:'].includes(link.protocol)) throw new Error('Unsupported link protocol');
      } catch {
        return res.status(400).json({ message: 'Enter a valid resume link beginning with http:// or https://.' });
      }
    }

    const destination = process.env.EMAIL_TO_JOB;
    if (!destination) {
      console.error('EMAIL_TO_JOB is not configured');
      return res.status(500).json({ message: 'Application email destination is not configured.' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT, 10),
      secure: false,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });
    await transporter.sendMail({
      from: { name: 'New Job Application', address: process.env.EMAIL_USER || destination },
      to: destination,
      replyTo: email,
      subject: `New Application: ${position}`,
      text: [
        'New Job Application',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Position: ${position}`,
        '',
        'Resume:',
        attachment ? `Attached: ${attachment.filename}` : resumeLink,
        '',
        'Cover Letter:',
        coverLetter,
      ].join('\n'),
      attachments: attachment ? [attachment] : [],
    });

    if (uploadedPath) {
      try {
        await del(uploadedPath, { access: 'private' });
      } catch (error) {
        console.error('Job application resume cleanup failed:', error);
      }
    }
    return res.status(200).json({ message: 'Application sent successfully.' });
  } catch (error) {
    console.error('Job application submission failed:', error);
    return res.status(500).json({ message: error?.message || 'Failed to send application.' });
  }
}
