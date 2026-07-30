import MetaHead from '../components/MetaHead';
import GalleryGrid from '../components/GalleryGrid';
import AnimateIn from '../components/AnimateIn';
import Button from '../components/ServiceButton';

const GalleryPage: React.FC = () => {
  return (
    <div className="gallery-page">
      <MetaHead
        title="Gallery - Gridley Post Acute"
        description="View our photo gallery to get a glimpse of the welcoming environment at Gridley Post Acute. See our comfortable facilities, engaging activities, and rehabilitation spaces."
        image="/images/gpa-front.jpg"
        url={`${process.env.WEBSITE}/gallery`}
      />

      <section
        className="services-hero"
        style={{
          backgroundImage:
            'linear-gradient(rgba(44, 62, 80, 0.55), rgba(44, 62, 80, 0.7)), url("/images/gpa-front.jpg")',
        }}
        aria-labelledby="gallery-hero-heading"
      >
        <AnimateIn immediate variant="fadeUp" className="services-hero__content glass">
          <p className="services-hero__brand">Gridley Post Acute</p>
          <h1 id="gallery-hero-heading">A Look Inside</h1>
          <p>
            Tour our facility, care spaces, and community moments — the people and places that make
            recovery feel like home.
          </p>
        </AnimateIn>
        <AnimateIn immediate delay={0.12} className="services-hero__actions">
          <Button text="Schedule a Tour" href="/contact-us" />
        </AnimateIn>
      </section>

      <section className="services-intro" aria-labelledby="gallery-intro-heading">
        <AnimateIn>
          <p className="services-intro__eyebrow">Photo Gallery</p>
          <h2 id="gallery-intro-heading">Facility, Care & Community</h2>
          <p>
            Open any photo for a closer look. We&apos;d love to show you around in person — tours are
            always welcome.
          </p>
        </AnimateIn>
      </section>

      <div className="gallery-page__grid-wrap">
        <GalleryGrid />
      </div>

      <section className="services-cta" aria-labelledby="gallery-cta-heading">
        <AnimateIn className="services-cta__inner">
          <h2 id="gallery-cta-heading">See It for Yourself</h2>
          <p>
            Photos only tell part of the story. Come visit and meet the team behind the care.
          </p>
          <div className="services-cta__actions">
            <Button text="Contact Us" href="/contact-us" />
          </div>
        </AnimateIn>
      </section>
    </div>
  );
};

export default GalleryPage;
