import type { CollectionConfig } from 'payload';
import { isEditor, publishedOrStaff } from '../access';
import { slugField, stringList } from '../fields';

/** The 20 "industries we serve" detail records. */
export const Industries: CollectionConfig = {
  slug: 'industries',
  labels: { singular: 'Industry', plural: 'Industries' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', '_status'],
    group: 'Website Content',
    description: 'The 20 industries you serve, each with its own page. Edit the text for any of them here.',
  },
  versions: { drafts: true },
  access: { read: publishedOrStaff, create: isEditor, update: isEditor, delete: isEditor },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    slugField('title'),
    { name: 'image', type: 'upload', relationTo: 'media' },
    stringList('intro', { label: 'Intro paragraphs' }),
    stringList('offerings', { label: 'What we do for this sector' }),
    stringList('considerations', { label: 'Sector considerations' }),
  ],
};
