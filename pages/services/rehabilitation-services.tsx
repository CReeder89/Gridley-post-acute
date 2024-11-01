import Image from 'next/image';
import Button from '../../components/ServiceButton';  // Import the reusable Button component
import MetaHead from '../../components/MetaHead';

const RehabilitationServices: React.FC = () => {
  return (
    <div>
       <MetaHead
        title="Rehabilitation Services - Gridley Post Acute"
        description="Learn about our specialized rehabilitation services, including physical, occupational, and speech therapy, designed to help residents regain strength and independence."
        image="/images/gpa-front.jpg"
        url={`${process.env.WEBSITE}/services/rehabilitation-services`} />

      <div className="rehab-container">
        <h1 className="rehab-title">Rehabilitation Services</h1>

        {/* Introductory Section */}
        <div className="rehab-section">
          <div className="rehab-content">
            <p className="rehab-intro-text">
              The Gridley Post Acute strives to provide our residents with the best quality care; part of that is providing rehabilitation services. The goal is to decrease the length of stay where possible by tailoring rehab services to meet each of our residents’ needs and maximizing each resident’s independence and capabilities before being discharged.
            </p>
          </div>
          <div className="rehab-image-container">
            <Image
              src="/images/rehabilitation.jpg"  // Replace with your actual image path
              alt="Rehabilitation Services"
              width={400}
              height={250}
              className="rehab-image"
            />
          </div>
        </div>

        {/* Physical Therapy Section */}
        <h2 className="rehab-section-title">Physical Therapy</h2>
        <p className="rehab-description">
          Our physical therapy programs focus on building muscle strength, stamina, and coordination.
        </p>
        <ul className="rehab-list">
          <li>Pain Reduction/Pain Management</li>
          <li>Correct Posture</li>
          <li>Education on Safety and Physical Injury Prevention</li>
          <li>Strength and Endurance</li>
          <li>Improve Issues Surrounding Restricted Range of Motion</li>
          <li>Increased Mobility</li>
          <li>Post-Stroke Motor Controls</li>
          <li>Care for Post-Amputation</li>
        </ul>

        {/* Occupational Therapy Section */}
        <h2 className="rehab-section-title">Occupational Therapy</h2>
        <p className="rehab-description">*Leave description*</p>
        <ul className="rehab-list">
          <li>Housekeeping, cooking, eating, and using bathroom facilities to promote independence</li>
          <li>Assessments of home living</li>
          <li>Counseling on safety and injury prevention</li>
          <li>The ability to dress themselves, restoring dignity</li>
        </ul>

        {/* Speech Therapy Section */}
        <h2 className="rehab-section-title">Speech Therapy</h2>
        <p className="rehab-description">*Leave description as is*</p>
        <ul className="rehab-list">
          <li>Improvement of verbal expression, clarity of voice and speech</li>
          <li>Treatment of issues with swallowing (dysphagia)</li>
          <li>Increased listening skills and comprehension</li>
          <li>Training and educating family members and caregivers to assist with managing issues with swallowing and oral motor skills</li>
        </ul>

        {/* Back to Services Button */}
        <div style={buttonContainerStyle}>
          <Button text="Back to All Services" href="/services" />
        </div>

      </div>
    </div>
  );
};

const buttonContainerStyle: React.CSSProperties = {
  marginTop: '40px',
  textAlign: 'center',
};

export default RehabilitationServices;
