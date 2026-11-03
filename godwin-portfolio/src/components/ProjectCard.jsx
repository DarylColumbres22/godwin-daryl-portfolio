import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import ProjectThumb from './ProjectThumb.jsx';
import WorkflowChain from './WorkflowChain.jsx';

/**
 * One project.
 *   featured -> thumbnail on top, workflow chain, key features
 *   wide     -> same content, thumbnail beside the text (used for a lone last card)
 *   compact  -> essentials only
 */
export default function ProjectCard({ project, variant = 'featured', onOpen }) {
  const isCompact = variant === 'compact';
  const isWide = variant === 'wide';

  const open = () => onOpen(project);

  const thumb = (
    <div className="relative">
      <ProjectThumb
        project={project}
        ratio={isWide ? 'aspect-[16/10] sm:aspect-[4/3]' : 'aspect-[16/9]'}
        className="transition-colors duration-300 group-hover:border-signal/40"
      />
      <span className="tag absolute left-3 top-3 border-node/40 bg-surface/90 text-node backdrop-blur-sm">
        {project.category}
      </span>
    </div>
  );

  const body = (
    <div className={`flex min-w-0 flex-1 flex-col ${isWide ? '' : 'mt-5'}`}>
      <h4
        className={`font-display font-semibold text-ink transition-colors duration-200 group-hover:text-signal ${
          isCompact ? 'text-[1.05rem]' : 'text-display-sm'
        }`}
      >
        {project.name}
      </h4>
      <p className="mt-1.5 text-[0.85rem] text-muted">{project.type}</p>

      <p className="mt-3 leading-relaxed text-muted">{project.tagline}</p>

      {!isCompact && project.workflow ? (
        <WorkflowChain steps={project.workflow} size="sm" className="mt-4" />
      ) : null}

      {!isCompact && !project.workflow ? (
        <ul className="mt-4 space-y-2">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 bg-signal" />
              {feature}
            </li>
          ))}
        </ul>
      ) : null}

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, isCompact ? 4 : 6).map((tech) => (
          <li key={tech} className="tag">
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between gap-4 border-t border-line pt-4 sm:pt-5">
        <span className="flex items-center gap-3 text-[0.8rem] text-muted">
          {project.year}
          {project.links?.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.name} source code on GitHub`}
              title="Source code on GitHub"
              className="inline-flex h-7 w-7 items-center justify-center rounded border border-line text-muted transition-colors hover:border-signal/60 hover:text-ink"
            >
              <FiGithub size={14} aria-hidden="true" />
            </a>
          ) : null}
        </span>
        <button
          type="button"
          onClick={open}
          className="inline-flex items-center gap-1.5 rounded text-sm font-semibold text-ink transition-colors hover:text-signal"
        >
          View details
          <FiArrowUpRight
            size={15}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
          <span className="sr-only">about {project.name}</span>
        </button>
      </div>
    </div>
  );

  return (
    <article
      onClick={(event) => {
        // The card is a convenience target; the button stays the real control.
        if (event.target.closest('button, a')) return;
        open();
      }}
      className={`panel group flex h-full cursor-pointer flex-col transition-all duration-300 ease-calm
                  hover:-translate-y-0.5 hover:border-signal/45 hover:shadow-lg hover:shadow-black/10
                  ${isCompact ? 'p-5' : 'p-5 sm:p-6'}
                  ${isWide ? 'sm:flex-row sm:items-stretch sm:gap-7' : ''}`}
    >
      {isCompact ? null : (
        <div className={isWide ? 'sm:w-[42%] sm:shrink-0' : ''}>{thumb}</div>
      )}
      {isWide ? <div className="mt-5 flex min-w-0 flex-1 sm:mt-0">{body}</div> : body}
    </article>
  );
}
