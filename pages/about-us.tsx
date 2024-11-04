import Link from 'next/link';
import Image from 'next/image';
import MetaHead from '../components/MetaHead';



const AboutUs: React.FC = () => {
  return (
    <div>


      <MetaHead 
        title="About Us - Gridley Post Acute"
        description="Learn more about Gridley Post Acute and our commitment to delivering compassionate, high-quality care. Meet our dedicated team and explore our mission to support your health and recovery journey."
        image="/images/gpa-front.jpg" 
        url= {`${process.env.WEBSITE}/about-us`} />


    <div style={aboutContainerStyle}>
      {/* About Us Section */}
      <div style={aboutSectionStyle}>
        <h1 style={aboutTitleStyle}>About Us</h1>
        <div style={aboutContentStyle}>
          <p style={aboutTextStyle}>
            Through Gridley Post Acute's skilled nursing and rehabilitation programs, our facility teams specialize in getting patients back on their feet and back into their homes. We offer wide-ranging programs of therapy services including physical, occupational, and speech therapy. We offer intensive stroke and orthopedic rehabilitation and have achieved impressive outcomes as a result of our state-of-the-art programs and equipment. Our highly trained and reputable staff enjoy their work...and it shows.
          </p>
          <div style={imageContainerStyle}>
            <Image
              src="/images/gpa-front.jpg"  // Replace with your image
              alt="About Gridley Post Acute"
              width={400}
              height={250}
              style={{ width: '100%', maxWidth: 'full', height: 'auto' }}
            />
          </div>
        </div>
        <p style={aboutTextStyle}>
          Gridley Post Acute is proud to be at the forefront of patient care and treatment.
        </p>
        <p style={aboutTextStyle}>
          All family members and visitors are welcome.
        </p>

<p style={cmsTextStyle}> Compare us to other facilities in the area <Link target='_blank' href="https://www.medicare.gov/care-compare/results?searchType=NursingHome&page=1&city=Gridley&state=CA&zipcode=&radius=50&sort=closest" style={cmsLinkStyle}>
           here
          </Link>
        </p>

      </div>

      {/* Quick Facts Section */}
      <div style={quickFactsSectionStyle}>
        <h2 style={quickFactsTitleStyle}>Quick Facts</h2>
        <ul style={quickFactsListStyle}>
          <li>All beds are Medicare and Medicaid certified.</li>
          <li>All rooms are equipped with electric high/low beds and cable TV.</li>
          <li>Our full in-house rehab unit offers physical, occupational, and speech-language therapy.</li>
          <li>24/7 Admissions processing</li>
          <li>RNs are onsite 24 hours.</li>
        </ul>
      </div>

      {/* CMS Score Section */}
      <div style={cmsSectionStyle}>
        <h2 style={cmsTitleStyle}>Our CMS Score</h2>
        <p style={cmsTextStyle}>
          We are proud to be the only facility in Butte County with a 5-star CMS rating. This reflects our dedication to providing the highest quality of care for our residents.
        </p>
        <p style={cmsTextStyle}>
          <Link href="/cms-score" style={cmsLinkStyle}>
            Read more about CMS here
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

// Styles

const aboutContainerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',

};

const aboutSectionStyle: React.CSSProperties = {
  marginBottom: '50px',
};

const aboutTitleStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '30px',
};

const aboutContentStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
};

const aboutTextStyle: React.CSSProperties = {
  flex: 1,
  marginRight: '20px',
  lineHeight: '1.6',
  color: '#333',
};

const imageContainerStyle: React.CSSProperties = {
  
  textAlign: 'center',
};

const imageStyle: React.CSSProperties = {
  borderRadius: '8px',
  objectFit: 'cover',
};

const quickFactsSectionStyle: React.CSSProperties = {
  marginTop: '40px',
};

const quickFactsTitleStyle: React.CSSProperties = {
  
  marginBottom: '20px',
};

const quickFactsListStyle: React.CSSProperties = {
  listStyleType: 'circle',
  lineHeight: '1.6',
  color: '#333',
  paddingLeft: '20px',
};

/* CMS Section */
const cmsSectionStyle: React.CSSProperties = {
  marginTop: '40px',
  textAlign: 'center',
};

const cmsTitleStyle: React.CSSProperties = {
  marginBottom: '10px',
};

const cmsTextStyle: React.CSSProperties = {
  lineHeight: '1.6',
  color: '#333',
};

const cmsLinkStyle: React.CSSProperties = {
  color: '#0066cc',
  textDecoration: 'underline',
};

export default AboutUs;
