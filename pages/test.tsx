import Link from 'next/link';
// import Image from 'next/image';
import TheSwiper from '../components/Swiper';

const WhyChooseUs: React.FC = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Why Choose Gridley Post Acute?</h1>
      <p style={introTextStyle}>
        At Gridley Post Acute, we understand that choosing the right care facility for your loved one is an important decision. As the only <strong>5-star rated facility</strong> in the Butte County area, we strive to go above and beyond to provide exceptional care and support to our residents. We don’t just meet the standards—we set them.
      </p>

      <div style={contentSectionStyle}>
        {/* Left Side - Main Content */}
        <div style={leftContentStyle}>
          <h2 style={subtitleStyle}>Exceptional Quality of Care</h2>
          <p style={paragraphStyle}>
            Our commitment to quality care is reflected in our CMS 5-star rating, which rates us as one of the top facilities in the region. This rating encompasses various aspects, including staffing levels, quality measures, and health inspections. We’ve earned this rating through a rigorous adherence to high standards, continual staff training, and a strong focus on individualized care.
          </p>

          <h2 style={subtitleStyle}>Dedicated and Highly-Trained Staff</h2>
          <p style={paragraphStyle}>
            Our staff is the heart of our facility. Each member of our team is highly trained and dedicated to providing compassionate, professional care. We believe in treating our residents like family, providing them with the respect and dignity they deserve in a supportive and nurturing environment.
          </p>

          <h2 style={subtitleStyle}>State-of-the-Art Facilities and Amenities</h2>
          <p style={paragraphStyle}>
            We believe that a comfortable environment plays a significant role in recovery and well-being. Our facility offers modern amenities, spacious rooms, and specialized equipment to cater to each resident’s needs. From rehabilitation rooms to social activity spaces, we’ve designed our facility to make residents feel at home.
          </p>

          <p style={paragraphStyle}>
            Don't just take our word for it—compare us to other facilities in the area on the official <Link href="https://www.medicare.gov/care-compare/results?searchType=NursingHome&page=1&city=Gridley&state=CA&zipcode=&radius=50&sort=closest" target="_blank" style={linkStyle}>Medicare.gov comparison page</Link>.
          </p>
        </div>

        {/* Right Side - Key Differentiators or Statistics */}
        <div style={rightContentStyle}>
          <h2 style={sidebarTitleStyle}>What Sets Us Apart</h2>
          <ul style={listStyle}>
            <li>Compassionate 24/7 nursing care</li>
            <li>Specialized rehabilitation programs</li>
            <li>Highly personalized treatment plans</li>
            <li>Friendly, experienced staff</li>
            <li>Comfortable, state-of-the-art facilities</li>
          </ul>

          <div style={{width:'300px',  margin: '0 auto', borderRadius: '10px', overflow: 'hidden'}}>
          <TheSwiper />
          </div>
          {/* <Image
            src="/images/gpa-front.jpg" // Replace with your actual image
            alt="Gridley Post Acute Interior"
            width={300}
            height={200}
            style={imageStyle}
          /> */}
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

const introTextStyle: React.CSSProperties = {
  fontSize: '1.2rem',
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
};

const listStyle: React.CSSProperties = {
  lineHeight: '1.6',
  color: '#333',
  paddingLeft: '20px',
  listStyleType: 'disc',
  marginBottom: '20px',
};

// const imageStyle: React.CSSProperties = {
//   borderRadius: '8px',
//   objectFit: 'cover',
//   display: 'block',
//   margin: '0 auto',
// };

const linkStyle: React.CSSProperties = {
  color: '#0066cc',
  textDecoration: 'underline',
};




export default WhyChooseUs;
