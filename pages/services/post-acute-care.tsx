import Image from 'next/image';
import Button from '../../components/ServiceButton';

const PostAcuteCare: React.FC = () => {
  return (
    <div className="post-acute-container">
      <h1 className="post-acute-title">Post-Acute Care</h1>

      {/* Main Section with Text and Image */}
      <div className="post-acute-section">
        <div className="post-acute-text">
          <p>
            Post-Acute care is given to individuals who are recuperating from disease or a hospital visit. These residents regularly come to us from a hospital stay, and we work with a scope of restorative care programs to assist with their recovery. This recovery regularly includes physical, occupational therapies, and speech therapy.
          </p>
          <p className="highlighted-text">
            Our Post-Acute care program helps to improve the transition from hospital to home.
          </p>
          <p>
            We seek to address both the physical and emotional needs of each post-acute patient, and we understand that this transitional process can be difficult.
          </p>
          <p>
            We strive to help each patient achieve the maximum ability in their daily needs with:
          </p>
          <ul className="post-acute-list">
            <li>Eating</li>
            <li>Bathing</li>
            <li>Dressing</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="post-acute-image-container">
          <Image
            src="/images/post-acute.jpg"  // Replace with your actual image path
            alt="Post-Acute Care"
            width={400}
            height={300}
            className="post-acute-image"
          />
        </div>
      </div>


       {/* Back to Services Button */}
       <div style={buttonContainerStyle}>
        <Button text="Back to All Services" href="/services" />
      </div>
    </div>
  );
};


const buttonContainerStyle: React.CSSProperties = {
  marginTop: '40px',
  textAlign: 'center',
};

export default PostAcuteCare;
