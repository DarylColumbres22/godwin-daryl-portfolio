import { profile } from '../data/profile.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <SectionHeading title="About me" />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
          <Reveal className="space-y-5">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="max-w-prose text-[1.02rem] leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="panel p-6">
              <h3 className="font-display text-sm font-semibold text-ink">At a glance</h3>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-muted">Status</dt>
                  <dd className="mt-1 font-medium text-ink">Fresh graduate, June 2026</dd>
                </div>
                <div>
                  <dt className="text-muted">Degree</dt>
                  <dd className="mt-1 font-medium text-ink">BS Information Technology, major in Computer Security</dd>
                </div>
                <div>
                  <dt className="text-muted">Based in</dt>
                  <dd className="mt-1 font-medium text-ink">{profile.location}</dd>
                </div>
                <div>
                  <dt className="text-muted">Looking for</dt>
                  <dd className="mt-1 font-medium text-ink">
                    Entry-level roles in IT support, automation, development or networking
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
