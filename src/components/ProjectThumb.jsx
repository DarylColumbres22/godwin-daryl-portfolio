import { getProjectIcon } from './projectIcons.js';

/**
 * Project thumbnail. Shows the real screenshot when `project.screenshot` is set,
 * otherwise a quiet placeholder: faint grid, the project glyph and a label.
 * No invented UI, no fake screenshots.
 */
export default function ProjectThumb({ project, className = '', ratio = 'aspect-[16/9]' }) {
  const Icon = getProjectIcon(project.icon);

  if (project.screenshot) {
    return (
      <img
        src={project.screenshot}
        alt={`Screenshot from the ${project.name} project`}
        loading="lazy"
        className={`${ratio} w-full rounded border border-line object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`${ratio} relative flex w-full items-center justify-center overflow-hidden rounded border border-dashed border-line bg-raised/50 ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(var(--c-line) / 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--c-line) / 0.5) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <Icon size={22} className="text-signal/80" aria-hidden="true" />
        <span className="text-[0.78rem] text-muted">Project screenshot</span>
      </div>
    </div>
  );
}
