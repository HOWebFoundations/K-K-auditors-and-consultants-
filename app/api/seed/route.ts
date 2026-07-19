/**
 * One-shot content migration: loads the existing content/{en,ar,fr}.ts
 * dictionaries into Payload (collections + globals), in all three locales.
 * Runs inside the Next runtime so it avoids the standalone-CLI ESM issue.
 *
 * Guarded by ?key=<PAYLOAD_SECRET>. Intended to be run once (idempotent —
 * upserts by slug/name). Safe to delete after the real build cuts content
 * reads over to Payload.
 */
import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@payload-config';
import en from '@/content/en';
import ar from '@/content/ar';
import fr from '@/content/fr';
import { site } from '@/lib/site';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 300;

type Dict = typeof en;

/** [str, str] -> [{ value }] rows for our stringList arrays. */
const L = (arr?: string[]) => (arr || []).map((value) => ({ value }));

/** paragraphs -> a minimal Lexical editor state. */
function lexical(paragraphs?: string[], rtl = false) {
  const dir = rtl ? 'rtl' : 'ltr';
  return {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      direction: dir,
      children: (paragraphs || []).map((text) => ({
        type: 'paragraph',
        version: 1,
        format: '',
        indent: 0,
        direction: dir,
        children: text
          ? [{ type: 'text', text, version: 1, format: 0, style: '', mode: 'normal', detail: 0 }]
          : [],
      })),
    },
  };
}

const CATS = ['Budget', 'NSSF', 'Tax', 'VAT', 'Payroll', 'Advisory', 'Audit'];
const cat = (c: string) => (CATS.includes(c) ? c : 'Advisory');
const isoDate = (s: string) => {
  const d = new Date(s);
  return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
};

