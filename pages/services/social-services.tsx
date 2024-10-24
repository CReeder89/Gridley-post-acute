const SocialServices: React.FC = () => {
    return (
      <div style={servicePageContainerStyle}>
        <h1>Social Services</h1>
        <p>
          Our social services team is dedicated to helping residents and their families with their emotional, social, and psychological needs. We provide support during times of transition and connect families with community resources.
        </p>
      </div>
    );
  };
  
  const servicePageContainerStyle: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };
  
  export default SocialServices;
  