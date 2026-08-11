import { useState } from 'react';
import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { timelineEvents } from '../data/timeline';

export function TimelineSection() {
  const [activeId, setActiveId] = useState(timelineEvents[0].id);
  const activeEvent = timelineEvents.find((event) => event.id === activeId) ?? timelineEvents[0];

  return (
    <section className="timeline-section section-space" id="timeline" aria-labelledby="timeline-title">
      <div className="shell">
        <SectionHeading
          eyebrow="الخط الزمني التحليلي"
          marker="T / 1973"
          title="كيف وصل السياق إلى أكتوبر؟"
          text="التسلسل هنا لا يعرض تواريخ فقط؛ بل يوضح كيف تتصل كل مرحلة بمحاور البحث الأربعة."
        />
        <Reveal className="timeline-interface" delay={80}>
          <div className="timeline-track" role="tablist" aria-label="مراحل الخط الزمني">
            {timelineEvents.map((event, index) => (
              <button
                key={event.id}
                className={`timeline-node ${activeId === event.id ? 'is-active' : ''}`}
                type="button"
                role="tab"
                aria-selected={activeId === event.id}
                aria-controls="timeline-detail"
                onClick={() => setActiveId(event.id)}
              >
                <span className="timeline-node__index">{String(index + 1).padStart(2, '0')}</span>
                <span className="timeline-node__dot" />
                <strong>{event.period}</strong>
                <span>{event.title}</span>
              </button>
            ))}
          </div>
          <div className="timeline-detail" id="timeline-detail" role="tabpanel">
            <div className="timeline-detail__meta"><Icon name="timeline" size={20} /> {activeEvent.period}</div>
            <h3>{activeEvent.title}</h3>
            <div className="timeline-detail__columns">
              <p><b>الحدث</b>{activeEvent.event}</p>
              <p><b>القراءة التحليلية</b>{activeEvent.interpretation}</p>
            </div>
            <div className="related-topics" aria-label="المحاور المرتبطة">
              <span>يرتبط بـ</span>
              {activeEvent.relatedTopics.map((topic) => <em key={topic}>{topic}</em>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
