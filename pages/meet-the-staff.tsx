import Image from 'next/image';
import MetaHead from '../components/MetaHead';

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
    <div>

      <MetaHead
        title="Our Staff - Gridley Post Acute"
        description="Meet the exceptional team at Gridley Post Acute. Our skilled professionals are dedicated to providing personalized and compassionate care for each resident."
        image="/images/gpa-front.jpg"
        url={`${process.env.WEBSITE}/meet-the-staff`} />

      <div style={containerStyle}>
        <h1 style={pageTitleStyle}>Meet the Staff</h1>

        {/* Individual Staff Members */}
        <div className='staffGridStyle'>
          {staff.map((member, index) => (
            <div key={index} style={staffCardStyle}>

              <div style={{background: '#f9f9f9',
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
              </div>

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
            width={400}
            height={250}
            style={{ width: '100%', maxWidth: '500px', height: 'auto' }}

          />
        </div>
      </div>
    </div>
  );
};

// Styles

const containerStyle: React.CSSProperties = {
 maxWidth: '90%',
  margin: '0 auto',
  padding: '20px',
};

const pageTitleStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '30px',
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
  // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  backgroundColor: '#f9f9f9',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  boxShadow:'5px 5px 5px rgba(0, 0, 0, 0.1), -5px -5px 5px white'
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
  color: '#333',
};

const groupTitleStyle: React.CSSProperties = {
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
