import type { CollectionConfig } from 'payload';
import { isEditor } from '../access';
import { stringList } from '../fields';

/** Leadership profiles shown on the About page. */
export const Partners: CollectionConfig = {
  slug: 'partners',
  labels: { singular: 'Partner', plural: 'Leadership' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'order'],
    group: 'Content',
  },
  access: { read: () => true, create: isEditor, update: isEditor, delete: isEditor },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'order', type: 'number', admin: { position: 'sidebar' }, defaultValue: 0 },
    { name: 'photo', type: 'upload', relationTo: 'media' },
    { name: 'initials', type: 'text', admin: { position: 'sidebar' } },
    { name: 'role', type: 'text', localized: true },
    { name: 'designation', type: 'text', localized: true },
    { name: 'bio', type: 'textarea', localized: true },
    { name: 'education', type: 'text', localized: true },
    stringList('credentials', { label: 'Credentials' }),
    stringList('memberships', { label: 'Memberships' }),
  ],
};
