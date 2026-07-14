import { SVGProps } from 'react';

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
