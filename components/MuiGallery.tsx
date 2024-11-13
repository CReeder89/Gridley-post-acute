import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from 'react';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import { CottageOutlined } from '@mui/icons-material';
import Box from '@mui/material/Box';

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function QuiltedImageList() {

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (src: string) => {
        setSelectedImage(src); // Open the modal with the clicked image
    };

    const handleCloseModal = () => {
        setSelectedImage(null); // Close the modal
    };

    return (
        <>
            <ImageList
                sx={{ width: { sm: 'auto', xs: 'auto', lg: 'full' }, height: 'auto' }}
                variant="quilted"
                cols={4}
                rowHeight={'auto'}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                            onClick={() => handleImageClick(item.img)}
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            {selectedImage && (
                <div style={modalOverlayStyle} onClick={handleCloseModal}>
                    <Box 
                        display={'flex'}
                        justifyContent={'center'}
                        alignContent={'center'}
                        position={'relative'}
                        boxShadow={'0 4px 10px rgba(0, 0, 0, 0.25)'}
                        sx={{width: {sm: '90vw', xs: '90vw', md: '90vw', lg: '70vw'}, padding: '5px', background: 'white' }}
                    >
                        
                        {/* <CottageOutlined style={modalBtn}/> */}
                        <Image 
                            width={1000}
                            height={1000} 
                            src={selectedImage} 
                            layout='responsive'
                            alt="Enlarged"
                             />
                        {/* <CottageOutlined style={modalBtn}/> */}
                    </Box>
                </div>)}
        </>
    );
}

const modalOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1002, // Ensure it appears above other elements
  };
  
  
  
  const modalBtn: React.CSSProperties = {
    color: 'white',
    width: '100px',
   
  };
const itemData = [
    {
        img: '/images/gpa-front.jpg',
        title: 'GPA Front Image',
        rows: 2,
        cols: 3,
    },
    {
        img: '/images/contact.jpg',
        title: 'Burger',
    },
    {
        img: '/images/post-acute.jpg',
        title: 'Camera',
    },

    {
        img: '/images/social-services.jpg',
        title: 'Coffee',
    },

    {
        img: '/images/cna-group1.jpg',
        title: 'Basketball',
    },
    {
        img: '/images/activities.jpg',
        title: 'Tomato basil',
        cols: 2
    },
    {
        img: '/images/hero-banner.jpg',
        title: 'Sea star',
    },
    {
        img: '/images/gpa-room.jpg',
        title: 'Hats',
        cols: 3,
        rows: 2
    },
    {
        img: '/images/cna-group2.jpg',
        title: 'Honey',
        author: '@arwinneil',
    },
    {
        img: '/images/rehabilitation.jpg',
        title: 'Mushrooms',
        rows: 2,
        cols: 3,
    },
    {
        img: '/images/nursing.jpg',
        title: 'Fern',
    },
    {
        img: '/images/nursing-services.jpg',
        title: 'Bike',
    },
];