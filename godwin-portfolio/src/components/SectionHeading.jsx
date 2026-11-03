/**
 * Section heading built around the site's one visual motif: a node on a line.
 * The square marks the section, the hairline runs out to the edge of the shell.
 */
export default function SectionHeading({ title, lead, id }) {
  return (
    <header className="mb-10 sm:mb-12">
      <div className="flex items-center gap-4">
        <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-signal" />
        <h2 id={id} className="font-display text-display-md text-ink">
          {title}
        </h2>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </div>
      {lead ? <p className="mt-4 max-w-prose text-[1.02rem] leading-relaxed text-muted">{lead}</p> : null}
    </header>
  );
}
