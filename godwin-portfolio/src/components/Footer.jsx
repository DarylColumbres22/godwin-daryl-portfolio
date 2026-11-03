import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { contact, profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="shell flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="flex items-center gap-2.5 font-display text-sm font-semibold text-ink">
            <span aria-hidden="true" className="h-2 w-2 bg-signal" />
            {profile.name}
          </p>
          <p className="mt-2 text-[0.85rem] text-muted">
            {profile.focusLine.join(' / ')} — {profile.location}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="text-muted transition-colors hover:text-ink"
          >
            <FiGithub size={18} aria-hidden="true" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="text-muted transition-colors hover:text-ink"
          >
            <FiLinkedin size={18} aria-hidden="true" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Send an email"
            className="text-muted transition-colors hover:text-ink"
          >
            <FiMail size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
