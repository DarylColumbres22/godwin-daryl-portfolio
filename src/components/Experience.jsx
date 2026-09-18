import { experience } from '../data/experience.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="shell">
        <SectionHeading title="Experience" />

        <div className="space-y-8">
          {experience.map((role) => (
            <Reveal key={role.id}>
              <article className="panel p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                  <div>
                    <h3 className="font-display text-display-sm font-semibold text-ink">{role.role}</h3>
                    <p className="mt-1.5 text-[1.02rem] text-muted">{role.company}</p>
                  </div>
                  <div className="flex flex-col items-start gap-2 sm:items-end">
                    <span className="tag border-signal/40 text-signal">{role.type}</span>
                    <span className="text-sm text-muted">{role.period}</span>
                  </div>
                </div>

                <p className="mt-6 max-w-prose leading-relaxed text-muted">{role.summary}</p>

                <ul className="mt-6 space-y-3">
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-[0.97rem] leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-node" />
                      <span className="max-w-prose">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 border-t border-line pt-5">
                  <h4 className="text-[0.82rem] font-semibold text-ink">Tools and technologies used</h4>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {role.tools.map((tool) => (
                      <li key={tool} className="tag">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
