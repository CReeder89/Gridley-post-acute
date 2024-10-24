import Image from 'next/image';

const MeetTheStaff: React.FC = () => {
  // Individual staff members
  const staff = [
    {
      name: "John Doe",
      title: "Director of Nursing",
      description:
        "John has been leading the nursing team with over 15 years of experience, ensuring the highest standards of care for our residents.",
      image: "/images/staff1.jpg",
    },
    {
      name: "Jane Smith",
      title: "Rehabilitation Specialist",
      description:
        "Jane specializes in physical and occupational therapy, helping residents regain their strength and independence.",
      image: "/images/staff2.jpg",
    },
    {
      name: "Mark Johnson",
      title: "Respiratory Therapist",
      description:
        "Mark has a passion for helping patients with respiratory conditions recover and improve their quality of life.",
      image: "/images/staff3.jpg",
    },
    {
      name: "Emily Davis",
      title: "Activities Coordinator",
      description:
        "Emily brings creativity and compassion to organizing activities that promote mental and physical well-being for our residents.",
      image: "/images/staff4.jpg",
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
