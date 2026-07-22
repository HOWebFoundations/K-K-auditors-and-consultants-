import type { CollectionConfig } from 'payload';
import { isEditor, publishedOrStaff } from '../access';
import { slugField } from '../fields';

/**
 * Insights — the time-sensitive circular briefings the partners publish most.
 * Drafts are enabled (they can save work in progress), and both partners
 * publish directly with no approval gate (client default). Every text field is
 * localized EN/AR/FR with EN-first fallback set globally.
 */
export const Insights: CollectionConfig = {
  slug: 'insights',
  labels: { singular: 'Insight', plural: 'Insights' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'date', '_status'],
    group: 'Website Content',
    description:
      'News and circular briefings. Click “Create New”, write it in English, add Arabic/French if you like, then “Publish”.',
  },
  versions: { drafts: true },
  access: {
    read: publishedOrStaff,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    slugField('title'),
    {
      name: 'category',
      type: 'select',
      required: true,
      options: ['Budget', 'NSSF', 'Tax', 'VAT', 'Payroll', 'Advisory', 'Audit'].map((v) => ({
        label: v,
        value: v,
      })),
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: { position: 'sidebar', date: { pickerAppearance: 'dayOnly' } },
    },
    { name: 'excerpt', type: 'textarea', required: true, localized: true },
    {
      name: 'cover',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Cover image (optional).' },
    },
    { name: 'body', type: 'richText', localized: true },
    {
      type: 'collapsible',
      label: 'SEO',
      admin: { initCollapsed: true },
      fields: [
        { name: 'seoTitle', type: 'text', localized: true },
        { name: 'seoDescription', type: 'textarea', localized: true },
      ],
    },
  ],
};
