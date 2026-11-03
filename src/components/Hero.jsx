import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { contact, profile } from '../data/profile.js';

/**
 * The one orchestrated motion moment on the page: the hero settles in on load.
 * Everything after this relies on quieter, scroll-triggered reveals.
 */
export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const item = prefersReducedMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] } },
      };

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
      {/* Faint circuit-like grid, kept very low contrast so text stays dominant. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(var(--c-line) / 0.35) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--c-line) / 0.35) 1px, transparent 1px)',
          backgroundSize: '76px 76px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 25%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 25%, transparent 78%)',
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="shell relative grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-16"
      >
        <div>
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[0.82rem] font-medium text-muted"
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-node motion-safe:animate-node-pulse"
            />
            {profile.availability}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-display-lg font-bold text-ink"
          >
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
            {profile.focusLine.map((focus, index) => (
              <span key={focus} className="flex items-center gap-3">
                {index > 0 ? <span aria-hidden="true" className="h-1.5 w-1.5 bg-signal" /> : null}
                <span className="font-display text-display-sm font-medium text-ink/90">{focus}</span>
              </span>
            ))}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-prose text-[1.05rem] leading-relaxed text-muted">
            {profile.heroIntro}
          </motion.p>

          <motion.p variants={item} className="mt-4 flex items-center gap-2 text-sm text-muted">
            <FiMapPin size={15} aria-hidden="true" />
            {profile.location}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View my work
              <FiArrowDown size={16} aria-hidden="true" />
            </a>
            <a href={profile.resumePath} download={profile.resumeFileName} className="btn-secondary">
              <FiDownload size={16} aria-hidden="true" />
              Download resume
            </a>
            <a href="#contact" className="btn-ghost">
              Contact me
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded border border-line bg-surface text-muted transition-colors hover:border-signal/60 hover:text-ink"
            >
              <FiGithub size={17} aria-hidden="true" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded border border-line bg-surface text-muted transition-colors hover:border-signal/60 hover:text-ink"
            >
              <FiLinkedin size={17} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label="Send an email"
              className="inline-flex h-10 w-10 items-center justify-center rounded border border-line bg-surface text-muted transition-colors hover:border-signal/60 hover:text-ink"
            >
              <FiMail size={17} aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <motion.aside variants={item} className="panel p-6 lg:mt-2">
          <h2 className="font-display text-sm font-semibold text-ink">Where I work</h2>
          <ul className="mt-5 space-y-5">
            {profile.focusAreas.map((area) => (
              <li key={area.title} className="border-l border-line pl-4">
                <p className="text-sm font-semibold text-ink">{area.title}</p>
                <p className="mt-1 text-[0.88rem] leading-relaxed text-muted">{area.detail}</p>
              </li>
            ))}
          </ul>
        </motion.aside>
      </motion.div>
    </section>
  );
}
