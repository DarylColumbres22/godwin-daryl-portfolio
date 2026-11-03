import { FiCode, FiCpu, FiShare2, FiZap } from 'react-icons/fi';
import { capabilities, exploring, exploringNote } from '../data/capabilities.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

const icons = {
  support: FiCpu,
  network: FiShare2,
  automation: FiZap,
  code: FiCode,
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="section border-t border-line/60 bg-surface/40">
      <div className="shell">
        <SectionHeading
          title="What I can do"
          lead="The kinds of work I can take on in an entry-level IT role, based on coursework, my internship and the projects below."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((capability, index) => {
            const Icon = icons[capability.icon] || FiCode;
            return (
              <Reveal key={capability.id} delay={Math.min(index, 3) * 0.05}>
                <div className="panel h-full p-6 transition-colors duration-200 hover:border-signal/40">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded border border-line bg-raised text-signal">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-[1.05rem] font-semibold text-ink">{capability.title}</h3>
                  </div>
                  <p className="mt-4 max-w-prose leading-relaxed text-muted">{capability.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="panel mt-6 p-6">
            <h3 className="font-display text-[0.95rem] font-semibold text-ink">Currently developing</h3>
            <p className="mt-2 text-[0.88rem] text-muted">{exploringNote}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {exploring.map((area) => (
                <li key={area} className="tag">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
