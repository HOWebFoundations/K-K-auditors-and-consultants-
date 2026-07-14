import { Dictionary, DeepPartial } from './types';

// French (Français). Deep-merged over English; anything omitted here falls
// back to English. Structural fields (slug, icon, date, num, initials) are
// kept identical to English so routing and layout stay consistent.
const fr: DeepPartial<Dictionary> = {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    resources: 'Ressources',
    clients: 'Clients',
    insights: 'Actualités',
    contact: 'Contact',
    careers: 'Carrières',
  },
};

export default fr;
