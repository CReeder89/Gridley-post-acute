import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import MetaHead from '../../components/MetaHead';
import Button from '../../components/ServiceButton';

const ActivitiesProgram: React.FC = () => {
  return (
    <div style={containerStyle}>
      <MetaHead
        title="Activities Program - Gridley Post Acute"
        description="Engage in our enriching activities program, crafted to enhance physical, social, and mental well-being through tailored, therapeutic experiences."
        image="/images/activities.jpg"
        url={`${process.env.WEBSITE}/services/activities-program`}
      />

      <h1 style={titleStyle}>Activities Program</h1>
      <p style={introTextStyle}>
        At Gridley Post Acute, we recognize the importance of staying active and engaged for overall health and happiness. Our activities program is thoughtfully designed to offer therapeutic and enjoyable experiences, fostering community, connection, and creativity for all residents.
      </p>

      <div style={contentSectionStyle}>
        {/* Left Side - Main Content */}
        <div style={leftContentStyle}>
          <h2 style={subtitleStyle}>Diverse and Enriching Activities</h2>
          <p style={paragraphStyle}>
            Our activities program caters to a wide range of interests and abilities, ensuring that every resident can find joy and fulfillment. We offer:
          </p>
          <ul style={listStyle}>
            <li>Art and Crafts Workshops</li>
            <li>Bingo, Board Games, and Puzzles</li>
            <li>Movie Nights</li>
            <li>Gardening and Nature Activities</li>
            <li>Special Events and Celebrations</li>
          </ul>

          <h2 style={subtitleStyle}>Field Trips and Outdoor Adventures</h2>
          <p style={paragraphStyle}>
            We encourage residents to explore and enjoy the outdoors through field trips and outings. Past activities have included fishing trips, visits to local parks, and community events. These excursions provide an opportunity for fresh air, new experiences, and cherished memories.
          </p>

          <h2 style={subtitleStyle}>Social Connection and Community</h2>
          <p style={paragraphStyle}>
            Building a sense of community is at the heart of our activities program. Our residents come together to share stories, laughter, and companionship through group events and shared experiences. Family members are welcome to participate in select activities, further strengthening bonds and creating lasting memories.
          </p>

          <h2 style={subtitleStyle}>Tailored to Individual Needs</h2>
          <p style={paragraphStyle}>
            We ensure that activities are accessible and adaptable for all residents, regardless of physical or cognitive abilities. Our compassionate staff works closely with each resident to provide personalized support and encouragement, making every activity meaningful and enjoyable.
          </p>
        </div>

        {/* Right Side - Visuals and Key Points */}
        <div style={rightContentStyle}>
          <h2 style={sidebarTitleStyle}>Why Participate in Activities?</h2>
          <ul style={listStyle}>
            <li>Improves physical health and mobility</li>
            <li>Boosts mental well-being and reduces stress</li>
            <li>Fosters social connections and friendships</li>
            <li>Encourages creativity and self-expression</li>
            <li>Promotes a sense of purpose and belonging</li>
          </ul>

          <div style={imageContainerStyle}>
            <Image
              src="/images/activities.jpg"
              alt="Activities Program"
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

export default ActivitiesProgram;
