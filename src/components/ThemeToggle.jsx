import { FiMoon, FiSun } from 'react-icons/fi';
import useTheme from '../hooks/useTheme.js';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
      className={`inline-flex h-10 w-10 items-center justify-center rounded border border-line bg-surface text-muted transition-colors duration-200 hover:border-signal/60 hover:text-ink ${className}`}
    >
      {theme === 'dark' ? <FiSun size={17} aria-hidden="true" /> : <FiMoon size={17} aria-hidden="true" />}
    </button>
  );
}
