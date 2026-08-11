import { useState } from 'react';
import { Icon } from './Icon';

const navigation = [
  { label: 'الرئيسية', href: '#top' },
  { label: 'المحاور', href: '#topics' },
  { label: 'الخريطة', href: '#strategic-map' },
  { label: 'الخط الزمني', href: '#timeline' },
  { label: 'المصادر', href: '#sources' },
];

export function Navbar({ presentationMode, onTogglePresentation }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-wrap">
      <nav className="navbar shell" aria-label="التنقل الرئيسي">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <span>فرسان أكتوبر</span>
        </a>

        <div className={`nav-links ${isOpen ? 'is-open' : ''}`}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <button className="presentation-button presentation-button--mobile" type="button" onClick={onTogglePresentation}>
            <Icon name="presentation" size={17} />
            {presentationMode ? 'إنهاء العرض' : 'وضع العرض'}
          </button>
        </div>

        <div className="nav-actions">
          <button className="presentation-button" type="button" onClick={onTogglePresentation} aria-pressed={presentationMode}>
            <Icon name="presentation" size={17} />
            <span>{presentationMode ? 'إنهاء العرض' : 'وضع العرض'}</span>
          </button>
          <button
            className="menu-button"
            type="button"
            aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <Icon name={isOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>
    </header>
  );
}
