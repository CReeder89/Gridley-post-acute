import Image from 'next/image';

const CMSScore: React.FC = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>What is a CMS Score?</h1>

      {/* Introduction Section */}
      <div style={sectionStyle}>
        <p style={textStyle}>
          The Centers for Medicare & Medicaid Services (CMS) provides a <strong>5-star quality rating system</strong> to help patients and families compare nursing homes based on the level of care they provide. The system rates facilities from 1 to 5 stars, with 5 being the highest score and indicating the highest quality of care.
        </p>
        <p style={textStyle}>
          At <strong>Gridley Post Acute</strong>, we are proud to be the <strong>only facility in Butte County with a 5-star CMS rating</strong>, reflecting our commitment to providing exceptional care to our residents. Here’s what goes into achieving and maintaining this top-tier rating.
        </p>
      </div>

      {/* What Goes Into a CMS Score */}
      <h2 style={sectionTitleStyle}>What Goes Into a CMS Score?</h2>
      <div style={sectionStyle}>
        <h3 style={subTitleStyle}>1. Health Inspections</h3>
        <p style={textStyle}>
          The health inspection rating is based on the findings from state inspectors who visit the facility annually and after complaints. They examine areas such as resident care, staff practices, and overall facility conditions. A higher score indicates fewer deficiencies and better compliance with federal regulations.
        </p>

        <h3 style={subTitleStyle}>2. Staffing Levels</h3>
        <p style={textStyle}>
          Staffing ratings are determined by the number of hours of care provided to residents by nursing staff. This includes both registered nurses (RNs) and certified nursing assistants (CNAs). More staff per resident typically leads to better quality care, which results in a higher CMS score.
        </p>

        <h3 style={subTitleStyle}>3. Quality Measures</h3>
        <p style={textStyle}>
          CMS evaluates various quality measures, including how well facilities prevent bedsores, manage infections, and control pain for residents. These measures are based on data submitted by the facility and assess the overall health and well-being of residents.
        </p>
      </div>

      {/* Maintaining a 5-Star Rating */}
      <h2 style={sectionTitleStyle}>Maintaining a 5-Star Rating</h2>
      <div style={sectionStyle}>
        <p style={textStyle}>
          Achieving a 5-star CMS rating is no small feat, and maintaining it requires dedication to <strong>continuous improvement</strong> and <strong>exceptional care</strong> standards. Here are a few key factors that help us maintain our top rating:
        </p>

        <ul style={listStyle}>
          <li><strong>Ongoing staff training and development</strong> to ensure best practices in patient care.</li>
          <li><strong>Comprehensive care plans</strong> tailored to each resident’s specific needs, ensuring personalized treatment.</li>
          <li><strong>Regular internal audits and assessments</strong> to stay ahead of potential issues and ensure compliance with CMS guidelines.</li>
          <li><strong>Strong focus on infection control and safety protocols</strong>, especially in light of COVID-19 and other health concerns.</li>
        </ul>

        <p style={textStyle}>
          At Gridley Post Acute, we understand that maintaining a 5-star rating is about more than just meeting the minimum standards — it's about exceeding them to ensure the best possible outcomes for our residents.
        </p>
      </div>

      {/* Why It Matters */}
      <h2 style={sectionTitleStyle}>Why It Matters for Patients and Families</h2>
      <div style={sectionStyle}>
        <p style={textStyle}>
          Choosing a nursing facility for yourself or a loved one is one of the most important decisions you can make. A 5-star CMS rating is a reflection of <strong>exceptional care</strong> and <strong>trustworthiness</strong>. It ensures peace of mind knowing that your loved one will receive top-notch care in a safe, supportive environment.
        </p>
        <p style={textStyle}>
          At Gridley Post Acute, we take pride in our 5-star CMS rating because it stands for our <strong>commitment to excellence</strong>, the <strong>compassionate care</strong> we provide, and the <strong>well-being of our residents</strong>.
        </p>
      </div>

      {/* Optional: Add an Image or Graphic Related to CMS Rating */}
      <div style={imageContainerStyle}>
        <Image
          src="/images/cms-logo.png"  // Replace with your actual image
          alt="CMS 5-Star Rating"
          width={420}
          height={242}
          style={{ width: '100%', maxWidth: '420px', height: 'auto' }}
        />
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
 
  textAlign: 'center',
  marginBottom: '30px',

};

const sectionStyle: React.CSSProperties = {
  marginBottom: '40px',
};

const sectionTitleStyle: React.CSSProperties = {
  marginBottom: '20px',
};

const subTitleStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  marginBottom: '10px',
  color: '#2c3e50',
};

const textStyle: React.CSSProperties = {
  color: '#333',
  lineHeight: '1.8',
};

const listStyle: React.CSSProperties = {
  paddingLeft: '20px',
  lineHeight: '1.8',
  color: '#333',
};

const imageContainerStyle: React.CSSProperties = {
  textAlign: 'center',
  marginTop: '40px',
};

const imageStyle: React.CSSProperties = {
  borderRadius: '10px',
  objectFit: 'cover',
};

export default CMSScore;
