import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import MetaHead from '../../components/MetaHead';
import Button from '../../components/ServiceButton';

const SocialServices: React.FC = () => {
  return (
    <div style={containerStyle}>
      <MetaHead
        title="Social Services - Gridley Post Acute"
        description="Discover our comprehensive social services aimed at supporting residents and their families, ensuring a smooth transition and emotional well-being."
        image="/images/social-services.jpg"
        url={`${process.env.WEBSITE}/services/social-services`}
      />

      <h1 style={titleStyle}>Social Services</h1>
      <p style={introTextStyle}>
        At Gridley Post Acute, our Social Services team is committed to supporting residents and their families through every stage of care. With compassion and expertise, we ensure smooth transitions into our facility and back home, offering guidance, resources, and emotional support.
      </p>

      <div style={contentSectionStyle}>
        {/* Left Side - Main Content */}
        <div style={leftContentStyle}>
          <h2 style={subtitleStyle}>Family Support and Involvement</h2>
          <p style={paragraphStyle}>
            We believe family involvement is essential to the well-being and recovery of our residents. Our Social Services team works closely with families to maintain strong connections and offer guidance during times of transition. Whether it’s facilitating family meetings or providing counseling, we are here to help every step of the way.
          </p>

          <h2 style={subtitleStyle}>Personalized Care and Advocacy</h2>
          <p style={paragraphStyle}>
            Every resident has unique needs and goals. Our team advocates for residents' rights, coordinates with healthcare providers, and assists with setting personal milestones. We also provide access to community resources and educational tools to empower residents and their families.
          </p>

          <h2 style={subtitleStyle}>Discharge Planning and Transition Assistance</h2>
          <p style={paragraphStyle}>
            Preparing for discharge can be overwhelming, but our Social Services team ensures a seamless transition. From arranging home care services to assisting with transportation, we provide the tools and support needed for residents to return home or transition to another facility with confidence.
          </p>
        </div>

        {/* Right Side - Key Points and Visuals */}
        <div style={rightContentStyle}>
          <h2 style={sidebarTitleStyle}>Key Aspects of Our Social Services</h2>
          <ul style={listStyle}>
            <li>Family Counseling and Guidance</li>
            <li>Access to Community Resources</li>
            <li>Discharge Planning and Coordination</li>
            <li>Advocacy for Resident Rights</li>
            <li>Help with Medicare/Medicaid and Financial Questions</li>
          </ul>

          <div style={imageContainerStyle}>
            <Image
              src="/images/social-services.jpg"
              alt="Social Services"
              width={400}
              height={300}
              style={imageStyle}
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

const imageContainerStyle: React.CSSProperties = {
  width: '300px',
  margin: '20px auto',
  borderRadius: '10px'
}

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  borderRadius: '10px'
}

export default SocialServices;
