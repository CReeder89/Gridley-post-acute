import { handleUpload } from '@vercel/blob/client';

const MAX_FILE_SIZE = 15 * 1024 * 1024;
const ALLOWED_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/png',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

async function verifyCaptcha(token) {
  if (!token || !process.env.RECAPTCHA_SECRET_KEY) return false;
  const body = new URLSearchParams({ secret: process.env.RECAPTCHA_SECRET_KEY, response: token });
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  const result = await response.json();
  return Boolean(result.success);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  try {
    const response = await handleUpload({
      body: req.body,
      request: req,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        let payload;
        try {
          payload = JSON.parse(clientPayload || '{}');
        } catch {
          throw new Error('Invalid upload request.');
        }

        const validPath = /^cna-applications\/[a-f0-9-]{36}\/(resume|diploma|governmentId)\/[\w.-]+$/i.test(pathname);
        if (!validPath || !ALLOWED_TYPES.includes(payload.contentType)) {
          throw new Error('Unsupported application document.');
        }
        if (!(await verifyCaptcha(payload.captchaToken))) {
          throw new Error('reCAPTCHA verification failed. Please try again.');
        }

        return {
          allowedContentTypes: [payload.contentType],
          maximumSizeInBytes: MAX_FILE_SIZE,
          addRandomSuffix: true,
          validUntil: Date.now() + 10 * 60 * 1000,
        };
      },
    });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ message: error?.message || 'Could not authorize this upload.' });
  }
}
