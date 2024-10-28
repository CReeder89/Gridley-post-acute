// components/TestimonialCard.tsx
import React from 'react';

interface TestimonialCardProps {
  text: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author }) => {
  return (
    <div style={cardStyle}>
      <p style={testimonialTextStyle}>"{text}"</p>
      <p style={authorStyle}>- {author}</p>
    </div>
  );
};

// Styles
const cardStyle: React.CSSProperties = {
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '10px',
  textAlign: 'center',
  maxWidth: '300px',
  minHeight: '180px',
};

const testimonialTextStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  color: '#333',
  marginBottom: '10px',
};

const authorStyle: React.CSSProperties = {
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#2c3e50',
};

export default TestimonialCard;
