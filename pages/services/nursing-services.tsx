import Image from 'next/image';
import Button from '../../components/ServiceButton';  // Import the reusable Button component

const NursingServices: React.FC = () => {
  return (
    <div style={containerStyle}>
      {/* Nursing Services Title Section */}
      <div style={titleSectionStyle}>
        <h1 style={titleStyle}>Nursing Services</h1>
        <div style={contentStyle}>
          <p style={descriptionStyle}>
            Our highly trained and dedicated nursing staff demonstrates compassion and care with each of our individual residents. The passion of our staff is what separates Gridley Post Acute from surrounding facilities.
          </p>
          <div style={imageContainerStyle}>
            <Image
              src="/images/nursing-services.jpg"  // Replace with your image path
              alt="Nursing Services"
              width={400}
              height={250}
              style={imageStyle}
            />
          </div>
        </div>
      </div>

      {/* Daily Living Section */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Daily Living</h2>
        <p style={sectionTextStyle}>
          Gridley Post Acute has an on-staff Medical Director who is responsible for coordinating with the nursing staff to consistently look for ways we can improve conditions and medical services for our residents. Our on-staff Director of Nursing oversees the day-to-day care and treatment plans of each resident.
        </p>
      </div>

      {/* Health Services Section */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Health Services</h2>
        <ul style={listStyle}>
          <li>Infection Prevention</li>
          <li>Catheter Care</li>
          <li>Audiology Services</li>
          <li>Wound Care</li>
          <li>IV Therapy</li>
          <li>General Inpatient services</li>
          <li>Post-Hospital Extended Care</li>
          <li>Respite Stays</li>
          <li>Mental Health Services</li>
        </ul>
      </div>

      {/* Programs and Education Section */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Programs and Education</h2>
        <ul style={listStyle}>
          <li>Nutrition and Hydration Plans & Programs</li>
          <li>Medication Management and Education</li>
          <li>Off-Site Dialysis</li>
          <li>Hospice Program</li>
          <li>Family Education</li>
          <li>Bowel and Bladder Programs</li>
          <li>Diabetes Management</li>
        </ul>
      </div>


      {/* Diabetes Management Section */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Diabetes Management</h2>
        <ul style={listStyle}>
          <li>Dietary Menu Planning</li>
          <li>Tracking Blood Glucose</li>
          <li>Insulin Administration and Tracking</li>
          <li>Exercise Planning & Program</li>
          <li>Resident & Family Education</li>
        </ul>
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
  fontFamily: 'Arial, sans-serif',
};

const titleSectionStyle: React.CSSProperties = {
  marginBottom: '50px',
};

const titleStyle: React.CSSProperties = {
  fontSize: '3rem',
  color: '#2c3e50',
  marginBottom: '30px',
  textAlign: 'center'
};

const contentStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
};

const descriptionStyle: React.CSSProperties = {
  flex: 1,
  marginRight: '20px',
  fontSize: '1.1rem',
  lineHeight: '1.6',
  color: '#333',
};

const imageContainerStyle: React.CSSProperties = {
  flex: 1,
  textAlign: 'center',
};

const imageStyle: React.CSSProperties = {
  borderRadius: '8px',
  objectFit: 'cover',
};

const sectionStyle: React.CSSProperties = {
  marginBottom: '40px',
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '2rem',
  color: '#2c3e50',
  marginBottom: '15px',
};

const sectionTextStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  lineHeight: '1.6',
  color: '#333',
};

const listStyle: React.CSSProperties = {
  listStyleType: 'circle',
  paddingLeft: '20px',
  fontSize: '1.1rem',
  lineHeight: '1.6',
  color: '#333',
};

const buttonContainerStyle: React.CSSProperties = {
  marginTop: '40px',
  textAlign: 'center',
};

export default NursingServices;
