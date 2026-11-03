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
              <div className="panel flex h-full flex-col p-6">
                {item.certificate ? (
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Open full size"
                    className="mb-5 block"
                  >
                    <img
                      src={item.certificate}
                      alt={item.certificateAlt}
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded border border-line bg-raised object-contain"
                    />
                    <span className="sr-only">Open the {item.name} certificate full size in a new tab</span>
                  </a>
                ) : null}
                <div className="flex items-center gap-2.5">
                  <FiBookOpen size={17} className="shrink-0 text-signal" aria-hidden="true" />
                  <h3 className="font-display text-[1.02rem] font-semibold text-ink">{item.name}</h3>
                </div>
                <p className="mt-2 text-sm text-muted">{item.provider}</p>
                {item.issued ? <p className="mt-1 text-[0.82rem] text-muted/80">{item.issued}</p> : null}
                <p className="mt-4 leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