export async function GET(req: Request) {
  const key = new URL(req.url).searchParams.get('key');
  if (!process.env.PAYLOAD_SECRET || key !== process.env.PAYLOAD_SECRET) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }
  // In production, refuse unless explicitly unlocked — so a leaked secret alone
  // cannot re-seed the live database. Set ALLOW_SEED=true for the one-time run.
  if (process.env.NODE_ENV === 'production' && process.env.ALLOW_SEED !== 'true') {
    return NextResponse.json({ error: 'seeding disabled in production' }, { status: 403 });
  }

  // ?user=0 skips creating the admin account (so the first user is created
  // through the live /admin screen — no password transmitted).
  const makeUser = new URL(req.url).searchParams.get('user') !== '0';

  const payload = await getPayload({ config });
  const log: string[] = [];

  // --- 1) First admin user (idempotent) -----------------------------------
  const users = await payload.count({ collection: 'users' });
  if (makeUser && users.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: {
        name: 'HOWF Admin',
        email: 'admin@thehowf.com',
        password: process.env.SEED_ADMIN_PW || 'ChangeMe!12345',
        role: 'admin',
      },
    });
    log.push('user: created admin@thehowf.com');
  }

  // upsert a collection doc by a match field (slug or name), en first then ar/fr
  async function upsert(
    collection: string,
    matchField: string,
    matchValue: string,
    enData: Record<string, unknown>,
    arData: Record<string, unknown>,
    frData: Record<string, unknown>,
  ) {
    const found = await payload.find({
      collection: collection as never,
      where: { [matchField]: { equals: matchValue } } as never,
      locale: 'en',
      draft: true,
      depth: 0,
      limit: 1,
    });
    let id: string | number;
    if (found.docs.length) {
      id = found.docs[0].id as string | number;
      await payload.update({ collection: collection as never, id, locale: 'en', data: { ...enData, _status: 'published' } as never });
    } else {
      const created = await payload.create({
        collection: collection as never,
        locale: 'en',
        data: { ...enData, [matchField]: matchValue, _status: 'published' } as never,
      });
      id = created.id as string | number;
    }
    await payload.update({ collection: collection as never, id, locale: 'ar', data: { ...arData, _status: 'published' } as never });
    await payload.update({ collection: collection as never, id, locale: 'fr', data: { ...frData, _status: 'published' } as never });
    return id;
  }

  const pick = (d: Dict) => d;

  // --- 2) Insights ---------------------------------------------------------
  {
    const byslug = (d: Dict, slug: string) => d.insights?.posts?.find((p) => p.slug === slug);
    let n = 0;
    for (const p of en.insights.posts) {
      const a = byslug(ar as unknown as Dict, p.slug);
      const f = byslug(fr as unknown as Dict, p.slug);
      await upsert(
        'insights',
        'slug',
        p.slug,
        { title: p.title, category: cat(p.category), date: isoDate(p.date), excerpt: p.excerpt, body: lexical(p.body) },
        { title: a?.title, excerpt: a?.excerpt, body: lexical(a?.body, true) },
        { title: f?.title, excerpt: f?.excerpt, body: lexical(f?.body) },
      );
      n++;
    }
    log.push(`insights: ${n}`);
  }

  // --- 3) Resources --------------------------------------------------------
  {
    const mapSections = (secs: (typeof en.resources.items)[number]['sections']) =>
      (secs || []).map((s) => ({ h: s.h, body: L(s.body), list: L(s.list), note: s.note, table: s.table }));
    const bySlug = (d: Dict, slug: string) => d.resources?.items?.find((r) => r.slug === slug);
    let n = 0;
    for (const r of en.resources.items) {
      const a = bySlug(ar as unknown as Dict, r.slug);
      const f = bySlug(fr as unknown as Dict, r.slug);
      await upsert(
        'resources',
        'slug',
        r.slug,
        { title: r.title, category: r.category, summary: r.summary, answer: r.answer, sections: mapSections(r.sections), faq: r.faq, sources: L(r.sources) },
        { title: a?.title, category: a?.category, summary: a?.summary, answer: a?.answer, sections: a ? mapSections(a.sections) : undefined, faq: a?.faq, sources: L(a?.sources) },
        { title: f?.title, category: f?.category, summary: f?.summary, answer: f?.answer, sections: f ? mapSections(f.sections) : undefined, faq: f?.faq, sources: L(f?.sources) },
      );
      n++;
    }
    log.push(`resources: ${n}`);
  }

  // --- 4) Services ---------------------------------------------------------
  {
    const bySlug = (d: Dict, slug: string) => d.services?.items?.find((s) => s.slug === slug);
    let n = 0;
    en.services.items.forEach(() => {});
    for (let i = 0; i < en.services.items.length; i++) {
      const s = en.services.items[i];
      const a = bySlug(ar as unknown as Dict, s.slug);
      const f = bySlug(fr as unknown as Dict, s.slug);
      await upsert(
        'services',
        'slug',
        s.slug,
        { title: s.title, icon: s.icon, order: i, tagline: s.tagline, summary: s.summary, intro: L(s.intro), includes: L(s.includes), process: s.process, forWho: L(s.forWho), deliverables: L(s.deliverables), faq: s.faq },
        { title: a?.title, tagline: a?.tagline, summary: a?.summary, intro: L(a?.intro), includes: L(a?.includes), process: a?.process, forWho: L(a?.forWho), deliverables: L(a?.deliverables), faq: a?.faq },
        { title: f?.title, tagline: f?.tagline, summary: f?.summary, intro: L(f?.intro), includes: L(f?.includes), process: f?.process, forWho: L(f?.forWho), deliverables: L(f?.deliverables), faq: f?.faq },
      );
      n++;
    }
    log.push(`services: ${n}`);
  }

  // --- 5) Industries -------------------------------------------------------
  {
    const bySlug = (d: Dict, slug: string) => d.clients?.industries?.find((x) => x.slug === slug);
    let n = 0;
    for (const x of en.clients.industries) {
      const a = bySlug(ar as unknown as Dict, x.slug);
      const f = bySlug(fr as unknown as Dict, x.slug);
      await upsert(
        'industries',
        'slug',
        x.slug,
        { title: x.title, intro: L(x.intro), offerings: L(x.offerings), considerations: L(x.considerations) },
        { title: a?.title, intro: L(a?.intro), offerings: L(a?.offerings), considerations: L(a?.considerations) },
        { title: f?.title, intro: L(f?.intro), offerings: L(f?.offerings), considerations: L(f?.considerations) },
      );
      n++;
    }
    log.push(`industries: ${n}`);
  }

  // --- 6) Sectors ----------------------------------------------------------
  {
    const bySlug = (d: Dict, slug: string) => d.clients?.sectors?.find((x) => x.slug === slug);
    let n = 0;
    for (let i = 0; i < en.clients.sectors.length; i++) {
      const x = en.clients.sectors[i];
      const a = bySlug(ar as unknown as Dict, x.slug);
      const f = bySlug(fr as unknown as Dict, x.slug);
      await upsert(
        'sectors',
        'slug',
        x.slug,
        { title: x.title, icon: x.icon, order: i, body: x.body, intro: L(x.intro), offerings: L(x.offerings), considerations: L(x.considerations) },
        { title: a?.title, body: a?.body, intro: L(a?.intro), offerings: L(a?.offerings), considerations: L(a?.considerations) },
        { title: f?.title, body: f?.body, intro: L(f?.intro), offerings: L(f?.offerings), considerations: L(f?.considerations) },
      );
      n++;
    }
    log.push(`sectors: ${n}`);
  }

  // --- 7) Partners ---------------------------------------------------------
  {
    const byName = (d: Dict, name: string) => d.about?.partners?.find((p) => p.name === name);
    let n = 0;
    for (let i = 0; i < en.about.partners.length; i++) {
      const p = en.about.partners[i];
      const a = byName(ar as unknown as Dict, p.name);
      const f = byName(fr as unknown as Dict, p.name);
      await upsert(
        'partners',
        'name',
        p.name,
        { initials: p.initials, order: i, role: p.role, designation: p.designation, bio: p.bio, education: p.education, credentials: L(p.credentials), memberships: L(p.memberships) },
        { role: a?.role, designation: a?.designation, bio: a?.bio, education: a?.education, credentials: L(a?.credentials), memberships: L(a?.memberships) },
        { role: f?.role, designation: f?.designation, bio: f?.bio, education: f?.education, credentials: L(f?.credentials), memberships: L(f?.memberships) },
      );
      n++;
    }
    log.push(`partners: ${n}`);
  }

  // --- 8) Globals ----------------------------------------------------------
  async function global(slug: string, enData: Record<string, unknown>, arData: Record<string, unknown>, frData: Record<string, unknown>) {
    await payload.updateGlobal({ slug: slug as never, locale: 'en', data: enData as never });
    await payload.updateGlobal({ slug: slug as never, locale: 'ar', data: arData as never });
    await payload.updateGlobal({ slug: slug as never, locale: 'fr', data: frData as never });
  }

  await global(
    'site-settings',
    {
      name: en.meta.name, legalName: en.meta.legalName, tagline: en.meta.tagline, description: en.meta.description,
      addressLine1: site.address.line1, addressLine2: site.address.line2, city: site.address.city, country: site.address.country, poBox: site.address.poBox,
      phone: site.phone, phoneSecondary: site.phoneSecondary, mobile: site.mobile, email: site.email, hours: site.hours,
      mapUrl: site.mapShareUrl, facebook: site.social.facebook, linkedin: site.social.linkedin,
      footerDesc: en.footer.desc, footerDisclaimer: en.footer.disclaimer, footerRights: en.footer.rights, builtBy: en.footer.builtBy,
    },
    { tagline: ar.meta?.tagline, description: ar.meta?.description, hours: undefined, footerDesc: ar.footer?.desc, footerDisclaimer: ar.footer?.disclaimer, footerRights: ar.footer?.rights, builtBy: ar.footer?.builtBy },
    { tagline: fr.meta?.tagline, description: fr.meta?.description, hours: undefined, footerDesc: fr.footer?.desc, footerDisclaimer: fr.footer?.disclaimer, footerRights: fr.footer?.rights, builtBy: fr.footer?.builtBy },
  );
  log.push('global: site-settings');

  const homeData = (d: Dict) => ({
    heroTitle: d.hero?.title, heroSubtitle: d.hero?.subtitle, heroBadges: L(d.hero?.badges),
    stats: d.home?.stats, aboutTitle: d.home?.aboutTitle, aboutEyebrow: d.home?.aboutEyebrow, aboutBody: L(d.home?.aboutBody),
    processTitle: d.home?.processTitle, processSubtitle: d.home?.processSubtitle, process: d.home?.process,
    whyTitle: d.home?.whyTitle, whySubtitle: d.home?.whySubtitle, why: d.home?.why,
    ctaTitle: d.home?.ctaTitle, ctaBody: d.home?.ctaBody,
  });
  await global('homepage', homeData(en), homeData(ar as unknown as Dict), homeData(fr as unknown as Dict));
  log.push('global: homepage');

  const navData = (d: Dict) => ({
    home: d.nav?.home, about: d.nav?.about, services: d.nav?.services, resources: d.nav?.resources,
    clients: d.nav?.clients, insights: d.nav?.insights, careers: d.nav?.careers, contact: d.nav?.contact,
  });
  await global('navigation', navData(en), navData(ar as unknown as Dict), navData(fr as unknown as Dict));
  log.push('global: navigation');

  return NextResponse.json({ ok: true, log });
}
