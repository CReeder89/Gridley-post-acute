import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div style={containerStyle}>
      <h1>Terms and Conditions</h1>
      <p><strong>Last Updated: [Insert Date]</strong></p>
      <p>These terms govern your use of the Gridley Post Acute website. By accessing this site, you agree to these terms.</p>

      <h2>1. Use of the Website</h2>
      <p>You agree to use the website only for lawful purposes and in a way that does not infringe the rights of others.</p>

      <h2>2. Intellectual Property</h2>
      <p>All content on this site, including text, images, and logos, is the property of Gridley Post Acute. Unauthorized use is prohibited.</p>

      <h2>3. Limitation of Liability</h2>
      <p>Gridley Post Acute is not liable for any damages or losses related to your use of the website.</p>

      <h2>4. External Links</h2>
      <p>Our website may contain links to other sites. We are not responsible for the content or practices of these external websites.</p>

      <h2>5. Changes to Terms</h2>
      <p>We reserve the right to update these terms at any time. Your continued use of the site will mean you accept those changes.</p>

      <p>For any questions about our Terms and Conditions, contact us at [Email].</p>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

export default TermsAndConditions;
