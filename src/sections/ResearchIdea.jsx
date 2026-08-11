import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { Icon } from '../components/Icon';

export function ResearchIdea() {
  return (
    <section className="research-idea section-space" id="research-idea" aria-labelledby="research-idea-title">
      <div className="shell research-idea__layout">
        <SectionHeading
          eyebrow="فكرة البحث"
          marker="00"
          title="من الورقة إلى التجربة"
          text="هذا الموقع امتداد تفاعلي للبحث الورقي؛ يختصر المسارات، ويترك للمصادر مهمة التوثيق والتوسع."
        />
        <Reveal className="research-statement" delay={120}>
          <Icon name="target" size={28} />
          <p>البحث لا يكتفي بسرد أحداث حرب أكتوبر، بل يقرأ الحرب من أربع زوايا مترابطة: المجتمع والجبهة الداخلية، التخطيط والاستراتيجية، مكانة مصر إقليميًا ودوليًا، والحرب النفسية.</p>
        </Reveal>
      </div>
    </section>
  );
}
