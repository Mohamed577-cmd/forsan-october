import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { sources } from '../data/sources';
import { topicCards } from '../data/topics';

const sourceById = new Map(sources.map((source) => [source.id, source]));

export function TopicSections() {
  return (
    <div className="topic-sections" aria-label="تفصيل محاور البحث">
      {topicCards.map((topic, index) => <TopicSection key={topic.id} topic={topic} index={index} />)}
    </div>
  );
}

function TopicSection({ topic, index }) {
  const isTheoretical = topic.id === 'psychological-war';

  return (
    <section className={`topic-section topic-section--${index + 1} section-space`} id={topic.id} aria-labelledby={`${topic.id}-title`}>
      <div className="shell">
        <Reveal className="topic-section__heading">
          <div className="topic-section__number">{topic.number}</div>
          <div>
            <p className="section-kicker">{topic.eyebrow}</p>
            <h2 id={`${topic.id}-title`}>{topic.title}</h2>
            <p>{topic.description}</p>
          </div>
        </Reveal>

        <Reveal className="highlight-statement" delay={80}>
          <span>الفكرة الأساسية</span>
          <blockquote>{topic.highlight}</blockquote>
        </Reveal>

        {topic.learningNote && (
          <Reveal className="research-note" delay={120}>
            <Icon name="info" size={20} />
            <p>{topic.learningNote}</p>
          </Reveal>
        )}

        <div className="analysis-grid">
          {topic.groups.map((group, groupIndex) => (
            <Reveal className="analysis-card" delay={100 + groupIndex * 90} key={group.title}>
              <span className="analysis-card__index">0{groupIndex + 1}</span>
              <h3>{group.title}</h3>
              <p>{group.introduction}</p>
              <ul>
                {group.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              {group.comparison && <Comparison comparison={group.comparison} />}
            </Reveal>
          ))}
        </div>

        {topic.planEvolution && <PlanEvolution plans={topic.planEvolution} />}
        {topic.impactChain && <ImpactChain chain={topic.impactChain} />}

        {topic.integrityNote && (
          <Reveal className="integrity-banner" delay={120}>
            <Icon name="info" size={22} />
            <div><b>فصل منهجي بين المفهوم والتوثيق</b><p>{topic.integrityNote}</p></div>
          </Reveal>
        )}

        <Reveal className="topic-sources" delay={160}>
          <span className="topic-sources__label">{isTheoretical ? 'إطارات نظرية مستخدمة' : 'مصادر المحور'}</span>
          <div>
            {topic.sourceIds.map((id) => {
              const source = sourceById.get(id);
              return source ? <a href="#sources" key={id}><Icon name="book" size={17} />{source.title}</a> : null;
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Comparison({ comparison }) {
  return (
    <div className="comparison-block">
      <div><b>{comparison.first.label}</b><span>{comparison.first.text}</span></div>
      <span className="comparison-block__vs">↔</span>
      <div><b>{comparison.second.label}</b><span>{comparison.second.text}</span></div>
    </div>
  );
}

function PlanEvolution({ plans }) {
  return (
    <Reveal className="plan-evolution" delay={140}>
      <div className="subsection-label"><Icon name="timeline" size={19} />تطور الخطط العسكرية</div>
      <div className="plan-evolution__flow">
        {plans.map((plan, index) => (
          <div className="plan-step" key={plan.name}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{plan.name}</h3>
            <p>{plan.note}</p>
            {index < plans.length - 1 && <i className="plan-arrow" aria-hidden="true"><Icon name="arrow" /></i>}
          </div>
        ))}
      </div>
      <p className="plan-evolution__source-note">تفاصيل الخطط والعمليات تُراجع في مذكرات الجمسي والشاذلي وكتاب جمال حماد.</p>
    </Reveal>
  );
}

function ImpactChain({ chain }) {
  return (
    <Reveal className="impact-chain" delay={140}>
      <div className="subsection-label"><Icon name="target" size={19} />سلسلة التأثير</div>
      <ol>
        {chain.map((item, index) => (
          <li key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{item}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
