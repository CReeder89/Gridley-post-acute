import React from 'react';
import { motion } from 'framer-motion';

interface CommunityGridProps {
  title: string;
  intro?: string;
  locations: readonly string[];
}

const CommunityGrid: React.FC<CommunityGridProps> = ({ title, intro, locations }) => {
  return (
    <section className="academy-section" aria-labelledby="communities-heading">
      <h2 id="communities-heading">{title}</h2>
      {intro && <p className="academy-section__intro">{intro}</p>}
      <ul className="academy-communities" role="list">
        {locations.map((location, index) => (
          <motion.li
            key={location}
            className="academy-communities__chip"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.4) }}
          >
            {location}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default CommunityGrid;
