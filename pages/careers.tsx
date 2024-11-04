import Image from 'next/image';
import { useState } from 'react';
import { useReCaptcha } from 'next-recaptcha-v3';
import MetaHead from '../components/MetaHead';

const Careers: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: '',
    coverLetter: '',
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
    const captchaToken = await executeRecaptcha('applyForm');

    try {
      // Send form data and captchaToken to API
      const res = await fetch('/api/apply', {
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
          position: '',
          resume: '',
          coverLetter: '',
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
        title="Careers - Join the Gridley Post Acute Team"
        description="Explore rewarding career opportunities at Gridley Post Acute. Join our dedicated team and make a difference in the lives of our residents with your expertise and compassion."
        image="/images/gpa-front.jpg"
        url={`${process.env.WEBSITE}/careers`} />


      <div style={careersContainerStyle}>
        {/* Left Side - Picture and Message */}
        <div style={careersInfoStyle}>
          <Image
            src="/images/cna-group1.jpg" // Replace with your actual image path
            alt="Careers at Gridley Post Acute"
            width={400}
            height={300}
            style={careersImageStyle}
          />
          <p style={careersMessageStyle}>
            Join our team at Gridley Post Acute! We are always looking for dedicated professionals to provide exceptional care and make a difference in our community. Explore our available positions and apply today.
          </p>
          {/* Job Opportunities */}
          <div style={jobOpportunitiesStyle}>
            <h3>Available Positions:</h3>
            <ul>
              <li>Registered Nurse (RN)</li>
              <li>Certified Nursing Assistant (CNA)</li>
              <li>Physical Therapist</li>
              <li>Administrative Staff</li>
            </ul>
          </div>
        </div>

        {/* Right Side - Careers Form */}
        <div style={careersFormInfoStyle}>
          <form onSubmit={handleSubmit} style={careersFormStyle}>
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

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
              required
              value={formData.email}
              onChange={handleInputChange}
              style={inputStyle}
            />

            <label htmlFor="position">Position Applying For</label>
            <input
              type="text"
              id="position"
              name="position"
              placeholder="Position"
              required
              value={formData.position}
              onChange={handleInputChange}
              style={inputStyle}
            />

            <label htmlFor="resume">Resume (Paste or Link)</label>
            <input
              type="text"
              id="resume"
              name="resume"
              placeholder="Paste your resume or provide a link"
              required
              value={formData.resume}
              onChange={handleInputChange}
              style={inputStyle}
            />

            <label htmlFor="coverLetter">Cover Letter</label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              placeholder="Your Cover Letter"
              required
              value={formData.coverLetter}
              onChange={handleInputChange}
              style={textAreaStyle}
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
const careersContainerStyle: React.CSSProperties = {
  display: 'flex',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '40px 20px',
  gap: '20px',
  flexWrap: 'wrap',
};

const careersInfoStyle: React.CSSProperties = {
  flex: 1,
  minWidth: '300px',
  textAlign: 'left',
};

const careersImageStyle: React.CSSProperties = {
  borderRadius: '8px',
  width: '100%',
  height: 'auto',
  maxWidth: '400px',
};

const careersMessageStyle: React.CSSProperties = {
  margin: '20px 0',
  lineHeight: '1.6',
};

const jobOpportunitiesStyle: React.CSSProperties = {
  margin: '20px',
  fontSize: '1rem',
};

const careersFormInfoStyle: React.CSSProperties = {
  flex: 1,
  minWidth: '300px',
  textAlign: 'left',
};

const careersFormStyle: React.CSSProperties = {
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

const textAreaStyle: React.CSSProperties = {
  ...inputStyle,
  minHeight: '100px',
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

export default Careers;
