import nodemailer from 'nodemailer';

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, position, resume, coverLetter, captchaToken } = req.body;

    // Step 1: Verify reCAPTCHA token
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      { method: 'POST' }
    );
    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.success) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed' });
    }

    // Step 2: Set up email transport
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT, 10),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Step 3: Create the email content
    const mailOptions = {
      from: email || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO_JOB,
      subject: `New Application: ${position}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}\n\nResume: ${resume}\n\nCover Letter: ${coverLetter}\n`,
    };

    // Step 4: Attempt to send the email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email.', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
