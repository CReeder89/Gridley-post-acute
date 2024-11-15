import Link from 'next/link';
import Image from 'next/image';
import MetaHead from '../components/MetaHead';

const Services: React.FC = () => {
  const services = [
    {
      title: "Nursing Services",
      description:
        "At Gridley Post Acute, our nursing team delivers compassionate, personalized care 24/7 to support each resident's recovery and well-being. Our nurses work closely with residents to manage their medical needs, provide daily care, and assist with activities of daily living. With expert care and a welcoming environment, we are dedicated to creating a positive experience for residents and their families.",
      image: "/images/nursing.jpg",
      link: "/services/nursing-services",
    },
    {
      title: "Rehabilitation Services",
      description:
        "Our rehabilitation services focus on functional problems that affect daily living such as pain, balance issues, poor endurance, trouble walking, and poor muscle strength. We provide therapeutic programs to retain strength in a peaceful and supportive environment for a speedy recovery.",
      image: "/images/rehabilitation.jpg",
      link: "/services/rehabilitation-services",
    },
    {
      title: "Activities Program",
      description:
        "A positive environment helps support those with both daily living activities and complex medical problems. At Gridley Post Acute, our caring professionals tailor exercise and social activities to each resident's abilities.",
      image: "/images/activities.jpg",
      link: "/services/activities-program",
    },
    {
      title: "Social Services",
      description:
        "Our staff is here to help our residents and their families make the transition from our facility back into their own homes. We understand that each family has different needs, and we offer personalized services to ensure a smooth transition.",
      image: "/images/social-services.jpg",
      link: "/services/social-services",
    },
  ];

  return (

    <div>

      <MetaHead
        title="Services - Gridley Post Acute"
        description="Discover the wide range of healthcare services offered at Gridley Post Acute, including 24/7 nursing care, rehabilitation, post-acute support, activities programs, and social services designed to support recovery and well-being."
        image="/images/gpa-front.jpg"
        url={`${process.env.WEBSITE}/services`}/>

      <div style={servicesContainerStyle}>

        {/* Page Title */}
        <h1 style={pageTitleStyle}>Gridley Post Acute Services</h1>

        {services.map((service, index) => (
          <div
            key={index}
            className='serviceSectionStyle'
            style={{
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <Link className='cardLink' href={service.link}></Link>
            <div style={imageContainerStyle}>
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                style={imageStyle}
              />
            </div>
            <div style={serviceContentStyle}>
              <h2 style={serviceTitleStyle}>
                {service.title}
              </h2>
              <p style={serviceDescriptionStyle}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const servicesContainerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '40px 20px',
  lineHeight: '1.6',
  background: '#f9f9f9'
};

const pageTitleStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '30px',
};

const serviceSectionStyle: React.CSSProperties = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '60px',
  flexWrap: 'wrap',
  borderRadius: '10px',
  backgroundColor: '#f9f9f9',
  padding: '20px',
  boxShadow: '12px 12px 12px rgba(0, 0, 0, 0.1), -10px -10px 10px white'
};

const serviceContentStyle: React.CSSProperties = {
  flex: 1,
  marginLeft: '20px',
  textAlign: 'left',
  minWidth: '300px',
};

const serviceTitleStyle: React.CSSProperties = {
  marginBottom: '15px',
  textDecoration: 'underline',
};

const serviceDescriptionStyle: React.CSSProperties = {
  color: '#333',
};

const imageContainerStyle: React.CSSProperties = {
  flex: 1,
  textAlign: 'center',
  minWidth: '300px',
};

const imageStyle: React.CSSProperties = {
  borderRadius: '8px',
  objectFit: 'cover',
  width: '100%',
  height: 'auto',
};

// Responsive styling with media queries
const styles = `
  @media (max-width: 768px) {
    .service-section {
      flex-direction: column !important; /* Stack images and text vertically */
      align-items: center;
    }
    .service-content, .image-container {
      width: 100%;
      margin: 0; /* Reset margin for better spacing on mobile */
    }
    .service-title {
      font-size: 1rem;
    }
  }
`;

export default Services;
