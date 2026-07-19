import type { CollectionConfig } from 'payload';
import { isEditor, publishedOrStaff } from '../access';
import { slugField, stringList } from '../fields';

/** Evergreen "doing business in Lebanon" guides. */
export const Resources: CollectionConfig = {
  slug: 'resources',
  labels: { singular: 'Resource', plural: 'Resources' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', '_status'],
    group: 'Content',
  },
  versions: { drafts: true },
  access: { read: publishedOrStaff, create: isEditor, update: isEditor, delete: isEditor },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    slugField('title'),
    { name: 'category', type: 'text', localized: true },
    { name: 'summary', type: 'textarea', localized: true },
    {
      name: 'answer',
      type: 'textarea',
      localized: true,
      admin: { description: 'Answer-first 2–3 sentence summary (for AI / featured snippets).' },
    },
    {
      name: 'sections',
      type: 'array',
      localized: true,
      labels: { singular: 'Section', plural: 'Sections' },
      fields: [
        { name: 'h', type: 'text', label: 'Heading' },
        stringList('body', { localized: false, label: 'Paragraphs' }),
        stringList('list', { localized: false, label: 'Bulleted list' }),
        { name: 'note', type: 'textarea' },
        { name: 'table', type: 'json', admin: { description: 'Optional { head: [], rows: [[]] }.' } },
      ],
    },
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
    stringList('sources', { localized: true, label: 'Sources' }),
  ],
};
