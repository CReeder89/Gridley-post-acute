import Image from 'next/image';
import Button from '../../components/ServiceButton';
import MetaHead from '../../components/MetaHead';

const PostAcuteCare: React.FC = () => {
  return (
    <div>
      <MetaHead
        title="Post-Acute Care - Gridley Post Acute"
        description="Explore our post-acute care services, offering seamless transitions from hospital to home with personalized rehabilitation and support."
        image="/images/gpa-front.jpg"
        url={`${process.env.WEBSITE}/services/post-acute-care`}
      />

      <div style={containerStyle}>
        <h1 style={titleStyle}>Post-Acute Care</h1>

        {/* Main Section with Text and Image */}
        <div style={sectionStyle}>
          <div style={textStyle}>
            <p>
              Post-Acute care is given to individuals who are recuperating from disease or a hospital visit. These residents regularly come to us from a hospital stay, and we work with a scope of restorative care programs to assist with their recovery. This recovery regularly includes physical, occupational therapies, and speech therapy.
            </p>
            <p style={highlightedTextStyle}>
              Our Post-Acute care program helps to improve the transition from hospital to home.
            </p>
            <p>
              We seek to address both the physical and emotional needs of each post-acute patient, and we understand that this transitional process can be difficult.
            </p>
            <p>
              We strive to help each patient achieve the maximum ability in their daily needs with:
            </p>
            <ul style={listStyle}>
              <li>Eating</li>
              <li>Bathing</li>
              <li>Dressing</li>
            </ul>
          </div>

          {/* Image Section */}
         
            <Image
              src="/images/post-acute.jpg"  // Replace with your actual image path
              alt="Post-Acute Care"
              width={400}
              height={300}
              style={imageStyle}
            />
         
        </div>

        {/* Back to Services Button */}
        <div style={buttonContainerStyle}>
          <Button text="Back to All Services" href="/services" />
        </div>
      </div>
    </div>
  );
};

// Styles
const containerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
};

const titleStyle: React.CSSProperties = {
  marginBottom: '30px',
  textAlign: 'center',
};

const sectionStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  marginBottom: '40px',
  flexWrap: 'wrap',
};

const textStyle: React.CSSProperties = {
  flex: 1,
  marginRight: '20px',
  lineHeight: '1.6',
  color: '#333',
};

const highlightedTextStyle: React.CSSProperties = {
  fontWeight: 'bold',
  fontSize: '1.1rem',
  color: '#2c3e50',
  margin: '20px 0',
};

const listStyle: React.CSSProperties = {
  listStyleType: 'circle',
  paddingLeft: '20px',
  lineHeight: '1.6',
  color: '#333',
};

const imageContainerStyle: React.CSSProperties = {
  textAlign: 'center',
  flex: 1,
};

const imageStyle: React.CSSProperties = {
  flex: 1,
  borderRadius: '8px',
  objectFit: 'cover',
  width: '100%',
  maxWidth: 'full',
  height: 'auto',
  marginTop: '20px'
};

const buttonContainerStyle: React.CSSProperties = {
  marginTop: '40px',
  textAlign: 'center',
};

export default PostAcuteCare;
