import { Reveal } from './Reveal';

export function SectionHeading({ eyebrow, title, text, marker, align = 'right' }) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      <div className="eyebrow-line">
        {marker && <span className="section-marker">{marker}</span>}
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}
