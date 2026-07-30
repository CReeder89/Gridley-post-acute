import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import MetaHead from '../components/MetaHead';
import Button from '../components/ServiceButton';
import AnimateIn from '../components/AnimateIn';

const staff = [
  { name: 'Matt Maylin', title: 'Administrator' },
  { name: 'Monica Voris', title: 'Director of Nursing' },
  { name: 'Robert Hinman', title: 'Rehabilitation Specialist' },
  { name: 'Nichole Sperber', title: 'Social Services' },
  { name: 'Nancy Zepeda', title: 'Billing' },
  { name: 'Phaedra Snow', title: 'Admissions Director' },
  { name: 'Bill Lagrone', title: 'Maintenance Director' },
  { name: 'Sarah Boesen', title: 'Marketing Director' },
  { name: 'Mollie Openshaw', title: 'CNA Academy Director' },
];

const benefits = [
  '24/7 nursing care',
  'Personalized rehabilitation plans',
  'Close coordination with healthcare providers',
  'All beds are Medicare and Medicaid certified',
  'Electric high/low beds and cable TV in every room',
  'Onsite physical, occupational, speech, and respiratory therapy',
];

const AboutUs: React.FC = () => {
  return (
    <div className="about-page">
      <MetaHead
        title="About Us - Gridley Post Acute"
        description="Learn more about Gridley Post Acute and our commitment to delivering compassionate, high-quality care. Meet our dedicated team and explore our mission to support your health and recovery journey."
        image="/images/gpa-front.jpg"
        url={`${process.env.WEBSITE}/about-us`}
      />

      <section
        className="services-hero"
        style={{
          backgroundImage:
            'linear-gradient(rgba(44, 62, 80, 0.58), rgba(44, 62, 80, 0.72)), url("/images/gpa-front.jpg")',
        }}
        aria-labelledby="about-hero-heading"
      >
        <AnimateIn immediate variant="fadeUp" className="services-hero__content glass">
          <p className="services-hero__brand">Gridley Post Acute</p>
          <h1 id="about-hero-heading">Rooted in Care, Focused on Home</h1>
          <p>
            A 24-hour skilled nursing facility in Gridley, California — part of West Harbor
            Healthcare — helping residents regain independence and return home with confidence.
          </p>
        </AnimateIn>
        <AnimateIn immediate delay={0.12} className="services-hero__actions">
          <Button text="See Our Services" href="/services" />
        </AnimateIn>
      </section>

      <section className="services-intro" aria-labelledby="about-mission-heading">
        <AnimateIn>
          <p className="services-intro__eyebrow">Our Mission</p>
          <h2 id="about-mission-heading">Compassionate Care in the Heart of Butte County</h2>
          <p>
            Located 60 miles north of Sacramento and 30 miles south of Chico, we offer physical,
            occupational, respiratory, and speech therapy — delivered by a dedicated staff who bring
            skill and compassion to every resident. We welcome visitors and offer tours anytime.
          </p>
        </AnimateIn>
      </section>

      <div className="services-bands">
        <AnimateIn className="services-band">
          <div className="services-band__media">
            <Image
              src="/images/post-acute.jpg"
              alt="Post-acute care at Gridley Post Acute"
              width={720}
              height={480}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="services-band__copy">
            <p className="services-band__eyebrow">What is Post-Acute Care?</p>
            <h2>Seamless Transitions</h2>
            <p>
              Our program bridges the gap between hospital and home. Whether recovering from
              surgery, illness, or injury, personalized care plans help residents regain
              independence and confidence.
            </p>
            <p>
              Our interdisciplinary team works closely with residents, families, and healthcare
              providers to ensure continuity of care — listening, assisting, and treating every
              resident with respect throughout their stay.
            </p>
            <Link href="/services" className="services-band__cta">
              Explore our services
            </Link>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.05} className="services-band services-band--reverse">
          <div className="services-band__media">
            <Image
              src="/images/rehabilitation.jpg"
              alt="Rehabilitation and recovery support"
              width={720}
              height={480}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="services-band__copy">
            <p className="services-band__eyebrow">Why Families Choose Us</p>
            <h2>Key Benefits</h2>
            <ul className="services-band__list">
              {benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </AnimateIn>
      </div>

      <section className="about-staff" aria-labelledby="about-staff-heading">
        <AnimateIn>
          <p className="services-intro__eyebrow">Our Team</p>
          <h2 id="about-staff-heading">People to Know</h2>
          <p className="about-staff__intro">
            Meet the leaders and specialists who guide care, rehabilitation, and daily life at
            Gridley Post Acute.
          </p>
        </AnimateIn>

        <div className="about-staff__grid">
          {staff.map((member, index) => (
            <AnimateIn
              key={member.name}
              delay={Math.min(index * 0.04, 0.28)}
              className="about-staff__card"
            >
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="about-highlights" aria-label="Quality and why choose us">
        <AnimateIn className="about-highlight">
          <h2>Why Choose Us?</h2>
          <Image
            className="about-highlight__logo"
            src="/images/logo-white-bg.png"
            alt="Gridley Post Acute logo"
            width={400}
            height={137}
          />
          <p>
            Choosing the right care facility is an important decision. As a CMS 5-Star rated
            facility, we strive to go above and beyond — we don&apos;t just meet the standards, we
            set them.
          </p>
          <Link href="/test" className="services-band__cta">
            Learn why families choose us
          </Link>
        </AnimateIn>

        <AnimateIn delay={0.08} className="about-highlight">
          <h2>A CMS 5-Star Rated Facility</h2>
          <Image
            className="about-highlight__logo"
            src="/images/cms-logo.png"
            alt="CMS logo"
            width={400}
            height={222}
          />
          <p>
            CMS rates facilities from 1 to 5 stars. We are proud to hold a{' '}
            <strong>CMS 5-Star quality rating</strong>, reflecting our commitment to exceptional
            care. Read more about CMS scores{' '}
            <Link href="/cms-score">here</Link>.
          </p>
          <p>
            Compare us to other facilities in the area{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.medicare.gov/care-compare/results?searchType=NursingHome&page=1&city=Gridley&state=CA&zipcode=&radius=50&sort=closest"
            >
              on Medicare.gov
            </Link>
            .
          </p>
        </AnimateIn>
      </section>

      <section className="services-cta" aria-labelledby="about-cta-heading">
        <AnimateIn className="services-cta__inner">
          <h2 id="about-cta-heading">Come See the Difference</h2>
          <p>
            Schedule a tour or talk with our admissions team — we&apos;d love to show you how we
            support recovery every day.
          </p>
          <div className="services-cta__actions">
            <Button text="Contact Us" href="/contact-us" />
            <Link href="/services" className="services-cta__secondary">
              View Services
            </Link>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
};

export default AboutUs;
