import { useState } from 'react';
import GalleryImage from '../components/GalleryImage';
import { Gallery } from "next-gallery"

const Gallery1: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src); // Open the modal with the clicked image
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Close the modal
  };

  const images = [
    { src: '/images/about-us.jpg', aspect_ratio: 16 / 9 },
    { src: '/images/activities.jpg', aspect_ratio: 16 / 9 },
    { src: '/images/gpa-room.jpg', aspect_ratio: 4 / 3 },
    { src: '/images/gpa-front.jpg', aspect_ratio: 16 / 9 },
    { src: '/images/buttes.jpg', aspect_ratio: 16 / 9 },
    { src: '/images/post-acute.jpg', aspect_ratio: 16 / 9 },
    { src: '/images/rehabilitation.jpg', aspect_ratio: 16 / 9 },
    { src: 'https://picsum.photos/id/1016/1920/1080/', aspect_ratio: 16 / 9 },
    { src: 'https://picsum.photos/id/1020/2560/1080/', aspect_ratio: 21 / 9 },
    { src: 'https://picsum.photos/id/1021/1440/1080/', aspect_ratio: 4 / 3 },
    { src: 'https://picsum.photos/id/1022/1920/1080/', aspect_ratio: 16 / 9 },
    { src: 'https://picsum.photos/id/1023/1440/1080/', aspect_ratio: 4 / 3 },
    { src: 'https://picsum.photos/id/1024/1920/1080/', aspect_ratio: 16 / 9 },
    { src: 'https://picsum.photos/id/1025/1920/1080/', aspect_ratio: 16 / 9 },
    { src: 'https://picsum.photos/id/1026/1920/1080/', aspect_ratio: 16 / 9 },
    { src: 'https://picsum.photos/id/1027/1440/1080/', aspect_ratio: 4 / 3 },
    { src: 'https://picsum.photos/id/1028/1440/1080/', aspect_ratio: 4 / 3 },
    { src: 'https://picsum.photos/id/1029/1920/1080/', aspect_ratio: 9 / 16 },
]

const widths = [ 500, 1000, 1600 ]
const ratios = [ 2.2, 4, 6, 8 ]


  return (
    <div style={galleryContainerStyle}>
      <h1>Gallery</h1>
      <p>Page still under development.</p>

      <Gallery {...{images, widths, ratios}} />


      {/* <div style={gridStyle}>
        <GalleryImage src="/images/photo1.jpg" alt="Photo 1" onClick={() => handleImageClick('/images/photo1.jpg')} />
        <GalleryImage src="/images/photo2.jpg" alt="Photo 2" onClick={() => handleImageClick('/images/photo2.jpg')} />
        <GalleryImage src="/images/buttes.jpg" alt="Photo 3" onClick={() => handleImageClick('/images/buttes.jpg')} />
        <GalleryImage src="/images/buttes.jpg" alt="Photo 4" onClick={() => handleImageClick('/images/buttes.jpg')} />
        <GalleryImage src="/images/buttes.jpg" alt="Photo 4" onClick={() => handleImageClick('/images/buttes.jpg')} />
        <GalleryImage src="/images/buttes.jpg" alt="Photo 4" onClick={() => handleImageClick('/images/buttes.jpg')} />
        <GalleryImage src="/images/buttes.jpg" alt="Photo 4" onClick={() => handleImageClick('/images/buttes.jpg')} />
        <GalleryImage src="/images/buttes.jpg" alt="Photo 4" onClick={() => handleImageClick('/images/buttes.jpg')} />
        <GalleryImage src="/images/buttes.jpg" alt="Photo 4" onClick={() => handleImageClick('/images/buttes.jpg')} />
        <GalleryImage src="/images/buttes.jpg" alt="Photo 4" onClick={() => handleImageClick('/images/buttes.jpg')} />
        {/* Add more images as needed */}
      {/* </div> */}

      {/* Modal to display enlarged image */}
      {/* {selectedImage && (
        <div style={modalOverlayStyle} onClick={handleCloseModal}>
          <div style={modalContentStyle}>
            <img src={selectedImage} alt="Enlarged" style={modalImageStyle} />
          </div>
        </div> */}
      {/* )} */} 

      
    </div>
  );
};

// Styles
const galleryContainerStyle: React.CSSProperties = {
  padding: '40px 20px',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '20px 0',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', // Responsive grid
  //gridTemplateColumns: 'repeat(4, 1fr)', // Set 4 columns for larger screens
  gap: '20px',
  alignItems: 'center',
};

const modalOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalContentStyle: React.CSSProperties = {
  maxWidth: '90%',
  maxHeight: '90%',
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '10px',
};

const modalImageStyle: React.CSSProperties = {
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
};

export default Gallery1;
