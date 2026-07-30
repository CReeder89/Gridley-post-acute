import Link from 'next/link';
import Image from 'next/image';
import MetaHead from '../components/MetaHead';
import AnimateIn from '../components/AnimateIn';
import Button from '../components/ServiceButton';

const services = [
  {
    title: 'Nursing Services',
    description:
      "Our nursing team delivers compassionate, personalized care 24/7 to support each resident's recovery and well-being. Nurses manage medical needs, provide daily care, and assist with activities of daily living in a welcoming environment for residents and families.",
    image: '/images/nursing.jpg',
    link: '/services/nursing-services',
    eyebrow: '24/7 Skilled Care',
  },
  {
    title: 'Rehabilitation Services',
    description:
      'We focus on functional challenges that affect daily living — pain, balance, endurance, walking, and strength. Therapeutic programs help residents rebuild confidence in a peaceful, supportive setting for a strong recovery.',
    image: '/images/rehabilitation.jpg',
    link: '/services/rehabilitation-services',
    eyebrow: 'Physical · Occupational · Speech · Respiratory',
  },
  {
    title: 'Activities Program',
    description:
      "A positive environment supports daily living and complex medical needs. Our team tailors exercise and social activities to each resident's abilities, fostering connection, purpose, and joy.",
    image: '/images/activities.jpg',
    link: '/services/activities-program',
    eyebrow: 'Engagement & Well-Being',
  },
  {
    title: 'Social Services',
    description:
      'We help residents and families transition from our facility back home. Every family has different needs — we offer personalized support so the path forward feels clear and supported.',
    image: '/images/social-services.jpg',
    link: '/services/social-services',
    eyebrow: 'Discharge Planning & Support',
  },
];

const Services: React.FC = () => {
  return (
    <div className="services-page">
      <MetaHead
        title="Services - Gridley Post Acute"
        description="Discover the wide range of healthcare services offered at Gridley Post Acute, including 24/7 nursing care, rehabilitation, post acute support, activities programs, and social services designed to support recovery and well-being."
        image="/images/gpa-front.jpg"
        url={`${process.env.WEBSITE}/services`}
      />

      <section
        className="services-hero"
        style={{
          backgroundImage:
            'linear-gradient(rgba(44, 62, 80, 0.58), rgba(44, 62, 80, 0.72)), url("/images/nursing.jpg")',
        }}
        aria-labelledby="services-hero-heading"
      >
        <AnimateIn immediate variant="fadeUp" className="services-hero__content glass">
          <p className="services-hero__brand">Gridley Post Acute</p>
          <h1 id="services-hero-heading">Care Built Around Recovery</h1>
          <p>
            From skilled nursing to rehabilitation, activities, and social support — everything we
            offer is designed to help residents regain independence and return home with confidence.
          </p>
        </AnimateIn>
        <AnimateIn immediate delay={0.12} className="services-hero__actions">
          <Button text="Contact Us" href="/contact-us" />
        </AnimateIn>
      </section>

      <section className="services-intro" aria-labelledby="services-intro-heading">
        <AnimateIn>
          <p className="services-intro__eyebrow">What We Offer</p>
          <h2 id="services-intro-heading">Comprehensive Post-Acute Support</h2>
          <p>
            Explore our core services below. Each program is led by experienced clinicians and
            caregivers who treat every resident like family.
          </p>
        </AnimateIn>
      </section>

      <div className="services-bands">
        {services.map((service, index) => {
          const reversed = index % 2 === 1;
          return (
            <AnimateIn
              key={service.link}
              delay={0.04}
              className={`services-band${reversed ? ' services-band--reverse' : ''}`}
            >
              <div className="services-band__media">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={720}
                  height={480}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="services-band__copy">
                <p className="services-band__eyebrow">{service.eyebrow}</p>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <Link href={service.link} className="services-band__cta">
                  Learn more about {service.title}
                </Link>
              </div>
            </AnimateIn>
          );
        })}
      </div>

      <section className="services-cta" aria-labelledby="services-cta-heading">
        <AnimateIn className="services-cta__inner">
          <h2 id="services-cta-heading">Ready to Take the Next Step?</h2>
          <p>
            Schedule a tour or speak with our admissions team — we&apos;re here to answer questions
            and help you find the right path forward.
          </p>
          <div className="services-cta__actions">
            <Button text="Contact Us" href="/contact-us" />
            <Link href="/about-us" className="services-cta__secondary">
              About Our Facility
            </Link>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
};

export default Services;
