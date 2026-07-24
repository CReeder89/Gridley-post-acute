import React from 'react';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface LearningObjectiveProps {
  text: string;
  index?: number;
}

const LearningObjective: React.FC<LearningObjectiveProps> = ({ text, index = 0 }) => {
  return (
    <motion.li
      className="academy-objective"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
    >
      <CheckCircleOutlineIcon className="academy-objective__icon" aria-hidden="true" />
      <span>{text}</span>
    </motion.li>
  );
};

interface LearningObjectiveListProps {
  title: string;
  intro?: string;
  items: readonly string[];
  closing?: string;
}

export const LearningObjectiveList: React.FC<LearningObjectiveListProps> = ({
  title,
  intro,
  items,
  closing,
}) => {
  return (
    <section className="academy-section" aria-labelledby="learning-objectives-heading">
      <h2 id="learning-objectives-heading">{title}</h2>
      {intro ? <p className="academy-objectives__intro">{intro}</p> : null}
      <ul className="academy-objectives" role="list">
        {items.map((item, i) => (
          <LearningObjective key={item.slice(0, 48)} text={item} index={i} />
        ))}
      </ul>
      {closing ? <p className="academy-objectives__closing">{closing}</p> : null}
    </section>
  );
};

export default LearningObjective;
