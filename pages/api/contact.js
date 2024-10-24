import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message, phone, subject, callbackTime } = req.body;

    // Set up the transporter using the credentials from .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Create the email content
    const mailOptions = {
      from: email || process.env.EMAIL_USER, // Sender's email or default
      to: process.env.EMAIL_TO, // Admin's email
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCallback Time: ${callbackTime}\n\nMessage: ${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.log(error)
      res.status(500).json({ message: 'Failed to send email.', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
