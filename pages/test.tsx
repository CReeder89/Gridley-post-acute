import React, { useState, useEffect } from 'react';
import TestimonialCard from '../components/TestimonialCard';

const testimonials = [
  {
    text: "The care I received at Gridley Post Acute was exceptional. The staff truly went above and beyond.",
    author: "John Doe",
  },
  {
    text: "I’m incredibly grateful for the rehabilitation program. The team helped me get back on my feet.",
    author: "Jane Smith",
  },
  {
    text: "Amazing facility with compassionate staff. They treated me like family during my stay.",
    author: "Sarah Lee",
  },
  {
    text: "The nursing staff made my recovery comfortable and stress-free. Highly recommend Gridley Post Acute.",
    author: "Michael Brown",
  },
  {
    text: "I felt supported every step of the way. I couldn’t have asked for better care.",
    author: "Emily Davis",
  },
];

const TestimonialsPage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Automatically cycle through testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={containerStyle}>
      {/* Left Content - Why Choose Us */}
      <div style={contentSectionStyle}>
        <h2 style={sectionTitleStyle}>Why Choose Gridley Post Acute?</h2>
        <p style={sectionTextStyle}>
          At Gridley Post Acute, we are committed to providing the highest quality of care. Our dedicated staff, state-of-the-art facilities, and personalized treatment plans make us the number one choice in our community.
        </p>
        <ul style={featureListStyle}>
          <li>Compassionate 24/7 nursing care</li>
          <li>Comprehensive rehabilitation programs</li>
          <li>Individualized treatment plans</li>
          <li>Friendly and highly trained staff</li>
          <li>Modern and comfortable facilities</li>
        </ul>
      </div>

      {/* Right Content - Testimonials */}
      <div style={testimonialSectionStyle}>
        <h3 style={testimonialTitleStyle}>What Our Patients Say</h3>
        <div style={testimonialCardContainerStyle}>
          <TestimonialCard
            text={testimonials[currentTestimonial].text}
            author={testimonials[currentTestimonial].author}
          />
        </div>
      </div>
    </div>
  );
};

// Styles
const containerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '3fr 1fr', // 3 parts for content, 1 part for testimonials
  gap: '40px',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '40px',
};

const contentSectionStyle: React.CSSProperties = {
  padding: '20px',
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '2.5rem',
  color: '#2c3e50',
  marginBottom: '20px',
};

const sectionTextStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  lineHeight: '1.8',
  marginBottom: '30px',
  color: '#333',
};

const featureListStyle: React.CSSProperties = {
  listStyleType: 'disc',
  paddingLeft: '20px',
  fontSize: '1.1rem',
  color: '#2c3e50',
  marginBottom: '20px',
};

const testimonialSectionStyle: React.CSSProperties = {
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const testimonialTitleStyle: React.CSSProperties = {
  fontSize: '1.8rem',
  color: '#2c3e50',
  marginBottom: '20px',
};

const testimonialCardContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

// Responsive Design
const styles = `
  @media (max-width: 768px) {
    ${containerStyle.gridTemplateColumns = '1fr'};
    ${testimonialSectionStyle.marginTop = '30px'};
  }
`;

export default TestimonialsPage;
