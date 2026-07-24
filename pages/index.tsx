import Image from 'next/image';
import Button from '../components/ServiceButton';
import Link from 'next/link';
import MetaHead from '../components/MetaHead';
import TheSwiper from '../components/Swiper';
import AnimateIn from '../components/AnimateIn';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import CottageIcon from '@mui/icons-material/Cottage';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <MetaHead
        title="Gridley Post Acute | Skilled Nursing & Rehabilitation"
        description="Gridley Post Acute provides compassionate and comprehensive 24-hour skilled nursing care and rehabilitation services. Learn about our CMS 4-Star rated facility in Butte County."
        image="/images/gpa-front.jpg"
        url={`${process.env.WEBSITE}`}
      />

      {/* Hero Section */}
      <div style={heroContainerStyle}>
        <AnimateIn immediate variant="fadeUp" className="glass" style={heroContentStyle}>
          <Image
            src="/images/logo.jpg"
            alt="Gridley Post Acute Logo"
            width={324}
            height={111}
            style={{ width: '60%', maxWidth: '400', height: 'auto' }}
          />
          <p>
            Providing 24-hour skilled nursing care with the highest standards of compassion and quality.
          </p>
        </AnimateIn>
        <AnimateIn immediate delay={0.15}>
          <Button text="Explore Our Services" href="/services" />
        </AnimateIn>
      </div>

      {/* Services Section */}
      <div
        style={{
          background: '#f9f9f9',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <AnimateIn>
          <h1 style={{ marginTop: '30px' }}>Your Health, Our Mission</h1>
        </AnimateIn>

        <AnimateIn delay={0.08} style={{ width: '80%' }}>
          <p>
            At Gridley Post Acute, our mission is to provide compassionate, high-quality care that
            enhances the well-being and independence of our residents. We are dedicated to creating a
            warm, supportive environment where healing and quality of life are our top priorities.
          </p>
        </AnimateIn>

        <div style={servicesSectionStyle}>
          <AnimateIn delay={0} className="serviceCard" whileHover={{ y: -4 }}>
            <Link className="cardLink" href={'/services/activities-program'}></Link>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                background: '#000',
                width: '200px',
                height: '200px',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/activities.jpg"
                alt="Activities program at Gridley Post Acute"
                width={400}
                height={250}
                style={{ width: 'auto', maxWidth: 'full', height: 'full' }}
              />
            </div>
            <h3 style={serviceTitleStyle}>Activities</h3>
            <p>
              Our engaging activities program promotes physical and mental well-being, fostering social
              connections and creating a vibrant, fulfilling environment for our residents.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.08} className="serviceCard" whileHover={{ y: -4 }}>
            <Link className="cardLink" href={'/services/nursing-services'}></Link>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                background: '#000',
                width: '200px',
                height: '200px',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/cna-group1.jpg"
                alt="Skilled nursing team at Gridley Post Acute"
                width={400}
                height={250}
                style={{ width: 'auto', maxWidth: 'full', height: 'full' }}
              />
            </div>
            <h3 style={serviceTitleStyle}>Skilled Nursing</h3>
            <p>
              Our skilled nursing team delivers 24/7 comprehensive care, ensuring that each resident
              receives personalized treatment and support for optimal recovery and well-being.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.16} className="serviceCard" whileHover={{ y: -4 }}>
            <Link className="cardLink" href={'/services/rehabilitation-services'}></Link>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                background: '#000',
                width: '200px',
                height: '200px',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/post-acute.jpg"
                alt="Rehabilitation at Gridley Post Acute"
                width={400}
                height={250}
                style={{ width: 'auto', maxWidth: 'full', height: 'full' }}
              />
            </div>
            <h3 style={serviceTitleStyle}>Rehabilitation</h3>
            <p>
              Our comprehensive rehabilitation program is designed to provide personalized care, helping
              patients restore strength, improve mobility, and regain independence for a better quality
              of life.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.24} className="serviceCard" whileHover={{ y: -4 }}>
            <Link className="cardLink" href={'/services/social-services'}></Link>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                background: '#000',
                width: '200px',
                height: '200px',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/social-services.jpg"
                alt="Social services at Gridley Post Acute"
                width={400}
                height={250}
                style={{ width: 'auto', maxWidth: 'full', height: 'full' }}
              />
            </div>
            <h3 style={serviceTitleStyle}>Social Services</h3>
            <p>
              Our dedicated social services team works closely with residents and families to provide
              personalized support, assisting with care planning, emotional well-being, and a seamless
              return to the community.
            </p>
          </AnimateIn>
        </div>
      </div>

      {/* Rehab Section */}
      <div style={heroContainerStyle2}>
        <AnimateIn>
          <h1 style={{ color: '#fff' }}>REHABILITATION THERAPY</h1>
        </AnimateIn>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <AnimateIn delay={0} style={rehabColumnStyle}>
            <FitnessCenterOutlinedIcon style={{ width: '30%', maxWidth: 'full', height: 'auto' }} />
            <h2 style={{ color: '#fff' }}>Physical</h2>
          </AnimateIn>

          <AnimateIn delay={0.08} style={rehabColumnStyle}>
            <AirOutlinedIcon style={{ width: '30%', maxWidth: 'full', height: 'auto' }} />
            <h2 style={{ color: '#fff' }}>Respiratory</h2>
          </AnimateIn>

          <AnimateIn delay={0.16} style={rehabColumnStyle}>
            <CottageIcon style={{ width: '30%', maxWidth: 'full', height: 'auto' }} />
            <h2 style={{ color: '#fff' }}>Occupational</h2>
          </AnimateIn>

          <AnimateIn delay={0.24} style={rehabColumnStyle}>
            <GraphicEqOutlinedIcon style={{ width: '30%', maxWidth: 'full', height: 'auto' }} />
            <h2 style={{ color: '#fff' }}>Speech</h2>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.1} style={{ width: '80%' }}>
          <p>
            Gridley Post Acute strives to provide our residents with the best quality care; part of that
            is providing rehabilitation services. At Gridley Post Acute our goal is to reduce our
            residents length of stay by customizing rehabilitation plans to enhance each resident&apos;s
            independence and abilities prior to discharge.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <Button text="THERAPY" href="/services/rehabilitation-services" />
        </AnimateIn>
      </div>

      {/* Testimonials */}
      <div
        style={{
          background: '#fff',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'space-evenly',
          minHeight: '60vh',
        }}
      >
        <AnimateIn>
          <h1 style={{ textAlign: 'center' }}>What People Are Saying</h1>
        </AnimateIn>
        <AnimateIn delay={0.1} style={{ width: '100%' }}>
          <TheSwiper />
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <Button text="READ MORE" href="/test" />
        </AnimateIn>
      </div>

      {/* West Harbor CNA Academy Section */}
      <div style={academySectionStyle}>
        <AnimateIn style={academySectionInnerStyle}>
          <div style={academyTextStyle}>
            <p style={academyEyebrowStyle}>West Harbor CNA Academy</p>
            <h2 style={{ color: '#fff', marginBottom: '12px' }}>
              Begin Your Healthcare Career With Confidence
            </h2>
            <p style={{ marginBottom: '20px' }}>
              Tuition-free CNA training for qualified students — classroom instruction in Historic
              Downtown Gridley and hands-on clinicals at Gridley Post Acute and Bridgeview Post Acute.
            </p>
            <div style={academyActionsStyle}>
              <Button text="Learn More" href="/cna-academy" />
              <Link href="/cna-academy/apply" className="academy-btn academy-btn--outline academy-btn--on-dark">
                Apply Today
              </Link>
            </div>
          </div>
          <div style={academyImageWrapStyle}>
            <Image
              src="/images/cna-group2.jpg"
              alt="West Harbor CNA Academy students and caregivers"
              width={560}
              height={380}
              style={{ width: '100%', height: 'auto', borderRadius: 12 }}
            />
          </div>
        </AnimateIn>
      </div>

      {/* CMS rating section */}
      <div style={heroContainerStyle3}>
        <AnimateIn>
          <h1 style={{ color: '#fff' }}>A CMS 4-Star Rated Facility</h1>
        </AnimateIn>
        <AnimateIn delay={0.1} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center' }}>
          <div style={starsContainer}>
            <StarOutlinedIcon style={{ width: '20%', maxWidth: 'full', height: 'auto' }} />
            <StarOutlinedIcon style={{ width: '20%', maxWidth: 'full', height: 'auto' }} />
            <StarOutlinedIcon style={{ width: '20%', maxWidth: 'full', height: 'auto' }} />
            <StarOutlinedIcon style={{ width: '20%', maxWidth: 'full', height: 'auto' }} />
            <h3 style={{ color: '#fff' }}>CMS SCORE</h3>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.15} style={{ width: '80%' }}>
          <p>
            <strong>
              The Centers for Medicare &amp; Medicaid Services (CMS) provides a 5-star quality rating
              system to help patients and families compare nursing homes based on the level of care they
              provide. The system rates facilities from 1 to 5 stars, with 5 being the highest score and
              indicating the highest quality of care.
            </strong>
          </p>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <Button text="READ MORE" href="/cms-score" />
        </AnimateIn>
      </div>
    </div>
  );
};

