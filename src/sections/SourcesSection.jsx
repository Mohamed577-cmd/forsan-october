import { useMemo, useState } from 'react';
import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { sources, sourceTypes } from '../data/sources';

export function SourcesSection() {
  const [filter, setFilter] = useState('الكل');
  const visibleSources = useMemo(
    () => (filter === 'الكل' ? sources : sources.filter((source) => source.type === filter)),
    [filter],
  );

  return (
    <section className="sources-section section-space" id="sources" aria-labelledby="sources-title">
      <div className="shell">
        <SectionHeading
          eyebrow="نظام المراجع"
          marker="SRC / 10"
          title="المصادر والمراجع"
          text="بطاقات مركزية تربط كل مرجع بموضعه في البحث، وتوضح وظيفته قبل فتحه."
        />
        <Reveal className="sources-toolbar" delay={80}>
          <p>تصنيف المصدر</p>
          <div role="group" aria-label="تصفية المصادر حسب النوع">
            {sourceTypes.map((type) => (
              <button key={type} type="button" className={filter === type ? 'is-active' : ''} onClick={() => setFilter(type)}>
                {type}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="sources-grid">
          {visibleSources.map((source, index) => <SourceCard source={source} index={index} key={source.id} />)}
        </div>
        <Reveal className="sources-note" delay={100}>
          <Icon name="info" size={20} />
          <p>توضع روابط المصادر وتُراجع قبل النشر النهائي من ملف البيانات المركزي، دون تعديل مكوّنات الواجهة.</p>
        </Reveal>
      </div>
    </section>
  );
}

function SourceCard({ source, index }) {
  const isLinked = source.url && source.url !== '#' && source.url !== 'YOUR_SOURCE_URL_HERE';

  return (
    <Reveal className="source-card-wrap" delay={Math.min(index * 55, 220)}>
      <article className="source-card">
        <div className="source-card__top"><span>{source.type}</span><b>#{String(index + 1).padStart(2, '0')}</b></div>
        <h3>{source.title}</h3>
        <p className="source-card__author">{source.author} <i /> {source.year}</p>
        <div className="source-card__category">مرتبط بالمحور: <b>{source.category}</b></div>
        <p className="source-card__summary">{source.summary}</p>
        <div className="source-card__relevance"><span>لماذا استخدمناه؟</span><p>{source.relevance}</p></div>
        {isLinked ? (
          <a className="source-link" href={source.url} target="_blank" rel="noreferrer">فتح المصدر <Icon name="external" size={17} /></a>
        ) : (
          <span className="source-link source-link--disabled" aria-label="الرابط سيضاف لاحقًا">الرابط سيضاف لاحقًا</span>
        )}
      </article>
    </Reveal>
  );
}
