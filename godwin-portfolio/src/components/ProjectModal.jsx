import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiBookOpen, FiExternalLink, FiGithub, FiImage, FiX } from 'react-icons/fi';
import ProjectThumb from './ProjectThumb.jsx';
import WorkflowChain from './WorkflowChain.jsx';

/**
 * Project detail dialog. Closes on Escape or backdrop click, locks page scroll
 * while open, moves focus to the close button and keeps Tab inside the dialog.
 */
export default function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return undefined;

    const previouslyFocused = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = overflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [project, onClose]);

  const hasLinks = project && Object.values(project.links).some(Boolean);
  const isPortrait = project?.slotLayout === 'portrait';
  // The lead image already shows the first screenshot, so don't repeat it below.
  const gallerySlots = project
    ? (project.screenshotSlots || []).filter(
        (slot) => isPortrait || !slot.image || slot.image !== project.screenshot
      )
    : [];

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm sm:p-8"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? {} : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? {} : { opacity: 0, y: 10, scale: 0.99 }}
            transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            className="panel my-auto w-full max-w-3xl shadow-2xl"
          >
            <div className="flex items-start justify-between gap-6 border-b border-line p-6 sm:p-7">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="tag border-node/40 text-node">{project.category}</span>
                  <span className="text-[0.82rem] text-muted">{project.year}</span>
                </div>
                <h3
                  id="project-modal-title"
                  className="mt-3 font-display text-display-sm font-semibold text-ink"
                >
                  {project.name}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{project.type}</p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded border border-line bg-raised text-muted transition-colors hover:text-ink"
              >
                <FiX size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-7 p-6 sm:p-7">
              {/* Lead image. Set `screenshot` in src/data/projects.js to show a real one. */}
              {project.screenshot ? (
                <a
                  href={project.screenshot}
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Open full size"
                  className="block"
                >
                  <ProjectThumb project={project} fit="contain" ratio="aspect-[16/9] sm:aspect-[2/1]" />
                  <span className="sr-only">Open the {project.name} screenshot full size in a new tab</span>
                </a>
              ) : (
                <ProjectThumb project={project} ratio="aspect-[16/9] sm:aspect-[2/1]" />
              )}

              {project.workflow ? (
                <div>
                  <h4 className="font-display text-sm font-semibold text-ink">How it flows</h4>
                  <WorkflowChain steps={project.workflow} className="mt-3" />
                </div>
              ) : null}

              <div>
                <h4 className="font-display text-sm font-semibold text-ink">Overview</h4>
                <p className="mt-3 max-w-prose leading-relaxed text-muted">{project.description}</p>
                {project.context ? (
                  <p className="mt-3 max-w-prose text-[0.92rem] leading-relaxed text-muted/85">{project.context}</p>
                ) : null}
              </div>

              <div>
                <h4 className="font-display text-sm font-semibold text-ink">What it does</h4>
                <ul className="mt-3 space-y-2.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3 leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-signal" />
                      <span className="max-w-prose">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-display text-sm font-semibold text-ink">Technologies</h4>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {gallerySlots.length > 0 ? (
                <div>
                  <h4 className="font-display text-sm font-semibold text-ink">Screenshots</h4>
                  <div
                    className={`mt-3 grid gap-3 ${
                      isPortrait ? 'grid-cols-2 sm:grid-cols-3' : 'sm:grid-cols-2'
                    }`}
                  >
                    {gallerySlots.map((slot) =>
                      slot.image ? (
                        <figure key={slot.id}>
                          <a
                            href={slot.image}
                            target="_blank"
                            rel="noreferrer noopener"
                            title="Open full size"
                            className="block"
                          >
                            <img
                              src={slot.image}
                              alt={`${slot.label} from the ${project.name} project`}
                              loading="lazy"
                              className={`w-full rounded border border-line bg-raised object-contain ${
                                isPortrait ? 'aspect-[9/19]' : 'aspect-[16/10]'
                              }`}
                            />
                          </a>
                          <figcaption className="mt-2 text-[0.8rem] text-muted">{slot.label}</figcaption>
                        </figure>
                      ) : (
                        <div
                          key={slot.id}
                          className={`flex flex-col items-center justify-center gap-2 rounded border border-dashed border-line bg-raised/50 px-4 text-center ${
                            isPortrait ? 'aspect-[9/19]' : 'aspect-[16/10]'
                          }`}
                        >
                          <FiImage size={16} className="text-muted/70" aria-hidden="true" />
                          <span className="text-[0.8rem] text-muted">{slot.label}</span>
                          <span className="text-[0.72rem] text-muted/70">Project screenshot</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ) : null}

              {hasLinks ? (
                <div className="flex flex-wrap gap-3 border-t border-line pt-6">
                  {project.links.github ? (
                    <a href={project.links.github} target="_blank" rel="noreferrer noopener" className="btn-secondary">
                      <FiGithub size={16} aria-hidden="true" />
                      Source code
                    </a>
                  ) : null}
                  {project.links.demo ? (
                    <a href={project.links.demo} target="_blank" rel="noreferrer noopener" className="btn-secondary">
                      <FiExternalLink size={16} aria-hidden="true" />
                      Live demo
                    </a>
                  ) : null}
                  {project.links.docs ? (
                    <a href={project.links.docs} target="_blank" rel="noreferrer noopener" className="btn-secondary">
                      <FiBookOpen size={16} aria-hidden="true" />
                      Documentation
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
