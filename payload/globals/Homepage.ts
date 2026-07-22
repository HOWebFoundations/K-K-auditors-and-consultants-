import type { GlobalConfig } from 'payload';
import { isEditor } from '../access';
import { stringList } from '../fields';

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
  admin: {
    group: 'Global Settings',
    description:
      'The wording on the home page — the headline, the 20+/25+/2012 stats, the method steps, the “Why K&K” cards and the call-to-action.',
  },
  access: { read: () => true, update: isEditor },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            { name: 'heroTitle', type: 'textarea', localized: true },
            { name: 'heroSubtitle', type: 'textarea', localized: true },
            stringList('heroBadges', { label: 'Hero badges' }),
            { name: 'heroImage', type: 'upload', relationTo: 'media' },
            {
              name: 'heroVideo',
              type: 'upload',
              relationTo: 'media',
              admin: { description: 'Optional background video for the hero.' },
            },
          ],
        },
        {
          label: 'Stats',
          fields: [
            {
              name: 'stats',
              type: 'array',
              localized: true,
              maxRows: 3,
              labels: { singular: 'Stat', plural: 'Stats' },
              fields: [
                { name: 'num', type: 'text' },
                { name: 'label', type: 'text' },
              ],
            },
          ],
        },
        {
          label: 'Sections',
          fields: [
            { name: 'aboutTitle', type: 'text', localized: true },
            { name: 'aboutEyebrow', type: 'text', localized: true },
            stringList('aboutBody', { label: 'About body' }),
            { name: 'processTitle', type: 'text', localized: true },
            { name: 'processSubtitle', type: 'textarea', localized: true },
            {
              name: 'process',
              type: 'array',
              localized: true,
              labels: { singular: 'Step', plural: 'Method steps' },
              fields: [
                { name: 'title', type: 'text' },
                { name: 'body', type: 'textarea' },
              ],
            },
            { name: 'whyTitle', type: 'text', localized: true },
            { name: 'whySubtitle', type: 'textarea', localized: true },
            {
              name: 'why',
              type: 'array',
              localized: true,
              labels: { singular: 'Card', plural: 'Why K&K cards' },
              fields: [
                { name: 'title', type: 'text' },
                { name: 'body', type: 'textarea' },
              ],
            },
            { name: 'ctaTitle', type: 'text', localized: true },
            { name: 'ctaBody', type: 'textarea', localized: true },
          ],
        },
      ],
    },
  ],
};
