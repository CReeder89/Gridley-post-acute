import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import MetaHead from '../../components/MetaHead';
import AcademyHero from '../../components/cna-academy/AcademyHero';
import FeatureCard from '../../components/cna-academy/FeatureCard';
import CommunityGrid from '../../components/cna-academy/CommunityGrid';
import CTASection from '../../components/cna-academy/CTASection';
import WhyChooseGrid from '../../components/cna-academy/WhyChooseGrid';
import AcademySocialLinks from '../../components/cna-academy/AcademySocialLinks';
import { academyBrand, academyContact, academySeo, landingContent } from '../../content/cnaAcademy';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: `${academyBrand.name} — Certified Nursing Assistant Training`,
  description: academySeo.landing.description,
  provider: {
    '@type': 'EducationalOrganization',
    name: academyBrand.name,
    parentOrganization: {
      '@type': 'Organization',
      name: academyBrand.parent,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '891 Hazel Street',
      addressLocality: 'Gridley',
      addressRegion: 'CA',
      postalCode: '95948',
      addressCountry: 'US',
    },
    telephone: academyContact.phone,
    email: academyContact.email,
  },
  educationalCredentialAwarded: 'Certified Nursing Assistant (CNA)',
  offers: {
    '@type': 'Offer',
    category: 'Tuition-free for qualified students',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: '/cna-academy/apply',
  },
};

const CnaAcademyLanding: React.FC = () => {
  const { hero, aboutPreview, featureCards, whyChooseUs, communities, ctaBanner } = landingContent;
  const seo = academySeo.landing;

  return (
    <div className="academy-page">
      <MetaHead
        title={seo.title}
        description={seo.description}
        image="/images/cna-group2.jpg"
        url={`${process.env.WEBSITE}${seo.path}`}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <AcademyHero
        headline={hero.headline}
        subheading={hero.subheading}
        backgroundImage={hero.backgroundImage}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
      />

      <section className="academy-section academy-section--narrow" aria-labelledby="about-preview-heading">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2 id="about-preview-heading">{aboutPreview.title}</h2>
          {aboutPreview.eyebrow ? (
            <p className="academy-section__eyebrow">{aboutPreview.eyebrow}</p>
          ) : null}
          {aboutPreview.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
          <Link href={aboutPreview.learnMoreHref} className="academy-text-link">
            {aboutPreview.learnMoreLabel}
          </Link>
        </motion.div>
      </section>

      <section className="academy-section" aria-labelledby="features-heading">
        <h2 id="features-heading" className="visually-hidden">
          Program highlights
        </h2>
        <div className="academy-feature-grid">
          {featureCards.map((card, index) => (
            <FeatureCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
              index={index}
            />
          ))}
        </div>
      </section>

      <WhyChooseGrid title={whyChooseUs.title} items={whyChooseUs.items} />

      <CommunityGrid
        title={communities.title}
        intro={communities.intro}
        locations={communities.locations}
      />

      <section className="academy-section academy-section--narrow">
        <AcademySocialLinks />
      </section>

      <CTASection
        headline={ctaBanner.headline}
        backgroundImage={ctaBanner.backgroundImage}
        primaryCta={ctaBanner.primaryCta}
        secondaryCta={ctaBanner.secondaryCta}
      />
    </div>
  );
};

export default CnaAcademyLanding;