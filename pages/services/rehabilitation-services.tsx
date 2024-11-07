import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import MetaHead from '../../components/MetaHead';
import Button from '../../components/ServiceButton';

const RehabilitationServices: React.FC = () => {
  return (
    <div style={containerStyle}>
      <MetaHead
        title="Rehabilitation Services - Gridley Post Acute"
        description="Learn about our specialized rehabilitation services, including physical, respiratory, and speech therapy, designed to help residents regain strength and independence."
        image="/images/rehabilitation.jpg"
        url={`${process.env.WEBSITE}/services/rehabilitation-services`}
      />

      <h1 style={titleStyle}>Rehabilitation Services</h1>
      <p style={introTextStyle}>
        At Gridley Post Acute, we provide rehabilitation services designed to support residents in recovering strength, mobility, and independence. Our therapies are tailored to meet the unique needs of each individual, ensuring effective and compassionate care.
      </p>

      <div style={contentSectionStyle}>
        {/* Left Side - Main Content */}
        <div style={leftContentStyle}>
          <h2 style={subtitleStyle}>Physical Therapy</h2>
          <p style={paragraphStyle}>
            Our physical therapy programs focus on improving strength, mobility, and balance. These programs are especially beneficial for residents recovering from surgeries, strokes, or injuries, helping them regain independence and confidence.
          </p>
          <ul style={listStyle}>
            <li>Pain Reduction and Management</li>
            <li>Building Strength and Endurance</li>
            <li>Improving Mobility and Balance</li>
            <li>Post-Stroke Motor Control Restoration</li>
            <li>Post-Amputation Rehabilitation</li>
          </ul>

          <h2 style={subtitleStyle}>Respiratory Therapy</h2>
          <p style={paragraphStyle}>
            Our respiratory therapy services help residents manage and improve breathing conditions. Whether recovering from respiratory illnesses or managing chronic conditions, our team provides expert care to enhance lung function and overall quality of life.
          </p>
          <ul style={listStyle}>
            <li>Oxygen Therapy Management</li>
            <li>Education on Breathing Techniques</li>
            <li>Ventilator Care and Support</li>
            <li>Assistance with Chronic Conditions like COPD</li>
            <li>Monitoring and Adjusting Respiratory Equipment</li>
          </ul>

          <h2 style={subtitleStyle}>Speech Therapy</h2>
          <p style={paragraphStyle}>
            Our speech therapy programs address challenges with communication, swallowing, and cognitive skills. We also work closely with families to provide guidance and training to support residents in their recovery.
          </p>
          <ul style={listStyle}>
            <li>Improving Speech Clarity and Expression</li>
            <li>Treatment for Swallowing Issues (Dysphagia)</li>
            <li>Enhancing Listening and Comprehension Skills</li>
            <li>Family Education on Oral Motor Skills Management</li>
          </ul>
        </div>

        {/* Right Side - Visuals and Key Points */}
        <div style={rightContentStyle}>
          <h2 style={sidebarTitleStyle}>What Makes Our Rehabilitation Services Unique?</h2>
          <ul style={listStyle}>
            <li>Individualized Therapy Plans for Every Resident</li>
            <li>Skilled and Compassionate Therapists</li>
            <li>Collaborative Approach with Residents and Families</li>
            <li>Focus on Recovery and Long-Term Wellness</li>
          </ul>

          <div style={{ width: '300px', margin: '20px auto', borderRadius: '10px' }}>
            <Image
              src="/images/rehabilitation.jpg"
              alt="Rehabilitation Services"
              width={400}
              height={300}
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

export default RehabilitationServices;