const heroContainerStyle: React.CSSProperties = {
  width: '100%',
  minHeight: '80vh',
  backgroundImage:
    'linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("/images/hero-banner2.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  textAlign: 'center',
  alignContent: 'center',
  padding: '20px',
  flexDirection: 'column',
};

const heroContainerStyle2: React.CSSProperties = {
  width: '100%',
  minHeight: '60vh',
  backgroundImage:
    'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("https://images.pexels.com/photos/53435/tree-oak-landscape-view-53435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
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
  flexDirection: 'column',
};

const heroContainerStyle3: React.CSSProperties = {
  width: '100%',
  minHeight: '60vh',
  backgroundImage:
    'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
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
  flexDirection: 'column',
};

const rehabColumnStyle: React.CSSProperties = {
  flex: '1 1 150px',
  padding: '20px',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
};

const starsContainer: React.CSSProperties = {
  maxWidth: '400px',
  margin: '10px',
  textAlign: 'center',
  padding: '20px',
};

const heroContentStyle: React.CSSProperties = {};

const servicesSectionStyle: React.CSSProperties = {
  display: 'flex',
  padding: '50px 20px',
  backgroundColor: '#f9f9f9',
  flexWrap: 'wrap',
  gap: '30px',
};

const serviceTitleStyle: React.CSSProperties = {
  marginBottom: '10px',
  marginTop: '10px',
  textDecoration: 'underline',
};

const academySectionStyle: React.CSSProperties = {
  width: '100%',
  minHeight: '50vh',
  backgroundImage:
    'linear-gradient(rgba(44, 62, 80, 0.88), rgba(44, 62, 80, 0.92)), url("/images/cna-group1.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
  color: '#fff',
  padding: '96px 20px',
  display: 'flex',
  alignItems: 'center',
};

const academySectionInnerStyle: React.CSSProperties = {
  maxWidth: '1100px',
  margin: '0 auto',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '36px',
};

const academyTextStyle: React.CSSProperties = {
  flex: '1 1 320px',
  textAlign: 'left',
};

const academyEyebrowStyle: React.CSSProperties = {
  fontFamily: 'Oswald, sans-serif',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  fontSize: '0.95rem',
  opacity: 0.9,
  marginBottom: '8px',
};

const academyActionsStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '8px',
};

const academyImageWrapStyle: React.CSSProperties = {
  flex: '1 1 280px',
  maxWidth: '480px',
};

export default Home;
