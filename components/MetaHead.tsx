import React from 'react';
import Head from 'next/head';

interface MetaHeadProps {
  title: string;
  description: string;
  image: string;
  url: string;
  keywords?: string;
}

const MetaHead: React.FC<MetaHeadProps> = ({
  title,
  description,
  image,
  url,
  keywords = 'skilled nursing, rehabilitation, Gridley, post acute care, Butte County, 5-star nursing facility, CNA Academy, West Harbor CNA Academy',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default MetaHead;
