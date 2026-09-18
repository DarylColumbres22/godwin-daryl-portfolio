import { FiAward } from 'react-icons/fi';
import { education } from '../data/education.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

export default function Education() {
  return (
    <section id="education" className="section border-t border-line/60 bg-surface/40">
      <div className="shell">
        <SectionHeading title="Education" />

        <div className="space-y-6">
          {education.map((entry) => (
            <Reveal key={entry.id}>
              <article className="panel p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded border border-line bg-raised text-signal">
                      <FiAward size={17} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-display-sm font-semibold text-ink">{entry.degree}</h3>
                      <p className="mt-1.5 text-muted">{entry.focus}</p>
                      <p className="mt-1 text-muted">{entry.school}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted">{entry.period}</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {entry.details.map((detail) => (
                    <li key={detail} className="flex gap-3 leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-node" />
                      <span className="max-w-prose">{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
