import React from 'react';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface MissionCardProps {
  title: string;
  tagline?: string;
  paragraphs: readonly string[];
}

const MissionCard: React.FC<MissionCardProps> = ({ title, tagline, paragraphs }) => {
  return (
    <section className="academy-section" aria-labelledby="mission-heading">
      <motion.blockquote
        className="academy-mission"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5 }}
      >
        <FormatQuoteIcon className="academy-mission__quote" aria-hidden="true" />
        <h2 id="mission-heading">{title}</h2>
        {tagline ? <p className="academy-mission__tagline">{tagline}</p> : null}
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </motion.blockquote>
    </section>
  );
};

export default MissionCard;
