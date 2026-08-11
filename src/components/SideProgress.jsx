import { useEffect, useState } from 'react';
import { topicCards } from '../data/topics';

export function SideProgress() {
  const [activeId, setActiveId] = useState(topicCards[0].id);

  useEffect(() => {
    const sections = topicCards
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
        if (visibleSection) setActiveId(visibleSection.target.id);
      },
      { rootMargin: '-30% 0px -45%', threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="side-progress" aria-label="مؤشر المحاور">
      <span className="side-progress__label">المسار</span>
      <ol>
        {topicCards.map((topic) => (
          <li key={topic.id} className={activeId === topic.id ? 'is-active' : ''}>
            <a href={`#${topic.id}`} aria-current={activeId === topic.id ? 'step' : undefined}>
              <span>{topic.number}</span>
              <b>{topic.navLabel}</b>
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
