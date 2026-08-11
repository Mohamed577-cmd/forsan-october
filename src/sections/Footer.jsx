import { Icon } from '../components/Icon';
import { siteMeta } from '../data/topics';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__content">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <h2>فرسان القراءة في نصر أكتوبر</h2>
        </div>
        <div className="footer-details">
          <span>{siteMeta.student}</span><i />
          <span>{siteMeta.school}</span><i />
          <span>تحت إشراف {siteMeta.supervisor}</span>
        </div>
        <div className="footer-bottom">
          <span>بحث مدرسي — 2026</span>
          <a href="#sources">المصادر والمراجع <Icon name="arrow" size={17} /></a>
        </div>
      </div>
    </footer>
  );
}
