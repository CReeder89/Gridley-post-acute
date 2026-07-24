import React from 'react';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

interface TimelineProps {
  title: string;
  steps: readonly string[];
}

const Timeline: React.FC<TimelineProps> = ({ title, steps }) => {
  return (
    <section className="academy-section academy-timeline-section" aria-labelledby="timeline-heading">
      <h2 id="timeline-heading">{title}</h2>
      <ol className="academy-timeline" role="list">
        {steps.map((step, index) => (
          <li key={step} className="academy-timeline__item">
            <motion.div
              className="academy-timeline__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <span className="academy-timeline__number" aria-hidden="true">
                {index + 1}
              </span>
              <span className="academy-timeline__label">{step}</span>
            </motion.div>
            {index < steps.length - 1 && (
              <div className="academy-timeline__connector" aria-hidden="true">
                <ArrowDownwardIcon fontSize="small" />
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;
