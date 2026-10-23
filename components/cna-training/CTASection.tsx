import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ServiceButton';
import AcademySocialLinks from './AcademySocialLinks';

interface CTASectionProps {
  headline: string;
  backgroundImage?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  showSocial?: boolean;
}

const CTASection: React.FC<CTASectionProps> = ({
  headline,
  backgroundImage = '/images/hero-banner2.jpg',
  primaryCta,
  secondaryCta,
  showSocial = true,
}) => {
  return (
    <section
      className="academy-cta"
      style={{
        backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.72), rgba(44, 62, 80, 0.78)), url("${backgroundImage}")`,
      }}
      aria-labelledby="academy-cta-heading"
    >
      <motion.div
        className="academy-cta__inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <h2 id="academy-cta-heading">{headline}</h2>
        <div className="academy-cta__actions" role="group" aria-label="Call to action">
          <Button text={primaryCta.label} href={primaryCta.href} />
          {secondaryCta && (
            <a href={secondaryCta.href} className="academy-btn academy-btn--outline academy-btn--on-dark">
              {secondaryCta.label}
            </a>
          )}
        </div>
        {showSocial && <AcademySocialLinks compact onDark />}
      </motion.div>
    </section>
  );
};

export default CTASection;
