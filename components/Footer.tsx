import Link from 'next/link';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContainer} className={'footerContain'}>
        {/* Services Section */}
        <div style={{...footerSection, background: '#4F4F50'}}>
          <h3 style={footerSectionTitle}>Services</h3>
         
            <Link href="/services/nursing-services" style={linkStyle}>Skilled Nursing</Link>
            <Link href="/services/rehabilitation-services" style={linkStyle}>Rehabilitation</Link>
            <Link href="/services/activities-program" style={linkStyle}>Activities</Link>
            <Link href="/services/social-services" style={linkStyle}>Social Services</Link>
          
        </div>

        {/* Resources Section */}
        <div style={{...footerSection, background: '#3a4a5a'}}>
          <h3 style={footerSectionTitle}>Resources</h3>
         
            <Link href="/cms-score" style={linkStyle}>What is CMS?</Link>
            <Link href="/test" style={linkStyle}>Choosing a Post Acute Center</Link>
            <Link href="/site-map" style={linkStyle}>Site Map</Link>
            <Link href="https://www.medicare.gov/care-compare/results?searchType=NursingHome&page=1&city=Gridley&state=CA&zipcode=&radius=50&sort=closest" target="_blank" style={linkStyle}>Medicare.gov comparison page</Link>
          
        </div>

        {/* Contact Section */}
        <div style={{...footerSection, background: '#4F4F50'}}>
          <h3 style={footerSectionTitle}>Contact Us</h3>


          <div style={{display: 'flex', alignContent: 'center', alignItems:'center'}}>
          <HomeIcon style={{marginRight: '5px'}}/> 
          <p>246 Spruce Street, Gridley, CA 95948</p>
          </div>

          <div style={{display: 'flex', alignContent: 'center', alignItems:'center'}}>
          <PhoneIcon style={{marginRight: '5px'}}/>
          <p>(530) 456-0400</p>
          </div>

          <div style={{display: 'flex', alignContent: 'center', alignItems:'center'}}>
          <EmailIcon style={{marginRight: '5px'}}/>
          <p> <Link href="mailto:gridleyinfo@westharborhc.com" style={linkStyle}>gridleyinfo@westharborhc.com</Link></p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div style={bottomBar}>
       
        <div style={bottomLinks}>
          <Link href="/careers" style={linkStyle2}>Careers</Link> | 
          <Link href="/privacy-policy" style={linkStyle2}>Privacy Policy</Link> | 
          <Link href="/terms" style={linkStyle2}>Terms & Conditions</Link> | 
          <Link href="/accessibility" style={linkStyle2}>Web Accessibility</Link> 
        </div>

        <p style={{fontSize:'1rem'}}>© 2024 All Rights Reserved.</p>
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

const footerContainer: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
};

const footerSection: React.CSSProperties = {
  flex: '1 1 200px',
  minWidth: '200px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'

};

const footerSectionTitle: React.CSSProperties = {
  color: '#fff',
  fontSize: '1.2rem',
  fontWeight: 'bold',
};

const listStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const linkStyle: React.CSSProperties = {
  color: '#ecf0f1',
  textDecoration: 'none',
  fontSize: '1rem',
 
  margin: '5px 0',
};

const linkStyle2: React.CSSProperties = {
  color: '#ecf0f1',
  textDecoration: 'none',
  fontSize: '0.9rem',
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
  justifyContent:'center',
  gap: '20px'
};

const bottomLinks: React.CSSProperties = {
  marginTop: '5px',
  fontSize: '0.8rem',
  display: 'flex',
  maxWidth: '75%',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent:'center',
  gap: '5px',
  flexWrap: 'wrap'
 
};




export default Footer;
