import MetaHead from '../components/MetaHead';
import QuiltedImageList from '../components/MuiGallery';
import AnimateIn from '../components/AnimateIn';

const Gallery1: React.FC = () => {

  return (
    <div>
      <MetaHead
        title="Gallery - Gridley Post Acute"
        description="View our photo gallery to get a glimpse of the welcoming environment at Gridley Post Acute. See our comfortable facilities, engaging activities, and state-of-the-art rehabilitation equipment."
        image="/images/gpa-front.jpg"
        url={`${process.env.WEBSITE}/gallery`} />

      <div style={galleryContainerStyle}>
        <AnimateIn immediate>
          <h1 style={titleStyle}>Gallery</h1>
        </AnimateIn>
        <AnimateIn delay={0.1} variant="fade">
          <QuiltedImageList />
        </AnimateIn>
      </div>
    </div>
  );
};

// Styles
const galleryContainerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
};

const titleStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '30px'
};


export default Gallery1;
