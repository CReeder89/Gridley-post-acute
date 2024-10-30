import type { NextApiRequest, NextApiResponse } from 'next';

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { captchaToken, ...formData } = req.body;

  const verificationResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    {
      method: 'POST',
    }
  );

  const verificationResult = await verificationResponse.json();

  if (!verificationResult.success) {
    return res.status(400).json({ message: 'CAPTCHA verification failed' });
  }

  res.status(200).json({ message: 'Message sent successfully' });
}
