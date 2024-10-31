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

          {/* <div>
            <p><strong>Butte County's only 5 Star Facility</strong></p>
            <div style={starsContainerStyle}>
              ⭐⭐⭐⭐⭐
            </div>
          </div> */}

          <Image
              src="/images/5star-banner3.png" 
              alt="Gridley Post Acute Logo"
              width={324}
              height={111}
              style={{ width: '60%', maxWidth: '400', height: 'auto' }}
            />

          <p>
            Providing 24-hour skilled nursing care with the highest standards of compassion and quality.
          </p>
         
        </div>
        <Button text="Explore Our Services" href="/services" />
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
        <h3>Gridley Post Acute</h3>
          <Image
            src="/images/gpa-front.jpg"
            alt="Gridley Post Acute"
            width={400}
            height={250}
            style={{ width: '100%', maxWidth: 'full', height: 'auto' }}

          />
          
          <p>
            Gridley Post Acute offers the specialized care you need after an illness or major medical event. Our focus is on helping you return home and get back to the activities you enjoy.
          </p>
        </div>

        <div style={contactColumnStyle}>
        <Link href='/test'><h3>Why Choose Us?</h3></Link>
        <br />
          <Image
            src="/images/logo2.png"
            alt="GPA Logo"
            width={400}
            height={137}
            style={{ width: '100%', maxWidth: 'full', height: 'auto' }}
      
          />
          <br />
         
          <p>At Gridley Post Acute, we understand that choosing the right care facility for your loved one is an important decision. As the only 5-star rated facility in the Butte County area, we strive to go above and beyond to provide exceptional care and support to our residents. We don’t just meet the standards—we set them.</p>
        </div>

        <div style={contactColumnStyle}>
        <p><strong>Butte County's only Five-Star Facility</strong></p>
          <Image
            src="/images/cms-logo.png"
            alt="CMS Logo"
            width={400}
            height={222}
            style={{ width: '100%', maxWidth: 'full', height: 'auto' }}
           
          />
          
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
  backgroundImage: 'url("/images/hero-banner2.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  textAlign: 'center',
  alignContent: 'center',
  padding: '20px',
  flexDirection: 'column'
};



const heroContentStyle: React.CSSProperties = {
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
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
  backgroundColor: 'rgba(255, 240, 212, 0.3)',
  flexWrap: 'wrap',
  borderTop: '10px solid #d1d1d1',
  borderBottom: '10px solid #d1d1d1',
};

const serviceColumnStyle: React.CSSProperties = {
  flex: 1,
  minWidth: '300px',
  maxWidth: 'auto',
  margin: '5px 10px',
  textAlign: 'center',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  backgroundColor: '#fff',
};

const serviceTitleStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  marginBottom: '10px',
  color: '#2c3e50',
};

const contactFacilitySectionStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '50px 20px',
  background: 'linear-gradient(171deg, rgba(228,171,113,0.850577731092437) 0%, rgba(25,54,58,0) 100%)',
  flexWrap: 'wrap',
  
};

const contactColumnStyle: React.CSSProperties = {

  maxWidth: '400px',
  margin: '10px',
  textAlign: 'center',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  backgroundColor: '#fff',
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
   
  
  }
`;

export default Home;
