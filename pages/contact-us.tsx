import Image from 'next/image';
import { useState } from 'react';
import { useReCaptcha } from 'next-recaptcha-v3';
import MetaHead from '../components/MetaHead';
import SuccessAlert from '../components/SuccessAlert';
import Loader from '../components/Loader';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


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
  const [loading, setLoading] = useState(false)
  const { executeRecaptcha } = useReCaptcha();

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true)

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
        setLoading(false)
      } else {
        setStatus('Failed to send message. Please try again later.');
        setLoading(false)
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
      setLoading(false)
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
          <p >
            Welcome to Gridley Post Acute! We're here to help with any questions about our services, to assist with scheduling a tour, or to provide additional information.
            <br />
            <br />
            Please call us or submit your information, and a member of our team will get back to you shortly          </p>
          {/* Professional Contact Information */}
          <div style={contactDetailsStyle}>

            <h3>Contact Information</h3>
            <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
              <HomeIcon style={{ marginRight: '5px' }} />
              <p>246 Spruce Street, Gridley, CA 95948</p>
            </div>

            <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
              <PhoneIcon style={{ marginRight: '5px' }} />
              <p>(530) 456-0400</p>
            </div>

            <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
              <EmailIcon style={{ marginRight: '5px' }} />
              <p> <Link href="mailto:gridleyinfo@westharborhc.com" style={linkStyle}>gridleyinfo@westharborhc.com</Link></p>
            </div>

          </div>



        </div>

        {/* Right Side - Contact Form */}

        <form onSubmit={handleSubmit} style={contactFormStyle}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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
          </div>

          <button type="submit" style={buttonStyle}>{loading ? <Loader /> : 'Submit'}</button>
          <SuccessAlert message={status} onClose={() => setStatus('')} />

        </form>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.4759533844663!2d-121.69302852311927!3d39.368102471627424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80834d5b339fba17%3A0x2dc5ed986d723914!2sGridley%20Post%20Acute!5e0!3m2!1sen!2sus!4v1731627311332!5m2!1sen!2sus" width="100%" height="300" style={{ border: 0 }} loading="lazy" allowFullScreen></iframe>

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

};

const contactMessageStyle: React.CSSProperties = {
  lineHeight: '1.6',
  height: '100px'
};

const contactDetailsStyle: React.CSSProperties = {
  marginTop: '20px',
  fontSize: '1rem',
};



const contactFormStyle: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '15px'

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


const linkStyle: React.CSSProperties = {
  textDecoration: 'none',
  fontSize: '1rem',
  margin: '5px 0',
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
