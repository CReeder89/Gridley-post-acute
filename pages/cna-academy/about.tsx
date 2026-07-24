import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MetaHead from '../../components/MetaHead';
import AcademyHero from '../../components/cna-academy/AcademyHero';
import Timeline from '../../components/cna-academy/Timeline';
import CTASection from '../../components/cna-academy/CTASection';
import MissionCard from '../../components/cna-academy/MissionCard';
import CommunityGrid from '../../components/cna-academy/CommunityGrid';
import { LearningObjectiveList } from '../../components/cna-academy/LearningObjective';
import DirectorWelcome from '../../components/cna-academy/DirectorWelcome';
import { aboutContent, academySeo } from '../../content/cnaAcademy';

const CnaAcademyAbout: React.FC = () => {
  const seo = academySeo.about;
  const {
    about,
    uniqueExperience,
    tuitionFree,
    servingCommunities,
    moreThanCertification,
    learningObjectives,
    ourProgram,
    mission,
    timeline,
    finalCta,
  } = aboutContent;

  return (
    <div className="academy-page">
      <MetaHead
        title={seo.title}
        description={seo.description}
        image="/images/cna-group1.jpg"
        url={`${process.env.WEBSITE}${seo.path}`}
      />

      <AcademyHero
        headline={aboutContent.hero.headline}
        subheading={aboutContent.hero.subheading}
        backgroundImage={aboutContent.hero.backgroundImage}
        compact
      />

      <DirectorWelcome />

      <section className="academy-section academy-section--narrow" aria-labelledby="about-full-heading">
        <h2 id="about-full-heading">{about.title}</h2>
        {about.paragraphs.map((p) => (
          <p key={p.slice(0, 48)}>{p}</p>
        ))}
      </section>

      <section className="academy-section" aria-labelledby="unique-heading">
        <h2 id="unique-heading">{uniqueExperience.title}</h2>
        <p className="academy-section__intro">{uniqueExperience.intro}</p>
        <div className="academy-split-cards">
          {uniqueExperience.cards.map((card, index) => (
            <motion.article
              key={card.id}
              className="academy-split-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <h3>{card.title}</h3>
              <p className="academy-split-card__location">{card.location}</p>
              <p>{card.description}</p>
              {card.sites.length > 0 ? (
                <ul className="academy-split-card__sites">
                  {card.sites.map((site) => (
                    <li key={site}>{site}</li>
                  ))}
                </ul>
              ) : null}
            </motion.article>
          ))}
        </div>
      </section>

      <section className="academy-tuition" aria-labelledby="tuition-heading">
        <div className="academy-tuition__inner">
          <h2 id="tuition-heading">{tuitionFree.title}</h2>
          <p className="academy-tuition__emphasis">{tuitionFree.emphasis}</p>
          <p>{tuitionFree.body}</p>
          <aside className="academy-callout" aria-label="Eligibility note">
            {tuitionFree.callout}
          </aside>
        </div>
      </section>

      <CommunityGrid
        title={servingCommunities.title}
        intro={servingCommunities.intro}
        locations={servingCommunities.locations}
      />

      <section className="academy-section academy-media-row" aria-labelledby="more-than-heading">
        <div className="academy-media-row__text">
          <h2 id="more-than-heading">{moreThanCertification.title}</h2>
          {moreThanCertification.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>
        <div className="academy-media-row__image">
          <Image
            src={moreThanCertification.imageSrc}
            alt={moreThanCertification.imageAlt}
            width={560}
            height={380}
            style={{ width: '100%', height: 'auto', borderRadius: 12 }}
          />
        </div>
      </section>

      <LearningObjectiveList
        title={learningObjectives.title}
        intro={learningObjectives.intro}
        items={learningObjectives.items}
        closing={learningObjectives.closing}
      />

      <section className="academy-section academy-section--narrow" aria-labelledby="program-heading">
        <h2 id="program-heading">{ourProgram.title}</h2>
        {ourProgram.paragraphs.map((p) => (
          <p key={p.slice(0, 48)}>{p}</p>
        ))}
      </section>

      <MissionCard
        title={mission.title}
        tagline={mission.tagline}
        paragraphs={mission.paragraphs}
      />

      <Timeline title={timeline.title} steps={timeline.steps} />

      <CTASection
        headline={finalCta.headline}
        backgroundImage={finalCta.backgroundImage}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
      />
    </div>
  );
};

export default CnaAcademyAbout;
