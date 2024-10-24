import Image from 'next/image';
import { useState } from 'react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    callbackTime: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="contact-container">
      {/* Left Side - Picture and Message */}
      <div className="contact-info">
        <Image
          src="/images/contact.jpg" // Replace with your actual image path
          alt="Contact Us"
          width={400}
          height={300}
          className="contact-image"
        />
        <p className="contact-message">
          Welcome to Gridley Post Acute! We are here to assist you with any important matters, whether you have questions about our services, would like to schedule a tour, or simply need more information. Please feel free to reach out and our team will get back to you promptly. Your inquiries are important to us, and we look forward to assisting you.
        </p>
          {/* Professional Contact Information */}
          <div className="contact-details">
          <h3>Contact Information</h3>
          <p><strong>Phone:</strong> (530) 456-0400</p>
          <p><strong>Address:</strong> 246 Spruce Street, Gridley, CA 95948</p>
          <p><strong>Email:</strong> <a href="mailto:gridleyinfo@westharborhc.com">gridleyinfo@westharborhc.com</a></p>
        </div>
      </div>

      {/* Right Side - Contact Form and Information */}
      <div className="contact-form-info">
        {/* Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              required
              value={formData.name}
              onChange={handleInputChange}
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
            />

            <label htmlFor="email">Email (Optional)</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />

            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleInputChange}
            />

            <label htmlFor="callbackTime">Best Call Back Time</label>
            <input
              type="text"
              id="callbackTime"
              name="callbackTime"
              placeholder="Preferred Call Back Times"
              value={formData.callbackTime}
              onChange={handleInputChange}
            />

            <button type="submit">Submit</button>
          </form>
        </div>

      
      </div>
    </div>
  );
};

export default ContactUs;
