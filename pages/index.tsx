import Image from 'next/image';
import Button from '../components/ServiceButton';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div style={heroContainerStyle}>
        <div style={heroContentStyle}>
          <div style={logoContainerStyle}>
            <Image
              src="/images/logo.jpg"
              alt="Gridley Post Acute Logo"
              width={220}
              height={86}
              style={{ ...logoStyle, width: '100%', maxWidth: '220px' }}
            />
          </div>

          <div>
            <p><strong>Butte County's only 5 Star Facility</strong></p>
            <div style={starsContainerStyle}>
              ⭐⭐⭐⭐⭐
            </div>
          </div>

          <p>
            Providing 24-hour skilled nursing care with the highest standards of compassion and quality.
          </p>
          <Button text="Explore Our Services" href="/services" />
        </div>
      </div>

      {/* Services Section */}
      <div style={servicesSectionStyle}>
        <div style={serviceColumnStyle}>
          <h2 style={serviceTitleStyle}>Activities</h2>
          <p>
            Our activities program promotes patient well-being by providing engaging and therapeutic experiences, fostering social connections, and enhancing overall physical and mental health for a fulfilling and enriching stay.
          </p>
        </div>

        <div style={serviceColumnStyle}>
          <h2 style={serviceTitleStyle}>Rehabilitation</h2>
          <p>
            Our rehabilitation team offers Physical, Occupational, and Speech Therapy to support your recovery and help improve mobility, build strength, enhance coordination, and restore independence in daily activities.
          </p>
        </div>

        <div style={serviceColumnStyle}>
          <h2 style={serviceTitleStyle}>Respiratory Health</h2>
          <p>
            Our Respiratory Therapy services provide comprehensive support for patients recovering from respiratory conditions or surgeries, ensuring they regain optimal lung function and overall health.
          </p>
        </div>
      </div>

      {/* Contact and Facility Information Section */}
      <div style={contactFacilitySectionStyle}>
        <div style={contactColumnStyle}>
          <Image
            src="/images/gpa-front.jpg"
            alt="Gridley Post Acute"
            width={400}
            height={250}
            style={{ ...facilityImageStyle, width: '100%', maxWidth: '400px' }}
          />
          <h3>Gridley Post Acute</h3>
          <p>
            Gridley Post Acute offers the specialized care you need after an illness or major medical event. Our focus is on helping you return home and get back to the activities you enjoy.
          </p>
          <Image
            src="/images/logo.jpg"
            alt="Gridley Logo"
            width={200}
            height={80}
            style={{ width: '100%', maxWidth: '200px' }}
          />
        </div>

        <div style={contactColumnStyle}>
          <Image
            src="/images/logo2.png"
            alt="GPA Logo"
            width={400}
            height={137}
            style={{ width: '100%', maxWidth: '400px' }}
          />
          <br />
          <Link href='/test'><h3>Why Choose Us?</h3></Link>
          <br />
          <p>At Gridley Post Acute, we understand that choosing the right care facility for your loved one is an important decision. As the only 5-star rated facility in the Butte County area, we strive to go above and beyond to provide exceptional care and support to our residents. We don’t just meet the standards—we set them.</p>
        </div>

        <div style={contactColumnStyle}>
          <Image
            src="/images/cms-logo.png"
            alt="CMS Logo"
            width={420}
            height={242}
            style={{ width: '100%', maxWidth: '420px' }}
          />
          <p><strong>Butte County's only Five-Star Facility</strong></p>
          <p>CMS rates facilities from 1 to 5 stars, with <strong>5 being the highest score!</strong> Read more about CMS scores <Link href="/cms-score">here</Link></p>
          <p> Compare us to other facilities in the area <Link target='_blank' href="https://www.medicare.gov/care-compare/results?searchType=NursingHome&page=1&city=Gridley&state=CA&zipcode=&radius=50&sort=closest">here</Link></p>
        </div>
      </div>
    </div>
  );
};

// Styles

const heroContainerStyle: React.CSSProperties = {
  width: '100%',
  minHeight: '60vh',
  backgroundImage: 'url("/images/hero-banner.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  textAlign: 'center',
  padding: '20px'
};

const heroContentStyle: React.CSSProperties = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '20px',
  borderRadius: '10px',
  width: '100%',
  maxWidth: '600px',
};

const logoContainerStyle: React.CSSProperties = {
  marginBottom: '20px',
};

const logoStyle: React.CSSProperties = {
  display: 'block',
  margin: '0 auto',
};

const servicesSectionStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '50px 20px',
  backgroundColor: '#f5f5f5',
  flexWrap: 'wrap',
};

const serviceColumnStyle: React.CSSProperties = {
  flex: 1,
  maxWidth: '300px',
  margin: '0 10px',
  textAlign: 'center',
  padding: '20px',
};

const serviceTitleStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  marginBottom: '10px',
  color: '#2c3e50',
};

const contactFacilitySectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  padding: '50px 20px',
  backgroundColor: '#fff',
  flexWrap: 'wrap',
};

const contactColumnStyle: React.CSSProperties = {
  flex: 1,
  maxWidth: 'auto',
  margin: '10px',
  textAlign: 'center',
};

const facilityImageStyle: React.CSSProperties = {
  borderRadius: '8px',
};

const starsContainerStyle: React.CSSProperties = {
  fontSize: '3rem',
  color: '#f39c12',
  marginTop: '10px',
};

// Media queries for responsive adjustments
const styles = `
  @media (max-width: 1024px) {
    ${heroContainerStyle.height = '50vh'};
    ${serviceColumnStyle.maxWidth = '45%'};

  }

  @media (max-width: 768px) {
    ${heroContainerStyle.height = 'auto'};
    ${heroContentStyle.padding = '10px'};
    ${serviceColumnStyle.maxWidth = '100%'};
    ${contactColumnStyle.maxWidth = '100%'};
  }
`;

export default Home;
