// components/Footer.tsx
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return ( 
    <footer style={footerStyle}>
      <div style={footerLinks}>
        <Link href="/about-us" style={footerLinkStyle}>About Us</Link> 
        <Link href="/services" style={footerLinkStyle}>Services</Link> 
        <Link href="/meet-the-staff" style={footerLinkStyle}>Staff</Link> 
        <Link href="/gallery" style={footerLinkStyle}>Gallery</Link> 
        <Link href="/contact-us" style={footerLinkStyle}>Contact Us</Link>
      </div>
      <div style={{ marginTop: '10px' }}>
        Contact us: (530) 456-0400 | gridleyinfo@westharborhc.com
      </div>
    </footer>
  );
}

const footerStyle: React.CSSProperties = {
  backgroundColor: '#2c3e50',
  color: 'white',
  padding: '20px 0',
  textAlign: 'center',  // 'textAlign' is now properly typed
};



const footerLinks: React.CSSProperties = {
  display: 'inline-block',
};

const footerLinkStyle: React.CSSProperties = {
  margin: '0 10px',
  color: '#ecf0f1',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  transition: 'color 0.3s',
};

export default Footer;
