import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import MetaHead from '../components/MetaHead';
import Button from '../components/ServiceButton';
import AnimateIn from '../components/AnimateIn';
import Divider from '@mui/material/Divider';

const PostAcuteCare: React.FC = () => {
  const staff = [
    {
      name: "Matt Maylin",
      title: "Administrator",
    },
    {
      name: "Monica Voris",
      title: "Director of Nursing",
    },
    {
      name: "Robert Hinman",
      title: "Rehabilitation Specialist",
    },
    {
      name: "Nichole Sperber",
      title: "Social Services",
    },
    {
      name: "Nancy Zepeda",
      title: "Billing",
    },
    {
      name: "Phaedra Snow",
      title: "Admissions Director",
    },
    {
      name: "Bill Lagrone",
      title: "Maintenance Director",
    },
    {
      name: "Sarah Boesen",
      title: "Marketing Director",
    },
    {
      name: "Mollie Openshaw",
      title: "Co-Program Director",
    },
  ];

  return (
    <div style={containerStyle}>
      <MetaHead
        title="About Us - Gridley Post Acute"
        description="Learn more about Gridley Post Acute and our commitment to delivering compassionate, high-quality care. Meet our dedicated team and explore our mission to support your health and recovery journey."
        image="/images/gpa-front.jpg"
        url={`${process.env.WEBSITE}/about-us`} />


      <AnimateIn immediate>
        <h1 style={titleStyle}>About Us</h1>
        <p style={introTextStyle}>
          Gridley Post Acute is a 24-hour skilled nursing facility located in Gridley, California. Gridley is located 60 miles North of Sacramento and 30 miles South of Chico. We are proud to be a part of the West Harbor Healthcare line of skilled nursing facilities located throughout California.
          <br />
          <br />
          Our mission is to support residents in regaining independence and returning home. We offer a full range of therapy services including physical, occupational, respiratory, and speech therapy.
          <br />
          <br />
          Our dedicated staff brings both skill and compassion to their work, providing exceptional care to every resident. We welcome visitors and are pleased to offer tours to show how we can support you or your loved one&apos;s recovery journey.
        </p>
      </AnimateIn>

      <AnimateIn>
        <h1 style={titleStyle}>What is Post Acute Care?</h1>
      </AnimateIn>

      <div style={contentSectionStyle}>
        <AnimateIn variant="slideLeft" style={leftContentStyle}>
          <h2 style={subtitleStyle}>Seamless Transitions</h2>
          <p style={paragraphStyle}>
            Our post acute care program bridges the gap between hospital and home. Whether recovering from surgery, illness, or an injury, we offer personalized care plans to help residents regain independence and confidence. Our interdisciplinary team works closely with residents, families, and healthcare providers to ensure continuity of care.
          </p>

          <p style={paragraphStyle}>
            Our dedicated staff is always available to listen, assist, and ensure that residents feel comfortable and respected throughout their stay.
          </p>
        </AnimateIn>

        <AnimateIn variant="slideRight" delay={0.1} style={rightContentStyle}>
          <h2 style={sidebarTitleStyle}>Key Benefits of Our Post Acute Care</h2>
          <ul style={listStyle}>
            <li>24/7 nursing care</li>
            <li>Personalized rehabilitation plans</li>
            <li>Close coordination with healthcare providers</li>
            <li>All beds are Medicare and Medicaid certified</li>
            <li>All rooms are equipped with electric high/low beds and cable TV</li>
            <li>Our onsite rehabilitation team offers physical, occupational, speech, and respiratory therapy</li>
          </ul>
        </AnimateIn>
      </div>

      <AnimateIn delay={0.05} style={buttonContainerStyle}>
        <Button text="See All Services" href="/services" />
      </AnimateIn>

      <div style={{marginBottom: "30px"}}>
       <AnimateIn>
         <Divider><h2>People to Know</h2></Divider>
       </AnimateIn>

        <div className='staffGridStyle'>
          {staff.map((member, index) => (
            <AnimateIn key={index} delay={Math.min(index * 0.05, 0.35)} style={staffCardStyle}>
              <h3 style={staffNameStyle}>{member.name}</h3>
              <p style={staffTitleStyle}>{member.title}</p>
            </AnimateIn>
          ))}
        </div>
      </div>


<Divider />

      <div style={contactFacilitySectionStyle}>
        <AnimateIn delay={0} className='testEl'>
          <Link href='/test'><h3>Why Choose Us?</h3></Link>
          <br />
          <Image
            src="/images/logo-white-bg.png"
            alt="GPA Logo"
            width={400}
            height={137}
            style={{ width: '100%', maxWidth: 'full', height: 'auto' }} />
          <br />

          <p>At Gridley Post Acute, we understand that choosing the right care facility for your loved one is an important decision. As a CMS 4-Star rated facility, we strive to go above and beyond to provide exceptional care and support to our residents. We don’t just meet the standards—we set them.</p>
        </AnimateIn>

        <AnimateIn delay={0.1} className='testEl'>
          <h3>A CMS 4-Star Rated Facility</h3>
          <Image
            src="/images/cms-logo.png"
            alt="CMS Logo"
            width={400}
            height={222}
            style={{ width: '100%', maxWidth: 'full', height: 'auto' }}

          />

          <p>CMS rates facilities from 1 to 5 stars. We are proud to hold a <strong>CMS 4-Star quality rating</strong>, reflecting our commitment to exceptional care. Read more about CMS scores <Link href="/cms-score">here</Link></p>
          <p> Compare us to other facilities in the area <Link target='_blank' href="https://www.medicare.gov/care-compare/results?searchType=NursingHome&page=1&city=Gridley&state=CA&zipcode=&radius=50&sort=closest">here</Link></p>
        </AnimateIn>
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
  marginBottom: '50px',
};

const leftContentStyle: React.CSSProperties = {
  flex: 2,
  minWidth: '300px', // Ensure the columns have a minimum width
};

const rightContentStyle: React.CSSProperties = {
  flex: 1,
  minWidth: '300px', // Ensure the columns have a minimum width
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
const contactFacilitySectionStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '50px 20px',
  background: '#f9f9f9',
  flexWrap: 'wrap',

};

const cmsLinkStyle: React.CSSProperties = {
  color: '#0066cc',
  textDecoration: 'underline',
};

const staffCardStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '20px',
  // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  backgroundColor: '#f9f9f9',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1), -5px -5px 5px white'
};

const roundImageStyle: React.CSSProperties = {
  borderRadius: '50%',
  objectFit: 'cover',
};

const staffNameStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  color: '#2c3e50',
};

const staffTitleStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  color: '#666',
};

const staffDescriptionStyle: React.CSSProperties = {
  color: '#333',
};


export default PostAcuteCare;
