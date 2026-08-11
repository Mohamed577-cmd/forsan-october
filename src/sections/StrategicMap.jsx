import { useState } from 'react';
import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { mapLayers, mapLegend } from '../data/mapData';

export function StrategicMap() {
  const [activeLayers, setActiveLayers] = useState(['canal', 'crossings', 'movements', 'sites']);
  const [selectedLayer, setSelectedLayer] = useState(mapLayers[0]);

  const toggleLayer = (layer) => {
    setSelectedLayer(layer);
    setActiveLayers((layers) => (
      layers.includes(layer.id) ? layers.filter((id) => id !== layer.id) : [...layers, layer.id]
    ));
  };

  const isActive = (id) => activeLayers.includes(id);

  return (
    <section className="strategic-map-section section-space" id="strategic-map" aria-labelledby="map-title">
      <div className="shell">
        <SectionHeading
          eyebrow="الخريطة الاستراتيجية"
          marker="MAP / 01"
          title="قراءة للمكان، لا محاكاة عسكرية"
          text="خريطة مبسطة تتيح رؤية العلاقة بين القناة والضفتين وفكرة العبور والحركة، دون ادعاء دقة عملياتية أو جغرافية."
        />
        <Reveal className="map-station" delay={100}>
          <div className="map-station__topbar">
            <div><span className="live-dot" />تمثيل بصري توضيحي</div>
            <span>EG / SINAI / 1973</span>
          </div>
          <div className="map-station__body">
            <div className="map-controls" aria-label="طبقات الخريطة">
              <p className="map-controls__title">الطبقات</p>
              {mapLayers.map((layer, index) => (
                <button
                  key={layer.id}
                  className={isActive(layer.id) ? 'is-active' : ''}
                  type="button"
                  aria-pressed={isActive(layer.id)}
                  onClick={() => toggleLayer(layer)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {layer.label}
                  <i />
                </button>
              ))}
              <div className="layer-caption">
                <Icon name="info" size={18} />
                <p>{selectedLayer.description}</p>
              </div>
            </div>
            <div className="map-canvas">
              <svg viewBox="0 0 1000 620" role="img" aria-labelledby="map-visual-title map-visual-desc">
                <title id="map-visual-title">خريطة توضيحية مبسطة لمصر وسيناء وقناة السويس</title>
                <desc id="map-visual-desc">رسم بصري مجرد يوضح مناطق عامة للضفة الغربية والشرقية وقناة السويس واتجاهات حركة رمزية.</desc>
                <defs>
                  <pattern id="map-grid" width="55" height="55" patternUnits="userSpaceOnUse">
                    <path d="M 55 0 L 0 0 0 55" fill="none" stroke="#30333a" strokeWidth="1" />
                  </pattern>
                  <filter id="map-red-glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <marker id="map-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                    <path d="M0 0 8 4 0 8Z" fill="#ef3340" />
                  </marker>
                </defs>
                <rect width="1000" height="620" fill="url(#map-grid)" />
                <g className="map-decor" aria-hidden="true">
                  <path d="M70 89h140M790 95h130M70 535h180M755 530h165" />
                  <path d="M97 62v54M885 64v55M97 506v56M890 504v56" />
                </g>
                <path className="map-land map-land--egypt" d="M130 120 290 81l180 45 52 105-49 97 43 103-103 107-184-55-47-110 46-115-22-92-66-81Z" />
                <path className="map-land map-land--sinai" d="m520 160 156-24 157 75 61 129-86 85-51 117-183-82-49-132 58-97-33-71Z" />
                <path className="map-outline" d="M130 120 290 81l180 45 52 105-49 97 43 103-103 107-184-55-47-110 46-115-22-92-66-81Z" />
                <path className="map-outline" d="m520 160 156-24 157 75 61 129-86 85-51 117-183-82-49-132 58-97-33-71Z" />

                <g className={`map-layer ${isActive('canal') ? 'is-visible' : ''}`}>
                  <path className="map-canal" d="M518 170c-25 74-29 108-22 162 8 67-7 114-42 164" />
                  <path className="map-canal-glow" d="M518 170c-25 74-29 108-22 162 8 67-7 114-42 164" filter="url(#map-red-glow)" />
                  <text className="map-label map-label--active" x="547" y="350">قناة السويس</text>
                </g>

                <g className={`map-layer ${isActive('crossings') ? 'is-visible' : ''}`}>
                  <g className="crossing-mark"><circle cx="487" cy="276" r="7" /><circle cx="487" cy="276" r="15" /><text x="403" y="250">منطقة عبور</text></g>
                  <g className="crossing-mark"><circle cx="487" cy="340" r="7" /><circle cx="487" cy="340" r="15" /><text x="398" y="369">منطقة عبور</text></g>
                  <g className="crossing-mark"><circle cx="480" cy="401" r="7" /><circle cx="480" cy="401" r="15" /><text x="383" y="429">منطقة عبور</text></g>
                </g>

                <g className={`map-layer ${isActive('movements') ? 'is-visible' : ''}`}>
                  <path className="movement-path" d="M385 274h102" markerEnd="url(#map-arrow)" />
                  <path className="movement-path" d="M375 340h112" markerEnd="url(#map-arrow)" />
                  <path className="movement-path" d="M374 401h106" markerEnd="url(#map-arrow)" />
                  <text className="map-label" x="322" y="235">اتجاهات رمزية للحركة</text>
                </g>

                <g className={`map-layer ${isActive('sites') ? 'is-visible' : ''}`}>
                  <g className="site-marker"><path d="M267 240v-25h25" /><text x="207" y="230">الضفة الغربية</text></g>
                  <g className="site-marker"><path d="M740 300v-25h25" /><text x="772" y="286">الضفة الشرقية</text></g>
                  <g className="site-marker"><path d="M332 460v-25h25" /><text x="268" y="487">مسرح العمليات</text></g>
                </g>

                <g className={`map-layer ${isActive('phases') ? 'is-visible' : ''}`}>
                  <g className="phase-ribbon"><rect x="124" y="560" width="210" height="31" rx="2" /><text x="145" y="581">01 الاستعداد</text></g>
                  <g className="phase-ribbon phase-ribbon--active"><rect x="395" y="560" width="210" height="31" rx="2" /><text x="422" y="581">02 العبور</text></g>
                  <g className="phase-ribbon"><rect x="666" y="560" width="210" height="31" rx="2" /><text x="686" y="581">03 تطور العمليات</text></g>
                </g>
                <text className="map-title-label" x="119" y="55">مصر</text>
                <text className="map-title-label" x="777" y="120">سيناء</text>
                <text className="map-coordinate-label" x="108" y="612">ILLUSTRATIVE / NOT TO SCALE</text>
              </svg>
            </div>
          </div>
          <div className="map-station__footer">
            <div className="map-legend" aria-label="مفتاح الخريطة">
              {mapLegend.map((item) => <span key={item.tone}><i className={item.tone} />{item.label}</span>)}
            </div>
            <p>الخريطة تمثيل بصري مبسط لأغراض العرض والتحليل وليست خريطة عسكرية دقيقة.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
