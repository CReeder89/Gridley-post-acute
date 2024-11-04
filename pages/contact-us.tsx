import Image from 'next/image';
import { useState } from 'react';
import { useReCaptcha } from 'next-recaptcha-v3';
import MetaHead from '../components/MetaHead';


const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    callbackTime: '',
  });
  const [status, setStatus] = useState(''); // For showing success/error messages
  const { executeRecaptcha } = useReCaptcha();

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      setStatus('reCAPTCHA is not available.');
      return;
    }

    // Get reCAPTCHA token
    const captchaToken = await executeRecaptcha('contactForm');

    try {
      // Send form data and captchaToken to API
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, captchaToken }), // Include captchaToken in request body
      });

      if (res.status === 200) {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          callbackTime: '',
        });
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div>

      <MetaHead
        title="Contact Us - Gridley Post Acute"
        description="Get in touch with Gridley Post Acute. Our team is here to answer your questions, schedule a tour, or provide more information about our services. We look forward to hearing from you."
        image="/images/gpa-front.jpg"
        url={`${process.env.WEBSITE}/contact-us`} />


      <div style={contactContainerStyle}>
        {/* Left Side - Picture and Message */}
        <div style={contactInfoStyle}>
          <Image
            src="/images/contact.jpg" // Replace with your actual image path
            alt="Contact Us"
            width={400}
            height={300}
            style={contactImageStyle}
          />
          <p style={contactMessageStyle}>
            Welcome to Gridley Post Acute! We are here to assist you with any important matters, whether you have questions about our services, would like to schedule a tour, or need more information.
          </p>
          {/* Professional Contact Information */}
          <div style={contactDetailsStyle}>
            <h3>Contact Information</h3>
            <p><strong>Phone:</strong> (530) 456-0400</p>
            <p><strong>Address:</strong> 246 Spruce Street, Gridley, CA 95948</p>
            <p><strong>Email:</strong> <a href="mailto:gridleyinfo@westharborhc.com">gridleyinfo@westharborhc.com</a></p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div style={contactFormInfoStyle}>
          <form onSubmit={handleSubmit} style={contactFormStyle}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              required
              value={formData.name}
              onChange={handleInputChange}
              style={inputStyle}
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              required
              value={formData.phone}
              onChange={handleInputChange}
              style={inputStyle}
            />

            <label htmlFor="email">Email (Optional)</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleInputChange}
              style={inputStyle}
            />

            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              style={inputStyle}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleInputChange}
              style={contactMessageStyle}
            />

            <label htmlFor="callbackTime">Best Call Back Time</label>
            <input
              type="text"
              id="callbackTime"
              name="callbackTime"
              placeholder="Preferred Call Back Times"
              value={formData.callbackTime}
              onChange={handleInputChange}
              style={inputStyle}
            />

            <button type="submit" style={buttonStyle}>Submit</button>
            {status && <p style={statusMessageStyle}>{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

// Styles
const contactContainerStyle: React.CSSProperties = {
  display: 'flex',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '40px 20px',
  gap: '20px',
  flexWrap: 'wrap',
};

const contactInfoStyle: React.CSSProperties = {
  flex: 1,
  minWidth: '300px',
  textAlign: 'left',
};

const contactImageStyle: React.CSSProperties = {
  borderRadius: '8px',
  width: '100%',
  height: 'auto',
  maxWidth: '400px',
};

const contactMessageStyle: React.CSSProperties = {
  margin: '20px 0',
  lineHeight: '1.6',
};

const contactDetailsStyle: React.CSSProperties = {
  marginTop: '20px',
  fontSize: '1rem',
};

const contactFormInfoStyle: React.CSSProperties = {
  flex: 1,
  minWidth: '300px',
  textAlign: 'left',
};

const contactFormStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const inputStyle: React.CSSProperties = {
  padding: '10px',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '100%',
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '1rem',
  backgroundColor: '#2c3e50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const statusMessageStyle: React.CSSProperties = {
  marginTop: '10px',
  fontSize: '1rem',
  color: '#2c3e50',
};

// Responsive styling
const mediaStyles = `
  @media (max-width: 768px) {
    .contact-container {
      flex-direction: column;
      align-items: center;
    }
    .contact-info, .contact-form-info {
      max-width: 100%;
    }
  }
`;

export default ContactUs;
