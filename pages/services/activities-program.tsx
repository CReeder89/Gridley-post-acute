const ActivitiesProgram: React.FC = () => {
    return (
      <div style={servicePageContainerStyle}>
        <h1>Activities Program</h1>
        <p>
          Our activities program is designed to engage residents with both physical and mental exercises. We offer a wide range of activities, including fitness classes, social events, and creative workshops.
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
  
  export default ActivitiesProgram;
  