import { FiBookOpen } from 'react-icons/fi';
import { training, trainingNote } from '../data/education.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

export default function Certifications() {
  return (
    <section id="training" className="section">
      <div className="shell">
        <SectionHeading title="Training" lead={trainingNote} />

        <div className="grid gap-4 sm:grid-cols-2">
          {training.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06}>
              <div className="panel h-full p-6">
                <div className="flex items-center gap-2.5">
                  <FiBookOpen size={17} className="text-signal" aria-hidden="true" />
                  <h3 className="font-display text-[1.02rem] font-semibold text-ink">{item.name}</h3>
                </div>
                <p className="mt-2 text-sm text-muted">{item.provider}</p>
                <p className="mt-4 leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
