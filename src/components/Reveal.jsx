import { motion, useReducedMotion } from 'framer-motion';

/**
 * A restrained scroll reveal: a short fade with a small lift, once per element.
 * Returns a plain element when the visitor prefers reduced motion.
 */
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
