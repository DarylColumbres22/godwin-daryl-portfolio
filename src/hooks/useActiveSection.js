import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in view so the navigation can highlight it.
 * Uses IntersectionObserver with a band across the upper half of the viewport,
 * which keeps the indicator in step with what the reader is actually looking at.
 */
export default function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0, 0.25, 0.5, 1],
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sectionIds.join('|')]); // eslint-disable-line react-hooks/exhaustive-deps

  return activeSection;
}
