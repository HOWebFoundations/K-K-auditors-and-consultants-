import { SVGProps, ReactElement } from 'react';

type IP = SVGProps<SVGSVGElement>;

const base = (props: IP) => ({
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...props,
});

export const IconAudit = (p: IP) => (
  <svg {...base(p)}>
    <path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4" />
    <path d="M8 12l2.5 2.5L15 10" />
    <path d="M14 3l7 7" />
    <path d="M14 3v5h5" />
  </svg>
);

export const IconTax = (p: IP) => (
  <svg {...base(p)}>
    <path d="M9 7h6M9 11h6M9 15h4" />
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M15 3v4M9 3v4" />
  </svg>
);

export const IconAccounting = (p: IP) => (
  <svg {...base(p)}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2" />
  </svg>
);

export const IconAdvisory = (p: IP) => (
  <svg {...base(p)}>
    <path d="M3 3v18h18" />
    <path d="M7 14l3-3 3 3 5-6" />
    <path d="M18 8h3v3" />
  </svg>
);

export const IconPhone = (p: IP) => (
  <svg {...base(p)}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const IconMail = (p: IP) => (
  <svg {...base(p)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

export const IconMap = (p: IP) => (
  <svg {...base(p)}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconClock = (p: IP) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconArrow = (p: IP) => (
  <svg {...base(p)} width={18} height={18}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconGlobe = (p: IP) => (
  <svg {...base(p)} width={18} height={18}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
  </svg>
);

export const IconMenu = (p: IP) => (
  <svg {...base(p)}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const IconCheck = (p: IP) => (
  <svg {...base(p)} strokeWidth={2.4}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const IconShield = (p: IP) => (
  <svg {...base(p)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconGlobe2 = (p: IP) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
  </svg>
);

export const IconScale = (p: IP) => (
  <svg {...base(p)}>
    <path d="M12 3v18M7 21h10" />
    <path d="M12 6 5 8l-2 6a4 4 0 0 0 8 0L9 8m8-2 2 6a4 4 0 0 1-8 0l2-6" />
  </svg>
);

export const IconBook = (p: IP) => (
  <svg {...base(p)}>
    <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
    <path d="M4 5v14" />
  </svg>
);

export const IconWhatsApp = (p: IP) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...p}>
    <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.6.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.9-2.1-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4Z" />
    <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
  </svg>
);

export const IconFacebook = (p: IP) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} {...p}>
    <path d="M14 9V7c0-.8.2-1 1-1h2V3h-3c-2.5 0-4 1.5-4 4v2H8v3h2v9h3v-9h2.5l.5-3H14Z" />
  </svg>
);

export const IconLinkedIn = (p: IP) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} {...p}>
    <path d="M6.94 6.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.9h3.3V21H3.3zM9.2 8.9h3.16v1.65h.05c.44-.8 1.5-1.65 3.1-1.65 3.3 0 3.9 2.1 3.9 4.9V21h-3.3v-5.4c0-1.3 0-2.9-1.8-2.9s-2.05 1.4-2.05 2.8V21H9.2z" />
  </svg>
);

export const iconFor = (key: string, props?: IP) => {
  switch (key) {
    case 'audit':
      return <IconAudit {...props} />;
    case 'tax':
      return <IconTax {...props} />;
    case 'accounting':
      return <IconAccounting {...props} />;
    case 'advisory':
      return <IconAdvisory {...props} />;
    default:
      return <IconAudit {...props} />;
  }
};

/* ---------- Sector icons ---------- */
export const IconFactory = (p: IP) => (
  <svg {...base(p)}>
    <path d="M3 21V10l5 3.5V10l5 3.5V7h4a1 1 0 0 1 1 1v13z" />
    <path d="M2 21h20" />
    <path d="M8 17h2M13 17h2" />
  </svg>
);
export const IconBuilding = (p: IP) => (
  <svg {...base(p)}>
    <rect x="4" y="3" width="10" height="18" rx="1" />
    <path d="M14 9h6v12" />
    <path d="M7.5 7h1M11 7h1M7.5 11h1M11 11h1M7.5 15h1M11 15h1M17 13h.5M17 17h.5" />
    <path d="M3 21h18" />
  </svg>
);
export const IconHealth = (p: IP) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M12 8v8M8 12h8" />
  </svg>
);
export const IconCommunity = (p: IP) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20a6 6 0 0 1 12 0" />
    <path d="M16 5.2a3 3 0 0 1 0 5.6M21 20a6 6 0 0 0-4.5-5.8" />
  </svg>
);
export const IconBank = (p: IP) => (
  <svg {...base(p)}>
    <path d="M3 10 12 4l9 6" />
    <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8" />
    <path d="M3 21h18M4 10h16" />
  </svg>
);
export const IconHotel = (p: IP) => (
  <svg {...base(p)}>
    <path d="M2 20v-5a2 2 0 0 1 2-2h13a3 3 0 0 1 3 3v4" />
    <path d="M2 16h20" />
    <circle cx="7" cy="10.5" r="1.6" />
    <path d="M2 20v1M22 20v1" />
  </svg>
);
export const IconTruck = (p: IP) => (
  <svg {...base(p)}>
    <path d="M3 6h11v9H3z" />
    <path d="M14 9h4l3 3v3h-2" />
    <path d="M9 15H6" />
    <circle cx="7" cy="17.5" r="1.7" />
    <circle cx="17" cy="17.5" r="1.7" />
  </svg>
);
export const IconLayers = (p: IP) => (
  <svg {...base(p)}>
    <path d="M12 3 3 8l9 5 9-5-9-5Z" />
    <path d="M3 12l9 5 9-5" />
    <path d="M3 16l9 5 9-5" />
  </svg>
);

const SECTOR_ICONS: Record<string, (p: IP) => ReactElement> = {
  manufacturing: IconFactory,
  realestate: IconBuilding,
  health: IconHealth,
  ngo: IconCommunity,
  finance: IconBank,
  hospitality: IconHotel,
  trade: IconTruck,
  holding: IconLayers,
};

export function sectorIcon(key: string, props?: IP) {
  const C = SECTOR_ICONS[key] || IconAdvisory;
  return <C {...props} />;
}
