import type { GlobalConfig } from 'payload';
import { isEditor } from '../access';

/**
 * Navigation LABELS only. The menu structure itself is fixed in code — editors
 * can rename items, not re-architect the nav.
 */
export const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: 'Navigation labels',
  admin: { group: 'Site' },
  access: { read: () => true, update: isEditor },
  fields: [
    { name: 'home', type: 'text', localized: true },
    { name: 'about', type: 'text', localized: true },
    { name: 'services', type: 'text', localized: true },
    { name: 'resources', type: 'text', localized: true },
    { name: 'clients', type: 'text', localized: true },
    { name: 'insights', type: 'text', localized: true },
    { name: 'careers', type: 'text', localized: true },
    { name: 'contact', type: 'text', localized: true },
  ],
};
