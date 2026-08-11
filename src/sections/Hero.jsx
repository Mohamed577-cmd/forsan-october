import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { siteMeta } from '../data/topics';

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="shell hero__content">
        <Reveal className="hero__copy" delay={80}>
          <div className="hero-kicker">
            <span className="signal-dot" />
            <span>أرشيف تفاعلي / 1973</span>
          </div>
          <p className="hero__chapter">بحث مدرسي مرئي</p>
          <h1 id="hero-title">فرسان القراءة<br /><em>في نصر أكتوبر</em></h1>
          <p className="hero__subtitle">قراءة تحليلية في حرب أكتوبر 1973</p>
          <div className="hero__people" aria-label="بيانات المشروع">
            <span>{siteMeta.student}</span>
            <i />
            <span>{siteMeta.school}</span>
            <i />
            <span>تحت إشراف {siteMeta.supervisor}</span>
          </div>
          <div className="hero__actions">
            <a className="button button--primary" href="#topics">
              <span>ابدأ الرحلة</span>
              <Icon name="arrow" />
            </a>
            <a className="text-link" href="#strategic-map">
              <Icon name="map" size={18} />
              استكشف الخريطة الاستراتيجية
            </a>
          </div>
        </Reveal>

        <Reveal className="hero__visual-wrap" delay={220}>
          <HeroMapGraphic />
        </Reveal>
      </div>
      <div className="hero__footer shell">
        <span>مرر لاستكشاف المحاور</span>
        <span className="scroll-line" aria-hidden="true"><i /></span>
        <span>01 — 04</span>
      </div>
    </section>
  );
}

function HeroMapGraphic() {
  return (
    <div className="hero-map" aria-label="رسم توضيحي مجرد لمصر وقناة السويس" role="img">
      <span className="year-watermark">1973</span>
      <svg viewBox="0 0 640 620" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="land-fill" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#25272c" />
            <stop offset="1" stopColor="#121418" />
          </linearGradient>
          <filter id="red-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <g className="hero-map__grid">
          <path d="M40 90H600M40 190H600M40 290H600M40 390H600M40 490H600" />
          <path d="M110 35V560M220 35V560M330 35V560M440 35V560M550 35V560" />
        </g>
        <path className="hero-map__land" d="M206 119 288 78l105 23 33 56 95 44 13 116-64 50-15 129-122 59-137-45-52-120 45-102-6-105 22-58Z" />
        <path className="hero-map__sinai" d="m426 157 95 44 13 116-64 50-15 129-60-14 18-106-34-80 47-119Z" />
        <path className="hero-map__coast" d="M187 191c83-30 171-38 247-20" />
        <path className="hero-map__canal" d="M393 190c-25 76-20 147-18 213 2 51-18 91-42 121" />
        <path className="hero-map__canal-glow" d="M393 190c-25 76-20 147-18 213 2 51-18 91-42 121" filter="url(#red-glow)" />
        <g className="hero-map__movement">
          <path d="M319 304h67" />
          <path d="m375 294 12 10-12 10" />
          <path d="M304 351h75" />
          <path d="m368 341 12 10-12 10" />
          <path d="M294 396h80" />
          <path d="m363 386 12 10-12 10" />
        </g>
        <g className="hero-map__markers">
          <circle cx="375" cy="304" r="5" /><circle cx="369" cy="351" r="5" /><circle cx="364" cy="396" r="5" />
        </g>
        <g className="hero-map__labels">
          <text x="190" y="170">مصر</text>
          <text x="455" y="258">سيناء</text>
          <text x="415" y="420">القناة</text>
        </g>
      </svg>
      <div className="map-coordinate map-coordinate--a">31° 12′ <span>N</span></div>
      <div className="map-coordinate map-coordinate--b">32° 20′ <span>E</span></div>
      <div className="map-callout"><span />مسار التحليل</div>
    </div>
  );
}
