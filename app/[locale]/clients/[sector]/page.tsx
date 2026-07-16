import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { locales, Locale, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { href } from '@/lib/nav';
import { site } from '@/lib/site';
import { PageHero } from '@/components/blocks';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { IconArrow, sectorIcon } from '@/components/icons';
import en from '@/content/en';

// Each sector gets an editorial photograph from the existing library.
const sectorImg: Record<string, string> = {
  'manufacturing-industry': '/images/finance-data.jpg',
  'real-estate-construction': '/images/building-light.jpg',
  'healthcare-pharma': '/images/finance-review.jpg',
  'not-for-profit-ngo': '/images/team-office.jpg',
  'financial-services': '/images/finance-desk.jpg',
  'hospitality-entertainment': '/images/interior-lobby.jpg',
  'trade-distribution': '/images/tax-still.jpg',
  'holdings-offshore': '/images/tax-compliance.jpg',
};

export function generateStaticParams() {
  const out: { locale: string; sector: string }[] = [];
  for (const locale of locales) {
    for (const s of en.clients.sectors) out.push({ locale, sector: s.slug });
  }
  return out;
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; sector: string };
}): Metadata {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  const s = d.clients.sectors.find((x) => x.slug === params.sector);
  if (!s) return {};
  return { title: `${s.title} | ${d.nav.clients}`, description: s.body };
}

export default function SectorDetail({
  params,
}: {
  params: { locale: string; sector: string };
}) {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  const c = d.clients;
  const s = c.sectors.find((x) => x.slug === params.sector);
  if (!s) notFound();

  const others = c.sectors.filter((x) => x.slug !== s.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: d.common.home, url: `${site.url}/${locale}` },
            { name: d.nav.clients, url: `${site.url}/${locale}/clients` },
            { name: s.title, url: `${site.url}/${locale}/clients/${s.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow={c.sectorIntroKicker}
        title={s.title}
        subtitle={s.body}
        image={sectorImg[s.slug]}
        imageAlt={s.title}
        crumbs={[
          { name: d.common.home, href: href(locale) },
          { name: d.nav.clients, href: href(locale, 'clients') },
          { name: s.title },
        ]}
      />

      <section className="section">
        <div className="container grid-sidebar">
          <div className="prose">
            {s.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <h2>{c.sectorOfferingsTitle}</h2>
            <ul className="ticks">
              {s.offerings.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>

            <h2>{c.sectorConsiderationsTitle}</h2>
            <ul className="ticks">
              {s.considerations.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <aside className="sticky-side" style={{ position: 'sticky', top: 96, display: 'grid', gap: 20 }}>
            <div className="card">
              <div className="card-icon">{sectorIcon(s.icon)}</div>
              <h3 style={{ fontSize: '1.15rem' }}>{s.title}</h3>
              <p className="muted">{s.body}</p>
            </div>
            <div className="card" style={{ background: 'var(--navy-900)', color: '#dbe4f2', borderColor: 'transparent' }}>
              <h3 style={{ color: '#fff' }}>{d.common.needHelp}</h3>
              <p style={{ color: '#c3cee2' }}>{d.common.needHelpBody}</p>
              <Link className="btn btn-gold mt-1" href={href(locale, 'contact')} style={{ width: '100%' }}>
                {d.common.bookConsultation}
                <IconArrow className="arrow" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Other sectors */}
      <section className="section bg-soft">
        <div className="container">
          <h2 className="h2">{c.sectorRelatedTitle}</h2>
          <div className="grid grid-3 mt-3">
            {others.map((o) => (
              <Link key={o.slug} href={href(locale, `clients/${o.slug}`)} className="card card-hover">
                <div className="card-icon">{sectorIcon(o.icon)}</div>
                <h3 style={{ fontSize: '1.15rem' }}>{o.title}</h3>
                <p className="muted">{o.body}</p>
                <span className="card-link">{c.sectorExploreLabel}<IconArrow className="arrow" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
