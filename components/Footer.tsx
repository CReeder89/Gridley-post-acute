import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      
      {/* Bottom Bar */}
      <div style={bottomBar}>

      <p style={{ fontSize: '1rem' }}>© 2024 All Rights Reserved.</p>

        <div style={bottomLinks}>
          <Link href="/careers" style={linkStyle2}>Careers</Link> |
          <Link href="/privacy-policy" style={linkStyle2}>Privacy Policy</Link> |
          <Link href="/terms" style={linkStyle2}>Terms & Conditions</Link> |
          <Link href="/accessibility" style={linkStyle2}>Web Accessibility</Link>
        </div>

        
      </div>
    </footer>
  );
};

// Styles
const footerStyle: React.CSSProperties = {
  backgroundColor: '#2c3e50',
  color: 'white',
  fontFamily: 'Arial, sans-serif',
};



const linkStyle2: React.CSSProperties = {
  color: '#ecf0f1',
  textDecoration: 'none',
  fontSize: '0.7rem',
  display: 'block',
  margin: '5px 0',
  whiteSpace: 'nowrap'
};

const buttonStyle: React.CSSProperties = {
  marginTop: '10px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '0.9rem',
};

const bottomBar: React.CSSProperties = {
  padding: '10px 0',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px'
};

const bottomLinks: React.CSSProperties = {
  marginTop: '5px',
  fontSize: '0.8rem',
  display: 'flex',
  maxWidth: '75%',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5px',
  

};




export default Footer;
