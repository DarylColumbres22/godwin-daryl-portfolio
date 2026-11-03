import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Capabilities from './components/Capabilities.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import { navItems } from './data/profile.js';
import useActiveSection from './hooks/useActiveSection.js';

export default function App() {
  const activeSection = useActiveSection(['home', ...navItems.map((item) => item.id)]);

  return (
    <>
      <a
        href="#main"
        className="btn-primary sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]"
      >
        Skip to content
      </a>

      <Navbar activeSection={activeSection} />

      <main id="main">
        <Hero />
        <About />
        <Capabilities />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
