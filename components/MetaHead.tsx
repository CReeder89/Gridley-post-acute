
import React from 'react';
import Head from 'next/head';

interface ButtonProps {
    title: string;
    description: string;
    image: string;
    url: string;
}

const MetaHead: React.FC<ButtonProps> = ({ title, description, image, url }) => {
    return (
        <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="skilled nursing, rehabilitation, Gridley, post-acute care, Butte County, 5-star nursing facility" />
        <meta property="og:title" content="Gridley Post Acute | Skilled Nursing & Rehabilitation" />
        <meta property="og:description" content="Discover our top-rated skilled nursing and rehabilitation services in Butte County. Gridley Post Acute is committed to exceptional care." />
        <meta property="og:image" content={image} /> {/* Replace with your image */}
        <meta property="og:url" content= {url} /> {/* Replace with your website URL */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="Providing exceptional skilled nursing care in Butte County. Learn more about our 5-star services." />
        <meta name="twitter:image" content={image} /> {/* Replace with your image */}
      </Head>
    );
};



export default MetaHead;
