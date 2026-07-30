import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

type Variant = 'fadeUp' | 'fade' | 'slideLeft' | 'slideRight' | 'scaleIn';

const variantMap = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -28 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 28 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
} as const;

type MotionTag = 'div' | 'section' | 'article' | 'header' | 'li';

interface AnimateInProps extends Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'variants'> {
  children: React.ReactNode;
  /** Animation style — matches Academy page motion language */
  variant?: Variant;
  delay?: number;
  duration?: number;
  /** Intersection Observer threshold (0–1) */
  amount?: number;
  /** Use mount animation instead of scroll reveal (heroes / above-the-fold) */
  immediate?: boolean;
  as?: MotionTag;
}

/**
 * Subtle entrance animation used site-wide.
 * Scroll-triggered by default; set `immediate` for hero content.
 */
const AnimateIn: React.FC<AnimateInProps> = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.5,
  amount = 0.25,
  immediate = false,
  as = 'div',
  ...rest
}) => {
  const MotionComponent = motion[as] as typeof motion.div;
  const selected = variantMap[variant];

  if (immediate) {
    return (
      <MotionComponent
        initial={selected.hidden}
        animate={selected.visible}
        transition={{ duration, delay, ease: 'easeOut' }}
        {...rest}
      >
        {children}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={selected}
      transition={{ duration, delay, ease: 'easeOut' }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimateIn;
