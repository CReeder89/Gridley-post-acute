// components/ServiceCard.tsx
interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '20px',
  margin: '20px 0',
  backgroundColor: 'white',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
  fontSize: '1.5rem',
  marginBottom: '10px',
  color: '#3498db',
};

export default ServiceCard;
