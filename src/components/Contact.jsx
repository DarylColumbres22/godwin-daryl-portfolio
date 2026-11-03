import { FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { contact, profile } from '../data/profile.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

const channels = [
  {
    id: 'email',
    icon: FiMail,
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    external: false,
  },
  {
    id: 'phone',
    icon: FiPhone,
    label: 'Phone',
    value: contact.phone,
    href: contact.phoneHref,
    external: false,
  },
  {
    id: 'linkedin',
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: contact.linkedinLabel,
    href: contact.linkedin,
    external: true,
  },
  {
    id: 'github',
    icon: FiGithub,
    label: 'GitHub',
    value: contact.githubLabel,
    href: contact.github,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-line/60 bg-surface/40">
      <div className="shell">
        <SectionHeading
          title="Get in touch"
          lead="I am open to entry-level roles in IT support, automation, development and networking. Email is the quickest way to reach me."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <Reveal key={channel.id} delay={Math.min(index, 3) * 0.05}>
                <a
                  href={channel.href}
                  {...(channel.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                  className="panel flex h-full items-center gap-4 p-5 transition-colors duration-200 hover:border-signal/50 hover:bg-raised"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded border border-line bg-raised text-signal">
                    <Icon size={17} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.8rem] text-muted">{channel.label}</span>
                    <span className="block truncate font-medium text-ink">{channel.value}</span>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="panel mt-8 flex flex-wrap items-center justify-between gap-6 p-6 sm:p-8">
            <div>
              <p className="font-display text-display-sm font-semibold text-ink">
                Looking for someone to start?
              </p>
              <p className="mt-2 flex items-center gap-2 text-muted">
                <FiMapPin size={15} aria-hidden="true" />
                Based in {profile.location}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${contact.email}`} className="btn-primary">
                <FiMail size={16} aria-hidden="true" />
                Email me
              </a>
              <a href={profile.resumePath} download={profile.resumeFileName} className="btn-secondary">
                <FiDownload size={16} aria-hidden="true" />
                Download resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
