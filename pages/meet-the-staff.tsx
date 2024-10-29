import Image from 'next/image';

const MeetTheStaff: React.FC = () => {
  // Individual staff members
  const staff = [
    {
      name: "Matt Maylin",
      title: "Administrator",
      description:
        "With a commitment to excellence, Matt oversees the daily operations at Gridley Post Acute, fostering a supportive environment for both residents and staff. His leadership ensures that every resident receives compassionate, quality care.",
      image: "/images/staff2.png",
    },
    {
      name: "Monica Voris",
      title: "Director of Nursing",
      description:
        "Monica is devoted to ensuring the highest level of care for each resident. She combines medical expertise with a compassionate approach, making certain that our residents feel safe, respected, and well-cared-for.",
      image: "/images/staff2.png",
    },
    {
      name: "Robert Hinman",
      title: "Rehabilitation Specialist",
      description:
        "Robert's expertise in rehabilitation empowers residents to regain strength and confidence. His personalized approach to therapy aids each individual’s journey toward improved mobility and independence.",
      image: "/images/staff2.png",
    },
    {
      name: "Nicole Sperber",
      title: "Social Services",
      description:
        "Nicole offers invaluable support to residents and their families, guiding them through the transition and offering resources that enhance emotional and social well-being. Her compassion and dedication make a difference every day.",
      image: "/images/staff2.png",
    },
  ];


  // Single CNA group photo
  const cnaGroup = {
    image: "/images/cna-group1.jpg",
    alt: "CNA Group Photo",
  };

  return (
    <div style={containerStyle}>
      <h1 style={pageTitleStyle}>Meet the Staff</h1>

      {/* Individual Staff Members */}
      <div className= 'staffGridStyle'>
        {staff.map((member, index) => (
          <div key={index} style={staffCardStyle}>
            <Image
              src={member.image}
              alt={member.name}
              width={150}
              height={150}
              style={roundImageStyle}
            />
            <h3 style={staffNameStyle}>{member.name}</h3>
            <p style={staffTitleStyle}>{member.title}</p>
            <p style={staffDescriptionStyle}>{member.description}</p>
          </div>
        ))}
      </div>

      {/* Single Group CNA Photo */}
      <h2 style={groupTitleStyle}>Our Dedicated CNAs and Nurses</h2>
      <div style={cnaGroupContainerStyle}>
        <Image
          src={cnaGroup.image}
          alt={cnaGroup.alt}
          width={800}
          height={500}
          style={groupImageStyle}
        />
      </div>
    </div>
  );
};

// Styles

const containerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const pageTitleStyle: React.CSSProperties = {
  fontSize: '3rem',
  textAlign: 'center',
  marginBottom: '40px',
};

const staffGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)', // 4 columns for staff members
  gap: '20px',
  marginBottom: '60px',
};

const staffCardStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  backgroundColor: '#fff',
};

const roundImageStyle: React.CSSProperties = {
  borderRadius: '50%',
  objectFit: 'cover',
};

const staffNameStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  margin: '15px 0 5px 0',
  color: '#2c3e50',
};

const staffTitleStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  color: '#666',
  marginBottom: '10px',
};

const staffDescriptionStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#333',
};

const groupTitleStyle: React.CSSProperties = {
  fontSize: '2rem',
  textAlign: 'center',
  marginBottom: '30px',
};

const cnaGroupContainerStyle: React.CSSProperties = {
  textAlign: 'center',
};

const groupImageStyle: React.CSSProperties = {
  borderRadius: '10px',
  objectFit: 'cover',
};

export default MeetTheStaff;
