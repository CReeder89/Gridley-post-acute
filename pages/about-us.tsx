import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import MetaHead from '../components/MetaHead';
import Button from '../components/ServiceButton';
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
  ];

  return (
    <div style={containerStyle}>
      <MetaHead
        title="About Us - Gridley Post Acute"
        description="Learn more about Gridley Post Acute and our commitment to delivering compassionate, high-quality care. Meet our dedicated team and explore our mission to support your health and recovery journey."
        image="/images/gpa-front.jpg"
        url={`${process.env.WEBSITE}/about-us`} />


      <h1 style={titleStyle}>About Us</h1>
      <p style={introTextStyle}>
        Gridley Post Acute is a 24-hour skilled nursing facility located in Gridley, California. Gridley is located 60 miles North of Sacramento and 30 miles South of Chico. We are proud to be a part of the West Harbor Healthcare line of skilled nursing facilities located throughout California.
        <br />
        <br />
        Our mission is to support residents in regaining independence and returning home. We offer a full range of therapy services including physical, occupational, respiratory, and speech therapy.
        <br />
        <br />
        Our dedicated staff brings both skill and compassion to their work, providing exceptional care to every resident. We welcome visitors and are pleased to offer tours to show how we can support you or your loved one's recovery journey.
      </p>

      


      <h1 style={titleStyle}>What is Post Acute Care?</h1>

      <div style={contentSectionStyle}>
        {/* Left Side - Main Content */}
        <div style={leftContentStyle}>
          <h2 style={subtitleStyle}>Seamless Transitions</h2>
          <p style={paragraphStyle}>
            Our post acute care program bridges the gap between hospital and home. Whether recovering from surgery, illness, or an injury, we offer personalized care plans to help residents regain independence and confidence. Our interdisciplinary team works closely with residents, families, and healthcare providers to ensure continuity of care.
          </p>

          {/* <h2 style={subtitleStyle}>Comprehensive Support</h2>
          <p style={paragraphStyle}>
            Post acute care addresses both physical and emotional needs. We provide services such as:
          </p>
          <ul style={listStyle}>
            <li>Physical Therapy: restoring strength, mobility, and function</li>
            <li>Speech Therapy: Improving communication and swallowing abilities</li>
            <li>Respiratory Therapy: Supporting respiratory health and lung function</li>
            <li>Occupational Therapy: Enhancing daily living skills and independence</li>
          </ul>

          <h2 style={subtitleStyle}>Daily Living Assistance</h2>
          <p style={paragraphStyle}>
            Our team is here to help residents manage their daily needs with dignity and care. We provide assistance with:
          </p>
          <ul style={listStyle}>
            <li>Eating and nutrition plans</li>
            <li>Bathing and personal hygiene</li>
            <li>Dressing and grooming</li>
          </ul>

          <h2 style={subtitleStyle}>Emotional and Social Well-Being</h2>
          <p style={paragraphStyle}>
            Adjusting to post acute care can be challenging. That's why we emphasize emotional support and social connection. From recreational activities to counseling services, we create a nurturing environment to help residents feel at ease and supported during their recovery journey.
          </p> */}

          <p style={paragraphStyle}>
            Our dedicated staff is always available to listen, assist, and ensure that residents feel comfortable and respected throughout their stay.
          </p>
        </div>

        {/* Right Side - Visuals and Key Points */}
        <div style={rightContentStyle}>
          <h2 style={sidebarTitleStyle}>Key Benefits of Our Post Acute Care</h2>
          <ul style={listStyle}>
            <li>24/7 nursing care</li>
            <li>Personalized rehabilitation plans</li>
            <li>Close coordination with healthcare providers</li>
            <li>All beds are Medicare and Medicaid certified</li>
            <li>All rooms are equipped with electric high/low beds and cable TV</li>
            <li>Our onsite rehabilitation team offers physical, occupational, speech, and respiratory therapy</li>

          </ul>

          {/* <div style={imageContainerStyle}>
            <Image
              src="/images/post-acute.jpg"
              alt="Post Acute Care"
              width={400}
              height={300}
              style={imageStyle}
            />
          </div> */}
        </div>
      </div>

      

      {/* Back to Services Button */}
      <div style={buttonContainerStyle}>
        <Button text="See All Services" href="/services" />
      </div>

      <div style={{marginBottom: "30px"}}>
       <Divider><h2>People to Know</h2></Divider>

        {/* Individual Staff Members */}
        <div className='staffGridStyle'>
          {staff.map((member, index) => (
            <div key={index} style={staffCardStyle}>

              {/* <div style={{background: '#f9f9f9',
                borderRadius:'50%',
                width: '175px',
                height: '175px',
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow:'5px 5px 5px rgba(0, 0, 0, 0.1), -5px -5px 5px white'}}>
              <Image
                src={member.image}
                alt={member.name} 
                width={150}
                height={150}
                style={roundImageStyle}
              />
              </div> */}

              <h3 style={staffNameStyle}>{member.name}</h3>
              <p style={staffTitleStyle}>{member.title}</p>
              {/* <p style={staffDescriptionStyle}>{member.description}</p> */}
            </div>
          ))}
        </div>
      </div>


<Divider />
      {/* More info Cards */}


      <div style={contactFacilitySectionStyle}>

        <div className='testEl'>
          <Link href='/test'><h3>Why Choose Us?</h3></Link>
          <br />
          <Image
            src="/images/logo-white-bg.png"
            alt="GPA Logo"
            width={400}
            height={137}
            style={{ width: '100%', maxWidth: 'full', height: 'auto' }} />
          <br />

          <p>At Gridley Post Acute, we understand that choosing the right care facility for your loved one is an important decision. As the only 5-star rated facility in the Butte County area, we strive to go above and beyond to provide exceptional care and support to our residents. We don’t just meet the standards—we set them.</p>
        </div>

        <div className='testEl'>
          <h3>Butte County's only 5-Star Facility</h3>
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
