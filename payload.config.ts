import path from 'path';
import { fileURLToPath } from 'url';
import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import sharp from 'sharp';

import { Users } from './payload/collections/Users';
import { Media } from './payload/collections/Media';
import { Insights } from './payload/collections/Insights';
import { Resources } from './payload/collections/Resources';
import { Services } from './payload/collections/Services';
import { Industries } from './payload/collections/Industries';
import { Sectors } from './payload/collections/Sectors';
import { Partners } from './payload/collections/Partners';
import { SiteSettings } from './payload/globals/SiteSettings';
import { Homepage } from './payload/globals/Homepage';
import { Navigation } from './payload/globals/Navigation';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Production uses Postgres (Neon / Vercel Postgres). With no DATABASE_URI, or a
// file: URL, we fall back to a local SQLite file so the dashboard runs on a dev
// machine with zero infrastructure. The schema is identical either way.
const uri = process.env.DATABASE_URI || 'file:./cms-local.db';
const usePostgres = uri.startsWith('postgres');

// Vercel Blob is only wired when its token is present (production). Locally,
// media is written to disk (see Media collection) and this plugin is a no-op.
const blobToken = process.env.BLOB_READ_WRITE_TOKEN;

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' — K&K Auditors CMS',
    },
  },
  editor: lexicalEditor(),
  collections: [Users, Media, Insights, Resources, Services, Industries, Sectors, Partners],
  globals: [SiteSettings, Homepage, Navigation],
  localization: {
    locales: [
      { label: 'English', code: 'en' },
      { label: 'العربية', code: 'ar', rtl: true },
      { label: 'Français', code: 'fr' },
    ],
    defaultLocale: 'en',
    fallback: true, // EN-first: AR/FR fall back to English until translated.
  },
  secret: process.env.PAYLOAD_SECRET || 'DEV_INSECURE_SECRET_set_PAYLOAD_SECRET_in_env',
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db: usePostgres
    ? postgresAdapter({ pool: { connectionString: uri } })
    : sqliteAdapter({ client: { url: uri } }),
  sharp,
  telemetry: false,
  plugins: blobToken
    ? [
        vercelBlobStorage({
          collections: { media: true },
          token: blobToken,
        }),
      ]
    : [],
});
