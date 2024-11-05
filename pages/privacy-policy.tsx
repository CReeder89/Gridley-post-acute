import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={containerStyle}>
      <h1>Privacy Policy</h1>
      <p><strong>Last Updated: [Insert Date]</strong></p>
      <p>Welcome to Gridley Post Acute. Your privacy is important to us. This Privacy Policy explains how we collect, use, and share information about you when you visit our website.</p>

      <h2>1. Information We Collect</h2>
      <ul style={{paddingLeft:'20px'}}>
        <li><strong>Personal Information</strong>: Name, email address, phone number, etc., when provided voluntarily.</li>
        <li><strong>Usage Information</strong>: Details about your use of our website, including traffic data and location data.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul style={{paddingLeft:'20px'}}>
        <li>To respond to inquiries and provide requested information.</li>
        <li>To improve our website and user experience.</li>
        <li>To ensure compliance with legal requirements.</li>
      </ul>

      <h2>3. Sharing of Information</h2>
      <p>We do not sell or share your personal information with third parties for marketing purposes. We may share your information as required by law or to protect our rights.</p>

      <h2>4. Your Rights</h2>
      <ul style={{paddingLeft:'20px'}}>
        <li>Request access to your personal data.</li>
        <li>Request correction or deletion of your information.</li>
        <li>Opt-out of receiving communications from us.</li>
      </ul>

      <h2>5. Changes to This Policy</h2>
      <p>We may update this policy. Any changes will be posted on this page, with the last updated date.</p>

      <p>For questions or concerns about our Privacy Policy, contact us at [Email].</p>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

export default PrivacyPolicy;
