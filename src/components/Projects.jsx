import { useMemo, useState } from 'react';
import { categories, projects } from '../data/projects.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import ProjectCard from './ProjectCard.jsx';
import ProjectModal from './ProjectModal.jsx';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openProject, setOpenProject] = useState(null);

  const visible = useMemo(
    () => (activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)),
    [activeCategory]
  );

  const featured = visible.filter((project) => project.featured);
  const additional = visible.filter((project) => !project.featured);

  return (
    <section id="projects" className="section border-t border-line/60">
      <div className="shell">
        <SectionHeading
          title="Projects"
          lead="Internship work, academic projects and personal builds. Screenshots and links are added as each project is written up."
        />

        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const count =
              category === 'All' ? projects.length : projects.filter((p) => p.category === category).length;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded border px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'border-signal bg-signal/10 text-ink'
                    : 'border-line bg-surface text-muted hover:border-signal/50 hover:text-ink'
                }`}
              >
                {category}
                <span className="ml-2 text-[0.75rem] text-muted">{count}</span>
              </button>
            );
          })}
        </div>

        {featured.length > 0 ? (
          <div className="mb-16">
            <div className="mb-6 flex items-baseline gap-3">
              <h3 className="font-display text-[1.05rem] font-semibold text-ink">Featured projects</h3>
              <span className="text-[0.8rem] text-muted">Automation, mobile and networking work</span>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {featured.map((project, index) => {
                // A lone final card runs full width rather than leaving a gap.
                const isLastAlone = featured.length % 2 === 1 && index === featured.length - 1;
                return (
                  <Reveal
                    key={project.id}
                    delay={Math.min(index, 3) * 0.06}
                    className={isLastAlone ? 'md:col-span-2' : ''}
                  >
                    <ProjectCard
                      project={project}
                      variant={isLastAlone ? 'wide' : 'featured'}
                      onOpen={setOpenProject}
                    />
                  </Reveal>
                );
              })}
            </div>
          </div>
        ) : null}

        {additional.length > 0 ? (
          <div>
            <div className="mb-6 flex items-baseline gap-3">
              <h3 className="font-display text-[1.05rem] font-semibold text-ink">More projects</h3>
              <span className="text-[0.8rem] text-muted">Coursework in web and mobile development</span>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {additional.map((project, index) => (
                <Reveal key={project.id} delay={Math.min(index, 3) * 0.06}>
                  <ProjectCard project={project} variant="compact" onOpen={setOpenProject} />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}

        {visible.length === 0 ? (
          <p className="panel p-6 text-muted">
            No projects in this category yet. Choose another filter to see the rest.
          </p>
        ) : null}
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}
