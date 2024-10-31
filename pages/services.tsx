import Link from 'next/link';
import Image from 'next/image';

const Services: React.FC = () => {
  const services = [
    {
      title: "Nursing Services",
      description:
        "We provide compassionate, comprehensive therapies and personalized nursing care around the clock. Gridley Post Acute is committed to expert care and exceptional amenities, creating a warm, welcoming environment for our residents and their families.",
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
      title: "Post-Acute Care",
      description:
        "Post-acute care includes rehabilitation or palliative services that people receive after, or in some cases instead of, a stay in a hospital. Our staff assists each person in making the adjustment from the hospital back to their home through our rehabilitation programs.",
      image: "/images/gpa-room.jpg",
      link: "/services/post-acute-care",
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
    <div style={servicesContainerStyle}>

 {/* Page Title */}
 <h1 style={pageTitleStyle}>Gridley Post Acute Services</h1>

      {services.map((service, index) => (
        <div
          key={index}
          style={{
            ...serviceSectionStyle,
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
          }}
        >
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
              <Link href={service.link}>{service.title}</Link>
            </h2>
            <p style={serviceDescriptionStyle}>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Styles
const servicesContainerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '40px 20px',
  lineHeight: '1.6',
  fontFamily: 'Arial, sans-serif',
};

const pageTitleStyle: React.CSSProperties = {
  textAlign: 'center', 
  fontSize: '2.5rem',
  color: '#2c3e50',
  marginBottom: '40px',
  fontWeight: 'bold',
};

const serviceSectionStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '60px',
  flexWrap: 'wrap',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  backgroundColor: '#fff',
  padding: '20px'
};

const serviceContentStyle: React.CSSProperties = {
  flex: 1,
  marginLeft: '20px',
  textAlign: 'left',
  minWidth: '300px',
};

const serviceTitleStyle: React.CSSProperties = {
  fontSize: '2rem',
  color: '#2c3e50',
  marginBottom: '15px',
  textDecoration: 'none',
};

const serviceDescriptionStyle: React.CSSProperties = {
  fontSize: '1.1rem',
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
