import type { CollectionConfig } from 'payload';
import { isEditor, publishedOrStaff } from '../access';
import { slugField, stringList } from '../fields';

/** The 8 headline client sectors (cards on the Clients page). */
export const Sectors: CollectionConfig = {
  slug: 'sectors',
  labels: { singular: 'Sector', plural: 'Sectors' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', '_status'],
    group: 'Website Content',
    description: 'The 8 headline client sectors shown as cards on the Clients page.',
  },
  versions: { drafts: true },
  access: { read: publishedOrStaff, create: isEditor, update: isEditor, delete: isEditor },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    slugField('title'),
    { name: 'icon', type: 'text', admin: { position: 'sidebar' } },
    { name: 'order', type: 'number', admin: { position: 'sidebar' }, defaultValue: 0 },
    { name: 'body', type: 'textarea', localized: true, admin: { description: 'Short card blurb.' } },
    stringList('intro', { label: 'Intro paragraphs' }),
    stringList('offerings', { label: 'What we do for this sector' }),
    stringList('considerations', { label: 'Sector considerations' }),
  ],
};
