import nodemailer from 'nodemailer';

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message, phone, captchaToken } = req.body || {};

  if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  if (!captchaToken) {
    return res.status(400).json({ message: 'reCAPTCHA token is required.' });
  }

  try {
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      { method: 'POST' }
    );
    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.success) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed' });
    }

    // Prefer academy-specific inbox; fall back to main contact inbox for local/dev.
    const destination =
      process.env.EMAIL_TO_ACADEMY || process.env.EMAIL_TO;

    if (!destination) {
      console.error('EMAIL_TO_ACADEMY (and EMAIL_TO fallback) is not configured');
      return res.status(500).json({ message: 'Contact email destination is not configured.' });
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
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: destination,
      subject: `West Harbor CNA Academy Contact: ${name}`,
      text: [
        'New message for Mollie Openshaw / West Harbor CNA Academy',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('CNA Academy contact email failed:', error);
    return res.status(500).json({ message: 'Failed to send email.' });
  }
}
