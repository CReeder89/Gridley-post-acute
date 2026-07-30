import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AnimateIn from './AnimateIn';

type GalleryItem = {
  src: string;
  title: string;
  featured?: boolean;
};

const galleryItems: GalleryItem[] = [
  {
    src: '/images/gpa-front.jpg',
    title: 'Gridley Post Acute exterior',
    featured: true,
  },
  {
    src: '/images/gpa-room.jpg',
    title: 'Comfortable resident room',
    featured: true,
  },
  {
    src: '/images/about-us.jpg',
    title: 'Welcoming facility spaces',
  },
  {
    src: '/images/contact.jpg',
    title: 'Caring connections',
  },
  {
    src: '/images/nursing.jpg',
    title: 'Skilled nursing care',
  },
  {
    src: '/images/nursing-services.jpg',
    title: 'Nursing services in action',
  },
  {
    src: '/images/rehabilitation.jpg',
    title: 'Rehabilitation therapy',
    featured: true,
  },
  {
    src: '/images/post-acute.jpg',
    title: 'Post-acute recovery support',
  },
  {
    src: '/images/social-services.jpg',
    title: 'Social services & family support',
  },
  {
    src: '/images/activities.jpg',
    title: 'Engaging activities program',
    featured: true,
  },
  {
    src: '/images/hero-banner2.jpg',
    title: 'Moments of compassion',
  },
  {
    src: '/images/buttes.jpg',
    title: 'Our Gridley community setting',
  },
  {
    src: '/images/cna-group1.jpg',
    title: 'Care team and CNA Academy',
  },
  {
    src: '/images/cna-group2.jpg',
    title: 'Training the next generation of CNAs',
  },
];

const GalleryGrid: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || galleryItems.length === 0) return current;
      return (current - 1 + galleryItems.length) % galleryItems.length;
    });
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || galleryItems.length === 0) return current;
      return (current + 1) % galleryItems.length;
    });
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, closeLightbox, showPrev, showNext]);

  const activeItem = activeIndex !== null ? galleryItems[activeIndex] : null;

  return (
    <div className="gallery-grid">
      <ul className="gallery-masonry" aria-label="Photo gallery">
        {galleryItems.map((item, index) => (
          <li
            key={item.src}
            className={`gallery-masonry__item${item.featured ? ' gallery-masonry__item--featured' : ''}`}
          >
            <AnimateIn delay={Math.min(index * 0.04, 0.28)} variant="fade" className="gallery-tile">
              <button
                type="button"
                className="gallery-tile__button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View larger: ${item.title}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="gallery-tile__image"
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
                <span className="gallery-tile__caption">
                  <span className="gallery-tile__title">{item.title}</span>
                </span>
              </button>
            </AnimateIn>
          </li>
        ))}
      </ul>

      {activeItem && activeIndex !== null && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="gallery-lightbox__close"
            onClick={closeLightbox}
            aria-label="Close photo"
          >
            <CloseIcon />
          </button>

          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
          >
            <ChevronLeftIcon fontSize="large" />
          </button>

          <div className="gallery-lightbox__frame" onClick={(e) => e.stopPropagation()}>
            <Image
              src={activeItem.src}
              alt={activeItem.title}
              width={1400}
              height={1000}
              className="gallery-lightbox__image"
              sizes="90vw"
              priority
            />
            <p className="gallery-lightbox__caption">
              {activeItem.title}
              <span>
                {activeIndex + 1} / {galleryItems.length}
              </span>
            </p>
          </div>

          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            <ChevronRightIcon fontSize="large" />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
