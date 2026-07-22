import path from 'path';
import type { CollectionConfig } from 'payload';
import { isEditor } from '../access';

/**
 * The single media library. Every image and video on the site lives here.
 * Locally, files are written under public/cms-media so previews are servable;
 * in production the Vercel Blob storage plugin (see payload.config.ts) takes
 * over transparently and files go to Blob instead.
 */
export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Media', plural: 'Media library' },
  admin: {
    group: 'Website Content',
    description: 'Every image and video used on the site lives here.',
  },
  access: {
    read: () => true,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  upload: {
    staticDir: path.join(process.cwd(), 'public', 'cms-media'),
    mimeTypes: ['image/*', 'video/*'],
    imageSizes: [
      { name: 'thumbnail', width: 400 },
      { name: 'card', width: 900 },
      { name: 'hero', width: 1800 },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      localized: true,
      admin: { description: 'Describe the image for screen readers and SEO. Required.' },
    },
    {
      name: 'credit',
      type: 'text',
      admin: { description: 'Optional photographer / source credit.' },
    },
  ],
};
