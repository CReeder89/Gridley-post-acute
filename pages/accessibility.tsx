import React from 'react';

const WebAccessibility: React.FC = () => {
  return (
    <div style={containerStyle}>
      <h1>Web Accessibility Statement</h1>
      <p><strong>Last Updated: [Insert Date]</strong></p>
      <p>Gridley Post Acute is committed to ensuring accessibility for all visitors. We strive to create an inclusive experience by following accessibility best practices.</p>

      <h2>1. Our Commitment</h2>
      <p>We are dedicated to ensuring that our website is usable by individuals of all abilities, including those using assistive technologies.</p>

      <h2>2. Accessibility Features</h2>
      <ul style={{paddingLeft:'20px'}}>
        <li>Keyboard navigation</li>
        <li>Text alternatives for images</li>
        <li>Color contrast considerations</li>
        <li>Easy-to-read content and layout</li>
      </ul>

      <h2>3. Ongoing Efforts</h2>
      <p>We are continuously improving the accessibility of our website. If you have suggestions or experience issues, please contact us.</p>

      <h2>4. Contact Us</h2>
      <p>For accessibility assistance or to request information in an alternate format, please contact us at:</p>
      <p><strong>Phone</strong>: (530) 456-0400</p>
      <p><strong>Email</strong>: [Email]</p>
      <p><strong>Address</strong>: 246 Spruce Street, Gridley, CA 95948</p>
      <p>We are here to ensure your experience on our site is inclusive and accessible.</p>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

export default WebAccessibility;
