import { del } from '@vercel/blob';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
  try {
    const { pathname, captchaToken } = req.body || {};
    const validCnaPath = /^cna-applications\/[a-f0-9-]{36}\/(resume|diploma|governmentId)\/[\w.-]+$/i.test(pathname || '');
    const validJobPath = /^job-applications\/[a-f0-9-]{36}\/resume\/[\w.-]+$/i.test(pathname || '');
    if (!validCnaPath && !validJobPath) {
      return res.status(400).json({ message: 'Invalid document.' });
    }
    if (!captchaToken || !process.env.RECAPTCHA_SECRET_KEY) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed.' });
    }
    const captchaBody = new URLSearchParams({ secret: process.env.RECAPTCHA_SECRET_KEY, response: captchaToken });
    const captchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: captchaBody,
    });
    if (!(await captchaResponse.json()).success) return res.status(400).json({ message: 'reCAPTCHA verification failed.' });
    await del(pathname, { access: 'private' });
    return res.status(200).json({ message: 'Document removed.' });
  } catch (error) {
    console.error('CNA application document cleanup failed:', error);
    return res.status(500).json({ message: 'Could not remove the document from storage.' });
  }
}
