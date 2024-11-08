import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Button from '../../components/ServiceButton';
import MetaHead from '../../components/MetaHead';

const SkilledNursing: React.FC = () => {
  return (
    <div style={containerStyle}>

<MetaHead
        title="Nursing Services - Gridley Post Acute"
        description="Discover our comprehensive nursing services at Gridley Post Acute, where we provide 24/7 compassionate care tailored to meet the unique needs of each resident."
        image="/images/gpa-front.jpg"
        url={`${process.env.WEBSITE}/services/nursing-services`} />

      <h1 style={titleStyle}>24-Hour Skilled Nursing Services</h1>
      <p style={introTextStyle}>
        At Gridley Post Acute, our 24-hour skilled nursing services are designed to provide exceptional care and support tailored to meet the unique needs of every resident. Our compassionate team is here around the clock to ensure the health, safety, and well-being of all individuals in our care.
      </p>

      <div style={contentSectionStyle}>
        {/* Left Side - Main Content */}
        <div style={leftContentStyle}>
          <h2 style={subtitleStyle}>Daily Living</h2>
          <p style={paragraphStyle}>
            Gridley Post Acute has an on-staff Medical Director who is responsible for coordinating with the nursing staff to consistently look for ways we can improve conditions and medical services for our residents. Our on-staff Director of Nursing oversees the day-to-day care and treatment plans of each resident, ensuring that every individual receives the highest level of care.
          </p>

          <h2 style={subtitleStyle}>Comprehensive Skilled Nursing Care</h2>
          <p style={paragraphStyle}>
            Our skilled nursing team includes Registered Nurses (RNs), Licensed Vocational Nurses (LVNs), and Certified Nursing Assistants (CNAs) who collaborate to provide comprehensive care. Whether it's managing chronic conditions, assisting with rehabilitation, or ensuring daily health needs are met, we are dedicated to supporting our residents every step of the way.
          </p>

          <h2 style={subtitleStyle}>What CNAs Handle</h2>
          <p style={paragraphStyle}>
            Certified Nursing Assistants (CNAs) play a vital role in our facility, ensuring residents are comfortable and cared for. Their responsibilities include:
          </p>
          <ul style={listStyle}>
            <li>Assisting with daily activities like bathing, dressing, and grooming</li>
            <li>Helping residents with meals, including feeding assistance</li>
            <li>Providing mobility support, including transferring and repositioning</li>
            <li>Monitoring vital signs and reporting any changes to the nursing team</li>
            <li>Offering emotional support and companionship</li>
          </ul>

          <h2 style={subtitleStyle}>Resident Services</h2>
          <ul style={listStyle}>
            <li>Infection Prevention</li>
            <li>Catheter Care</li>
            <li>Audiology Services</li>
            <li>Wound Care</li>
            <li>IV Therapy</li>
          </ul>
        </div>

        {/* Right Side - Key Features */}
        <div style={rightContentStyle}>
          <h2 style={sidebarTitleStyle}>Why Choose Us for Skilled Nursing?</h2>
          <ul style={listStyle}>
            <li>24/7 Skilled Nursing Care</li>
            <li>Dedicated team of RNs, LVNs, and CNAs</li>
            <li>Comprehensive care plans tailored to each resident</li>
            <li>Family-centered approach to care</li>
          </ul>

          {/* Add an image or swiper */}
          <div style={{ width: '300px', margin: '20px auto', borderRadius: '10px' }}>
            <Image
              src="/images/cna-group2.jpg"
              alt="Nursing Team"
              width={400}
              height={137}
              style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            />
          </div>
        </div>
      </div>

      {/* Back to Services Button */}
      <div style={buttonContainerStyle}>
          <Button text="Back to All Services" href="/services" />
        </div>
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
  marginBottom: '10px',
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

const buttonContainerStyle: React.CSSProperties = {
  marginTop: '40px',
  textAlign: 'center',
};

export default SkilledNursing;
