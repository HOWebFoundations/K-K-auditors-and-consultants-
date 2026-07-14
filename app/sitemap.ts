import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { site } from '@/lib/site';
import en from '@/content/en';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['', 'about', 'services', 'resources', 'clients', 'insights', 'contact', 'careers', 'privacy'];
  const dynamicPaths = [
    ...en.services.items.map((s) => `services/${s.slug}`),
    ...en.resources.items.map((r) => `resources/${r.slug}`),
    ...en.insights.posts.map((p) => `insights/${p.slug}`),
  ];
  const allPaths = [...staticPaths, ...dynamicPaths];

  const entries: MetadataRoute.Sitemap = [];
  for (const path of allPaths) {
    const languages: Record<string, string> = {};
    for (const l of locales) {
      languages[l] = `${site.url}/${l}${path ? `/${path}` : ''}`;
    }
    entries.push({
      url: `${site.url}/en${path ? `/${path}` : ''}`,
      lastModified: new Date('2026-07-14'),
      changeFrequency: path === '' || path === 'insights' ? 'weekly' : 'monthly',
      priority: path === '' ? 1 : path.includes('/') ? 0.6 : 0.8,
      alternates: { languages },
    });
  }
  return entries;
}
