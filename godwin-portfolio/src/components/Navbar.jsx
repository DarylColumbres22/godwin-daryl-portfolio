import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navItems, profile } from '../data/profile.js';
import ThemeToggle from './ThemeToggle.jsx';

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on Escape and whenever the viewport grows past mobile.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ease-calm ${
        scrolled ? 'border-line bg-base/90 backdrop-blur' : 'border-transparent bg-base/60 backdrop-blur-sm'
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between gap-4" aria-label="Primary">
        <a
          href="#home"
          className="flex items-center gap-2.5 font-display text-[0.98rem] font-semibold tracking-tight text-ink"
        >
          <span aria-hidden="true" className="h-2.5 w-2.5 bg-signal" />
          {profile.shortName}
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative whitespace-nowrap rounded px-2.5 py-2 text-[0.85rem] font-medium transition-colors duration-200 ${
                    isActive ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                  {isActive ? (
                    <motion.span
                      layoutId={prefersReducedMotion ? undefined : 'nav-active'}
                      aria-hidden="true"
                      className="absolute inset-x-2.5 -bottom-0.5 h-px bg-signal"
                    />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#contact" className="btn-secondary hidden px-4 py-2 text-[0.85rem] xl:inline-flex">
            Get in touch
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-line bg-surface text-ink lg:hidden"
          >
            {menuOpen ? <FiX size={18} aria-hidden="true" /> : <FiMenu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={prefersReducedMotion ? {} : { height: 'auto', opacity: 1 }}
            exit={prefersReducedMotion ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-base lg:hidden"
          >
            <ul className="shell flex flex-col py-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    aria-current={activeSection === item.id ? 'true' : undefined}
                    className={`flex items-center gap-3 border-b border-line/60 py-3 text-sm font-medium transition-colors ${
                      activeSection === item.id ? 'text-ink' : 'text-muted'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 ${activeSection === item.id ? 'bg-signal' : 'bg-line'}`}
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
