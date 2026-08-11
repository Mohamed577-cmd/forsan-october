import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { topicCards } from '../data/topics';

const icons = ['target', 'timeline', 'map', 'info'];

export function TopicsOverview() {
  return (
    <section className="topics-overview section-space" id="topics" aria-labelledby="topics-title">
      <div className="shell">
        <SectionHeading
          eyebrow="مسارات القراءة"
          marker="01 — 04"
          title="أربعة محاور، مشهد واحد"
          text="اختر محورًا للانتقال إلى تحليله، أو اتبع المسار بالتسلسل الزمني والخريطة."
        />
        <div className="topic-grid">
          {topicCards.map((topic, index) => (
            <Reveal className="topic-card-wrap" delay={index * 80} key={topic.id}>
              <a className="topic-card" href={`#${topic.id}`}>
                <span className="topic-card__number">{topic.number}</span>
                <span className="topic-card__icon"><Icon name={icons[index]} size={22} /></span>
                <div>
                  <p className="topic-card__eyebrow">{topic.eyebrow}</p>
                  <h3>{topic.title}</h3>
                  <p className="topic-card__description">{topic.description}</p>
                </div>
                <span className="topic-card__link">استكشف المحور <Icon name="arrow" size={18} /></span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
