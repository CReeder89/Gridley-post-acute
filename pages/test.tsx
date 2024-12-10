import Link from 'next/link';
import React from 'react';
import TheSwiper from '../components/Swiper';
import Image from 'next/image';

const WhyChooseUs: React.FC = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Why Choose Gridley Post Acute?</h1>
      <p style={introTextStyle}>
        At Gridley Post Acute, we strive to set the standard in quality care, offering compassionate and professional services tailored to meet the unique needs of every resident. As the only <strong>5-star rated facility</strong> in the area, we are proud to be the trusted choice for post acute care.
      </p>

      <div style={contentSectionStyle}>
        {/* Left Side - Main Content */}
        <div style={leftContentStyle}>
          <h2 style={subtitleStyle}>Comprehensive Care Continuum</h2>
          <p style={paragraphStyle}>
            Seamlessly transition from the hospital to our Skilled Nursing Facility, where our dedicated team ensures a continuum of care for your physical, emotional, and social well-being.
          </p>

          <h2 style={subtitleStyle}>Family-Centered Care</h2>
          <p style={paragraphStyle}>
            We recognize the importance of family involvement in the healing process. Our facility encourages family participation and provides a supportive environment for both residents and their loved ones.
          </p>

          <h2 style={subtitleStyle}>Language Support</h2>
          <p style={paragraphStyle}>
            Language should never be a barrier to your health. Our team includes experienced healthcare professionals fluent in multiple languages, ensuring effective and accessible care for all.
          </p>

          <h2 style={subtitleStyle}>Nutritional Services</h2>
          <p style={paragraphStyle}>
            Our Registered Dietitian works closely with patients to address individual nutritional needs and preferences. With tailored menu options, we help you enjoy meals that meet your unique requirements.
          </p>

          <p style={paragraphStyle}>
            Don’t just take our word for it—compare us to other facilities in the area on the official <Link href="https://www.medicare.gov/care-compare/results?searchType=NursingHome&page=1&city=Gridley&state=CA&zipcode=&radius=50&sort=closest" target="_blank" style={linkStyle}>Medicare.gov comparison page</Link>.
          </p>
        </div>

        {/* Right Side - Services Overview */}
        <div style={rightContentStyle}>
          <h2 style={sidebarTitleStyle}>Our Services</h2>
          <ul style={listStyle}>
            <li>Registered dietitian</li>
            <li>Respiratory therapy</li>
            <li>24/7 Skilled nursing care</li>
            <li>Wound care</li>
            <li>Hospice care</li>
            <li>Physical therapy</li>
            <li>Occupational therapy</li>
            <li>Speech therapy</li>
          </ul>

          {/* Add an image slider or promotional image */}
          <div style={{ width: '300px', margin: '20px auto', borderRadius: '10px'}}>
            {/* Placeholder for a swiper or promotional image */}
            <Image
            src="/images/cna-group2.jpg"
            alt="GPA Logo"
            width={400}
            height={137}
            style={{ width: '100%',  height: 'auto' }} />
          </div>
        </div>
      </div>
      <TheSwiper />
    </div>
  );
};

// Styles
const containerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
};

const titleStyle: React.CSSProperties = {
  marginBottom: '30px',
  textAlign: 'center',
};

const introTextStyle: React.CSSProperties = {
  lineHeight: '1.6',
  color: '#333',
  marginBottom: '40px',
  textAlign: 'center',
};

const contentSectionStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '20px',
  flexWrap: 'wrap',
  marginBottom: '10px'
};

const leftContentStyle: React.CSSProperties = {
  flex: 2,
};

const rightContentStyle: React.CSSProperties = {
  flex: 1,
  backgroundColor: '#f8f9fa',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const subtitleStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const paragraphStyle: React.CSSProperties = {
  lineHeight: '1.6',
  color: '#333',
  marginBottom: '20px',
};

const sidebarTitleStyle: React.CSSProperties = {
  marginBottom: '20px',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '1.5rem',
};

const listStyle: React.CSSProperties = {
  lineHeight: '1.6',
  color: '#333',
  paddingLeft: '20px',
  listStyleType: 'disc',
  marginBottom: '20px',
};

const linkStyle: React.CSSProperties = {
  color: '#0066cc',
  textDecoration: 'underline',
};

export default WhyChooseUs;
