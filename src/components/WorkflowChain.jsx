import { FiChevronRight } from 'react-icons/fi';

/**
 * Renders a process as a readable chain of steps. Wraps on narrow screens, and
 * the arrows are decorative so screen readers just hear an ordered list.
 */
export default function WorkflowChain({ steps, size = 'md', className = '' }) {
  if (!steps || steps.length === 0) return null;

  const isSmall = size === 'sm';

  return (
    <ol className={`flex flex-wrap items-center gap-x-1.5 gap-y-2 ${className}`}>
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-1.5">
          {index > 0 ? (
            <FiChevronRight size={isSmall ? 12 : 14} className="shrink-0 text-muted/60" aria-hidden="true" />
          ) : null}
          <span
            className={`inline-flex items-center rounded border border-line bg-raised font-medium text-ink/90 ${
              isSmall ? 'px-2 py-0.5 text-[0.72rem]' : 'px-2.5 py-1 text-[0.8rem]'
            }`}
          >
            {step}
          </span>
        </li>
      ))}
    </ol>
  );
}
