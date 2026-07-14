import { Dictionary, DeepPartial } from './types';

// Arabic (العربية) — RTL. Deep-merged over English; anything omitted here
// falls back to English. Structural fields (slug, icon, date, num, initials)
// are kept identical to English so routing and layout stay consistent.
const ar: DeepPartial<Dictionary> = {
  nav: {
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    resources: 'موارد',
    clients: 'عملاؤنا',
    insights: 'مستجدات',
    contact: 'تواصل معنا',
    careers: 'الوظائف',
  },
};

export default ar;
