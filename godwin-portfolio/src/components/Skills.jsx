import {
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiShare2,
  FiTool,
  FiZap,
} from 'react-icons/fi';
import { skillGroups } from '../data/skills.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

const icons = {
  support: FiCpu,
  network: FiShare2,
  automation: FiZap,
  code: FiCode,
  layers: FiLayers,
  database: FiDatabase,
  tools: FiTool,
  cloud: FiCloud,
};

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-line/60 bg-surface/40">
      <div className="shell">
        <SectionHeading
          title="Technical skills"
          lead="Grouped by the kind of work rather than by language, because most of what I do sits across several of these at once."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon] || FiCode;
            return (
              <Reveal key={group.id} delay={Math.min(index, 4) * 0.05}>
                <div
                  className={`panel h-full p-5 transition-colors duration-200 hover:border-signal/40 ${
                    group.primary ? 'sm:p-6' : ''
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded border border-line bg-raised ${
                        group.primary ? 'text-signal' : 'text-muted'
                      }`}
                    >
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    <h3
                      className={`font-display font-semibold text-ink ${
                        group.primary ? 'text-[1.02rem]' : 'text-[0.95rem]'
                      }`}
                    >
                      {group.title}
                    </h3>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="tag">
                        {item}
                      </li>
                    ))}
                  </ul>
                  {group.note ? <p className="mt-4 text-[0.8rem] leading-relaxed text-muted/80">{group.note}</p> : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
