import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ServiceButton';

interface AcademyHeroProps {
  headline: string;
  subheading: string;
  backgroundImage: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Smaller hero for inner pages */
  compact?: boolean;
}

const AcademyHero: React.FC<AcademyHeroProps> = ({
  headline,
  subheading,
  backgroundImage,
  primaryCta,
  secondaryCta,
  compact = false,
}) => {
  return (
    <section
      className={`academy-hero ${compact ? 'academy-hero--compact' : ''}`}
      style={{
        backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.55), rgba(44, 62, 80, 0.65)), url("${backgroundImage}")`,
      }}
      aria-labelledby="academy-hero-heading"
    >
      <motion.div
        className="academy-hero__content glass"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 id="academy-hero-heading">{headline}</h1>
        <p>{subheading}</p>
        {(primaryCta || secondaryCta) && (
          <div className="academy-hero__actions" role="group" aria-label="Primary actions">
            {primaryCta && <Button text={primaryCta.label} href={primaryCta.href} />}
            {secondaryCta && (
              <a href={secondaryCta.href} className="academy-btn academy-btn--outline academy-btn--on-dark">
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default AcademyHero;
