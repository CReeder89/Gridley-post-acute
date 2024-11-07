import Image from 'next/image';
import Button from '../components/ServiceButton';
import Link from 'next/link';
import Head from 'next/head';
import MetaHead from '../components/MetaHead';
import TheSwiper from '../components/Swiper';
import NordicWalkingIcon from '@mui/icons-material/NordicWalking';
import ElderlyWomanIcon from '@mui/icons-material/ElderlyWoman';
import ElderlyIcon from '@mui/icons-material/Elderly';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';


const Home: React.FC = () => {
  return (
    <div>

      <MetaHead
        title="Gridley Post Acute | Skilled Nursing & Rehabilitation"
        description="Gridley Post Acute provides compassionate and comprehensive 24-hour skilled nursing care and rehabilitation services. Learn why we're the only 5-star rated facility in Butte County."
        image="/images/gpa-front.jpg"
        url={`${process.env.WEBSITE}`} />



      {/* Hero Section */}
      <div style={heroContainerStyle}>

        <div style={heroContentStyle} className='glass'>
          <div style={logoContainerStyle}>
            <Image
              src="/images/logo.jpg"
              alt="Gridley Post Acute Logo"
              width={220}
              height={86}
              style={{ ...logoStyle, width: '100%', maxWidth: '220px' }}
            />
          </div>


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

      <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', justifyContent: 'center', background: '#fff', textAlign: 'center', }}>

        <h1 style={{ marginTop: '30px' }}>Your Health, Our Mission</h1>

        <div style={{ width: '80%' }}>
          <p >At Gridley Post Acute, our mission is to provide compassionate, high-quality care that enhances the well-being and independence of our residents. We are dedicated to creating a warm, supportive environment where healing and quality of life are our top priorities.</p>
        </div>
        <div style={servicesSectionStyle}>



          <div style={serviceColumnStyle}>

            <div style={{ display: 'flex', justifyContent: 'center', background: '#000', width: '200px', height: '200px', overflow: 'hidden' }}>
              <Image
                src="/images/activities.jpg"
                alt="Gridley Post Acute"
                width={400}
                height={250}
                style={{ width: 'auto', maxWidth: 'full', height: 'full' }} />
            </div>

            <h3 style={serviceTitleStyle}>Activities</h3>
            <p>
              Our engaging activities program promotes physical and mental well-being, fostering social connections and creating a vibrant, fulfilling environment for our residents.          </p>
          </div>

          <div style={serviceColumnStyle}>
            <div style={{ display: 'flex', justifyContent: 'center', background: '#000', width: '200px', height: '200px', overflow: 'hidden' }}>
              <Image
                src="/images/cna-group1.jpg"
                alt="Gridley Post Acute"
                width={400}
                height={250}
                style={{ width: 'auto', maxWidth: 'full', height: 'full', }} />
            </div>
            <h3 style={serviceTitleStyle}>Skilled Nursing</h3>
            <p>
              Our skilled nursing team delivers 24/7 comprehensive care, ensuring that each resident receives personalized treatment and support for optimal recovery and well-being.          </p>
          </div>

          <div style={serviceColumnStyle}>
            <div style={{ display: 'flex', justifyContent: 'center', background: '#000', width: '200px', height: '200px', overflow: 'hidden' }}>
              <Image
                src="/images/post-acute.jpg"
                alt="Gridley Post Acute"
                width={400}
                height={250}
                style={{ width: 'auto', maxWidth: 'full', height: 'full' }} />
            </div>
            <h3 style={serviceTitleStyle}>Post Acute Care</h3>
            <p>
              We offer specialized post-acute care designed to support a smooth transition from hospital to home, with tailored rehabilitation programs that enhance recovery and independence.          </p>
          </div>


          <div style={serviceColumnStyle}>
            <div style={{ display: 'flex', justifyContent: 'center', background: '#000', width: '200px', height: '200px', overflow: 'hidden' }}>
              <Image
                src="/images/social-services.jpg"
                alt="Gridley Post Acute"
                width={400}
                height={250}
                style={{ width: 'auto', maxWidth: 'full', height: 'full', }} />
            </div>
            <h3 style={serviceTitleStyle}>Social Services</h3>
            <p>
              Our dedicated social services team works closely with residents and families to provide personalized support, assisting with care planning, emotional well-being, and a seamless return to the community.          </p>
          </div>
        </div>

      </div>


      {/* 5-star section */}
      <div style={heroContainerStyle3}>
        <h1 style={{ color: '#fff' }}>Butte County's Only Five-Star Facility</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center' }} >
          <div style={rehabColumnStyle}>
            <StarOutlinedIcon style={{ width: '20%', maxWidth: 'full', height: 'auto' }} />
            <StarOutlinedIcon style={{ width: '20%', maxWidth: 'full', height: 'auto' }} />
            <StarOutlinedIcon style={{ width: '20%', maxWidth: 'full', height: 'auto' }} />
            <StarOutlinedIcon style={{ width: '20%', maxWidth: 'full', height: 'auto' }} />
            <StarOutlinedIcon style={{ width: '20%', maxWidth: 'full', height: 'auto' }} />
            <h3 style={{ color: '#fff' }}>CMS SCORE</h3>
          </div>
        </div>
        <div style={{ width: '80%' }}>
          <p><strong>The Centers for Medicare & Medicaid Services (CMS) provides a 5-star quality rating system to help patients and families compare nursing homes based on the level of care they provide. The system rates facilities from 1 to 5 stars, with 5 being the highest score and indicating the highest quality of care.</strong></p>
        </div>
        <Button text="READ MORE" href="/cms-score" />
      </div>



      {/* testimonial section */}
      <div style={{ background: '#fff', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', justifyContent: 'space-evenly', minHeight: '60vh' }}>
        <h1 style={{ textAlign: 'center' }}>What People Are Saying</h1>
        <TheSwiper />
        <Button text="READ MORE" href="/test" />
      </div>

      {/* Rehab Section */}
      <div style={heroContainerStyle2}>
        <h1 style={{ color: '#fff' }}>REHABILITATION THERAPY</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center' }} >
          <div style={rehabColumnStyle}>
            <NordicWalkingIcon style={{ width: '30%', maxWidth: 'full', height: 'auto' }} />
            <h3 style={{ color: '#fff' }}>Physical Therapy</h3>
          </div>
          <div style={rehabColumnStyle}>
            <ElderlyWomanIcon style={{ width: '30%', maxWidth: 'full', height: 'auto' }} />
            <h3 style={{ color: '#fff' }}>Occupational Therapy</h3>
          </div>
          <div style={rehabColumnStyle}>
            <ElderlyIcon style={{ width: '30%', maxWidth: 'full', height: 'auto' }} />
            <h3 style={{ color: '#fff' }}>Speech Therapy</h3>
          </div>
        </div>
        <div style={{ width: '80%' }}>
          <p>The Gridley Post Acute strives to provide our residents with the best quality care; part of that is providing rehabilitation services. The goal is to decrease the length of stay where possible by tailoring rehab services to meet each of our residents' needs and maximizing each resident's independence and capabilities before being discharged.</p>
        </div>
        <Button text="THERAPY" href="/services/rehabilitation-services" />
      </div>






      {/* Contact and Facility Information Section */}
      {/* <div  style={contactFacilitySectionStyle}>

        <div className='testEl' >
          <h3>Gridley Post Acute</h3>
          <Image
            src="/images/gpa-front.jpg"
            alt="Gridley Post Acute"
            width={400}
            height={250}
            style={{ width: '100%', maxWidth: 'full', height: 'auto' }} />

          <p>
            Gridley Post Acute offers the specialized care you need after an illness or major medical event. Our focus is on helping you return home and get back to the activities you enjoy.
          </p>
        </div>

        <div className='testEl'>
          <Link href='/test'><h3>Why Choose Us?</h3></Link>
          <br />
          <Image
            src="/images/logo2.png"
            alt="GPA Logo"
            width={400}
            height={137}
            style={{ width: '100%', maxWidth: 'full', height: 'auto' }} />
          <br />

          <p>At Gridley Post Acute, we understand that choosing the right care facility for your loved one is an important decision. As the only 5-star rated facility in the Butte County area, we strive to go above and beyond to provide exceptional care and support to our residents. We don’t just meet the standards—we set them.</p>
        </div>

        <div className='testEl'>
          <h3>Butte County's only Five-Star Facility</h3>
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
      </div> */}
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
  justifyContent: 'space-evenly',
  color: '#fff',
  textAlign: 'center',
  alignContent: 'center',
  padding: '20px',
  flexDirection: 'column'
};
const heroContainerStyle2: React.CSSProperties = {
  width: '100%',
  minHeight: '60vh',
  backgroundImage: 'url("/images/buttes.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  color: '#fff',
  textAlign: 'center',
  alignContent: 'center',
  padding: '20px',
  flexWrap: 'wrap',
  flexDirection: 'column'
};

const heroContainerStyle3: React.CSSProperties = {
  width: '100%',
  minHeight: '60vh',
  backgroundImage: 'url("/images/5starbg.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'top',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  color: '#fff',
  textAlign: 'center',
  alignContent: 'center',
  padding: '20px',
  flexWrap: 'wrap',
  flexDirection: 'column'
};

const rehabColumnStyle: React.CSSProperties = {

  maxWidth: '400px',
  margin: '10px',
  textAlign: 'center',
  padding: '20px',

};



const heroContentStyle: React.CSSProperties = {
  // backgroundColor: 'rgba(0, 0, 0, 0.2)',
  // padding: '20px',
  // borderRadius: '10px',
  // width: '100%',
  // maxWidth: '600px',
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
  backgroundColor: '#fff',
  flexWrap: 'wrap',
};

const serviceColumnStyle: React.CSSProperties = {
  flex: 1,
  minWidth: '300px',
  maxWidth: 'auto',
  margin: '5px 10px',
  textAlign: 'center',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const serviceTitleStyle: React.CSSProperties = {
  marginBottom: '10px',
  marginTop: '10px'
};

const contactFacilitySectionStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '50px 20px',
  background: '#f9f9f9',
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
