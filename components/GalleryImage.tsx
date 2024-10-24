interface GalleryImageProps {
  src: string;
  alt: string;
  onClick: () => void; // Click handler to open the modal
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, onClick }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={imageStyle}
      onClick={onClick}
    />
  );
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  cursor: 'pointer', // Cursor to indicate the image is clickable
  borderRadius: '10px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
};

export default GalleryImage;
