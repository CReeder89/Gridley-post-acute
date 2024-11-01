import Image from 'next/image';
import Button from '../../components/ServiceButton';
import MetaHead from '../../components/MetaHead';

const SocialServices: React.FC = () => {
  return (
    <div>
       <MetaHead
        title="Social Services - Gridley Post Acute"
        description="Discover our comprehensive social services aimed at supporting residents and their families, ensuring a smooth transition and emotional well-being."
        image="/images/gpa-front.jpg"
        url={`${process.env.WEBSITE}/services/social-services`} />

      <div style={socialServicesContainerStyle}>
        <h1 style={titleStyle}>Social Services</h1>
        <div style={contentWrapperStyle}>
          <div style={textSectionStyle}>
            <p>
              At Gridley Post Acute, our Social Services team is dedicated to supporting residents and their families throughout the care journey. Our compassionate staff helps facilitate smooth transitions into our facility and back home, providing guidance, resources, and emotional support every step of the way.
            </p>
            <p>
              Our services are tailored to meet each resident’s unique needs, ensuring a seamless integration into our community and helping them maintain meaningful connections with family and friends. We work closely with residents to address concerns, coordinate care, and assist in achieving personal goals.
            </p>
            <p>
              <strong>Family involvement and emotional well-being:</strong> We understand the importance of family in the recovery process and encourage active family participation. Our goal is to provide a nurturing environment where residents feel empowered and supported.
            </p>
            <ul style={socialServicesListStyle}>
              <li>Family counseling and support</li>
              <li>Assistance with community resources</li>
              <li>Coordination of discharge planning</li>
              <li>Advocacy and resident rights support</li>
              <li>Emotional and spiritual support services</li>
            </ul>
          </div>
          <div style={imageSectionStyle}>
            <Image
              src="/images/social-services.jpg" // Replace with your actual image path
              alt="Social Services"
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
    </div>
  );
};

// Styles

const buttonContainerStyle: React.CSSProperties = {
  marginTop: '40px',
  textAlign: 'center',
};

const socialServicesContainerStyle: React.CSSProperties = {
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

  textAlign: 'center',
};

const imageStyle: React.CSSProperties = {
  borderRadius: '8px',
  objectFit: 'cover',
  width: '100%', maxWidth: 'full', height: 'auto'
};

const socialServicesListStyle: React.CSSProperties = {
  paddingLeft: '20px',
  listStyleType: 'circle',
  fontSize: '1.1rem',
  lineHeight: '1.6',
  color: '#333',
};

export default SocialServices;
