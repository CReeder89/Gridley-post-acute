import Image from 'next/image';
import Button from '../../components/ServiceButton';  // Import the reusable Button component
import MetaHead from '../../components/MetaHead';

const RehabilitationServices: React.FC = () => {
  return (
    <div>
      <MetaHead
        title="Rehabilitation Services - Gridley Post Acute"
        description="Learn about our specialized rehabilitation services, including physical, occupational, and speech therapy, designed to help residents regain strength and independence."
        image="/images/gpa-front.jpg"
        url={`${process.env.WEBSITE}/services/rehabilitation-services`}
      />

      <div style={containerStyle}>
        <h1 style={titleStyle}>Rehabilitation Services</h1>

        {/* Introductory Section */}
        <div style={sectionStyle}>
          <div style={contentStyle}>
            <p style={descriptionStyle}>
              The Gridley Post Acute strives to provide our residents with the best quality care; part of that is providing rehabilitation services. The goal is to decrease the length of stay where possible by tailoring rehab services to meet each of our residents’ needs and maximizing each resident’s independence and capabilities before being discharged.
            </p>
          </div>
        
            <Image
              src="/images/rehabilitation.jpg"  // Replace with your actual image path
              alt="Rehabilitation Services"
              width={400}
              height={250}
              style={imageStyle}
            />
      
        </div>

        {/* Physical Therapy Section */}
        <h2 style={sectionTitleStyle}>Physical Therapy</h2>
        <p style={sectionTextStyle}>
          Our physical therapy programs focus on building muscle strength, stamina, and coordination.
        </p>
        <ul style={listStyle}>
          <li>Pain Reduction/Pain Management</li>
          <li>Correct Posture</li>
          <li>Education on Safety and Physical Injury Prevention</li>
          <li>Strength and Endurance</li>
          <li>Improve Issues Surrounding Restricted Range of Motion</li>
          <li>Increased Mobility</li>
          <li>Post-Stroke Motor Controls</li>
          <li>Care for Post-Amputation</li>
        </ul>

        {/* Occupational Therapy Section */}
        <h2 style={sectionTitleStyle}>Occupational Therapy</h2>

        <ul style={listStyle}>
          <li>Housekeeping, cooking, eating, and using bathroom facilities to promote independence</li>
          <li>Assessments of home living</li>
          <li>Counseling on safety and injury prevention</li>
          <li>The ability to dress themselves, restoring dignity</li>
        </ul>

        {/* Speech Therapy Section */}
        <h2 style={sectionTitleStyle}>Speech Therapy</h2>
        <ul style={listStyle}>
          <li>Improvement of verbal expression, clarity of voice and speech</li>
          <li>Treatment of issues with swallowing (dysphagia)</li>
          <li>Increased listening skills and comprehension</li>
          <li>Training and educating family members and caregivers to assist with managing issues with swallowing and oral motor skills</li>
        </ul>

        {/* Back to Services Button */}
        <div style={buttonContainerStyle}>
          <Button text="Back to All Services" href="/services" />
        </div>
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

const sectionStyle: React.CSSProperties = {
  display: 'flex',
 gap: '20px',
  alignContent: 'center',
  justifyContent: 'flex-start',
  marginBottom: '40px',
  flexWrap: 'wrap',
};

const contentStyle: React.CSSProperties = {
  flex: 1,
  marginRight: '20px',
  lineHeight: '1.6',
  color: '#333',
};

const descriptionStyle: React.CSSProperties = {
  lineHeight: '1.6',
  color: '#333',
};



const imageStyle: React.CSSProperties = {
  flex: 1,
  borderRadius: '8px',
  objectFit: 'cover',
  width: '100%',
  maxWidth: 'full',
  height: 'auto',
};

const sectionTitleStyle: React.CSSProperties = {
  marginBottom: '15px',
};

const sectionTextStyle: React.CSSProperties = {
  lineHeight: '1.6',
  color: '#333',
};

const listStyle: React.CSSProperties = {
  listStyleType: 'circle',
  paddingLeft: '20px',
  lineHeight: '1.6',
  color: '#333',
};

const buttonContainerStyle: React.CSSProperties = {
  marginTop: '40px',
  textAlign: 'center',
};

export default RehabilitationServices;
