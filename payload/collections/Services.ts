import type { CollectionConfig } from 'payload';
import { isEditor, publishedOrStaff } from '../access';
import { slugField, stringList } from '../fields';

export const Services: CollectionConfig = {
  slug: 'services',
  labels: { singular: 'Service', plural: 'Services' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', '_status'],
    group: 'Content',
    description: 'The firm’s service lines. Drag to reorder with the "order" field.',
  },
  versions: { drafts: true },
  access: { read: publishedOrStaff, create: isEditor, update: isEditor, delete: isEditor },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    slugField('title'),
    {
      name: 'icon',
      type: 'text',
      admin: { position: 'sidebar', description: 'Icon key used by the site (e.g. shield, scale).' },
    },
    { name: 'order', type: 'number', admin: { position: 'sidebar' }, defaultValue: 0 },
    { name: 'tagline', type: 'text', localized: true },
    { name: 'summary', type: 'textarea', localized: true },
    stringList('intro', { label: 'Intro paragraphs' }),
    stringList('includes', { label: 'What it includes' }),
    {
      name: 'process',
      type: 'array',
      localized: true,
      labels: { singular: 'Step', plural: 'Process steps' },
      fields: [
        { name: 'title', type: 'text' },
        { name: 'body', type: 'textarea' },
      ],
    },
    stringList('forWho', { label: 'Who it is for' }),
    stringList('deliverables', { label: 'Deliverables' }),
    {
      name: 'faq',
      type: 'array',
      localized: true,
      labels: { singular: 'FAQ', plural: 'FAQs' },
      fields: [
        { name: 'q', type: 'text' },
        { name: 'a', type: 'textarea' },
      ],
    },
  ],
};
