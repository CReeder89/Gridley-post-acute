import Image from 'next/image';
import Button from '../../components/ServiceButton';

const ActivitiesProgram: React.FC = () => {
  return (
    <div style={activitiesContainerStyle}>
      <h1 style={titleStyle}>Activities Program</h1>
      <div style={contentWrapperStyle}>
        <div style={textSectionStyle}>
          <p>
            Our activities program promotes patient well-being by providing engaging and therapeutic experiences that foster social connections and enhance physical and mental health. With a variety of activities tailored to our residents' preferences and needs, we aim to create a fulfilling and enriching environment.
          </p>
          <p>
            Activities include arts and crafts, music therapy, group games, exercise classes, and more. Our caring staff ensures that each activity is adapted to suit each resident's abilities, so everyone can participate in a meaningful way.
          </p>
          <p>
            <strong>Engagement and community:</strong> We believe that staying active and connected contributes to a happier and healthier life. Family members are encouraged to participate, creating shared experiences and building lasting memories.
          </p>
          <ul style={activitiesListStyle}>
            <li>Exercise and movement classes</li>
            <li>Arts and crafts workshops</li>
            <li>Music and dance therapy</li>
            <li>Outdoor gardening and nature activities</li>
            <li>Game nights and group puzzles</li>
          </ul>
        </div>
        <div style={imageSectionStyle}>
          <Image
            src="/images/activities.jpg" // Replace with your actual image path
            alt="Activities Program"
            width={400}
            height={250}
            style={imageStyle}
          />
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

const buttonContainerStyle: React.CSSProperties = {
  marginTop: '40px',
  textAlign: 'center',
};

const activitiesContainerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const titleStyle: React.CSSProperties = {
  fontSize: '3rem',
  color: '#2c3e50',
  marginBottom: '30px',
  textAlign: 'center',
};

const contentWrapperStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
};

const textSectionStyle: React.CSSProperties = {
  flex: 1,
  marginRight: '20px',
  fontSize: '1.1rem',
  lineHeight: '1.6',
  color: '#333',
};

const imageSectionStyle: React.CSSProperties = {
  flex: 1,
  textAlign: 'center',
};

const imageStyle: React.CSSProperties = {
  borderRadius: '8px',
  objectFit: 'cover',
};

const activitiesListStyle: React.CSSProperties = {
  paddingLeft: '20px',
  listStyleType: 'circle',
  fontSize: '1.1rem',
  lineHeight: '1.6',
  color: '#333',
};

export default ActivitiesProgram;
