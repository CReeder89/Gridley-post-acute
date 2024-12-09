import Link from 'next/link';
import MetaHead from '../components/MetaHead';

const SiteMap: React.FC = () => {
  return (
    <div style={containerStyle}>
      <MetaHead
        title="Site Map - Gridley Post Acute"
        description="Navigate through Gridley Post Acute's website with our easy-to-use site map. Explore services, learn about us, and get in touch quickly."
        image="/images/gpa-front.jpg" 
        url= {`${process.env.WEBSITE}/site-map`} />
 

      <h1 style={titleStyle}>Site Map</h1>
      <p style={introStyle}>Welcome to our Site Map. Explore all the pages on our website with ease.</p>

      <ul style={listStyle}>
        <li style={listItemStyle}>
          <Link href="/" style={linkStyle}>Home</Link>
        </li>
        <li style={listItemStyle}>
          <Link href="/about-us" style={linkStyle}>About Us</Link>
        </li>
        <li style={listItemStyle}>
          <Link href="/cms-score" style={linkStyle}>What is CMS Score</Link>
        </li>
        <li style={listItemStyle}>
          <Link href="/test" style={linkStyle}>Why Choose Us?</Link>
        </li>

        <li style={listItemStyle}>
          <Link href="/services" style={linkStyle}>Services</Link>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>
              <Link href="/services/nursing-services" style={linkStyle}>Nursing Services</Link>
            </li>
            <li style={listItemStyle}>
              <Link href="/services/rehabilitation-services" style={linkStyle}>Rehabilitation Services</Link>
            </li>
            <li style={listItemStyle}>
              <Link href="/services/activities-program" style={linkStyle}>Activities Program</Link>
            </li>
            <li style={listItemStyle}>
              <Link href="/services/social-services" style={linkStyle}>Social Services</Link>
            </li>
          </ul>
        </li>
        {/* <li style={listItemStyle}>
          <Link href="/meet-the-staff" style={linkStyle}>Meet the Staff</Link>
        </li> */}
        <li style={listItemStyle}>
          <Link href="/gallery" style={linkStyle}>Gallery</Link>
        </li>
        <li style={listItemStyle}>
          <Link href="/careers" style={linkStyle}>Careers</Link>
        </li>
        <li style={listItemStyle}>
          <Link href="/contact-us" style={linkStyle}>Contact Us</Link>
        </li>
        <li style={listItemStyle}>
          <Link href="/privacy-policy" style={linkStyle}>Privacy Policy</Link>
        </li>
        <li style={listItemStyle}>
          <Link href="/terms" style={linkStyle}>Terms & Conditions</Link>
        </li>
        <li style={listItemStyle}>
          <Link href="/accessibility" style={linkStyle}>Web Accessibility</Link>
        </li>
      </ul>
    </div>
  );
};

// Styles
const containerStyle: React.CSSProperties = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  lineHeight: '1.6',
};

const titleStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '20px',
};

const introStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '30px',
  color: '#555',
};

const listStyle: React.CSSProperties = {
  listStyleType: 'none',
  paddingLeft: '0',
};

const nestedListStyle: React.CSSProperties = {
  listStyleType: 'circle',
  paddingLeft: '20px',
};

const listItemStyle: React.CSSProperties = {
  marginBottom: '10px',
  
};

const linkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: '#007bff',
  fontWeight: 'bold',
  transition: 'color 0.3s',
};



export default SiteMap;
