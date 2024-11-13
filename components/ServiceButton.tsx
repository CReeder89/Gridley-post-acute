import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <Link href={href}>
      <span className='serviceButton'>{text}</span>
    </Link>
  );
};

// Styles for the button
const buttonStyle: React.CSSProperties = {
  padding: '12px 24px',
  fontSize: '1rem',
  fontWeight: 'bold',
  backgroundColor: '#2c3e50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  textDecoration: 'none',
  cursor: 'pointer',
  display: 'inline-block',
  transition: 'background-color 0.3s ease',
  margin: '25px',
  fontFamily: 'Oswald'
};

export default Button;
