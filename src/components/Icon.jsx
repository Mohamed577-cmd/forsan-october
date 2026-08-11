const paths = {
  arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  external: <path d="M14 5h5v5m0-5-8 8M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />,
  book: <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H20v16H7.5A2.5 2.5 0 0 0 5 21.5v-16Zm0 0V21.5M12.5 7h4" />,
  map: <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Zm6-3v15m6-12v15" />,
  timeline: <path d="M5 5v14M19 5v14M5 12h14M9 8h1m4 0h1m-6 8h1m4 0h1" />,
  target: <path d="M12 3v3m0 12v3M3 12h3m12 0h3M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 3v2" />,
  presentation: <path d="M4 4h16v12H4V4Zm8 12v4m-4 0h8" />,
  chevron: <path d="m8 10 4 4 4-4" />,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5m0-8v.01" /></>,
};

export function Icon({ name, size = 20, strokeWidth = 1.7, className = '' }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
