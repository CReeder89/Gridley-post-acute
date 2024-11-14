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



export default Button;
