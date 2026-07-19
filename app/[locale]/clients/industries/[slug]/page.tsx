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
import { IconArrow } from '@/components/icons';
import en from '@/content/en';

// Each industry has its own dedicated photograph.
const industryImg: Record<string, string> = {
  manufacturing: '/images/ind-manufacturing.jpg',
  'real-estate': '/images/ind-real-estate.jpg',
  healthcare: '/images/ind-healthcare.jpg',
  ngos: '/images/ind-ngos.jpg',
  'professional-services': '/images/ind-professional-services.jpg',
  entertainment: '/images/ind-entertainment.jpg',
  'brokers-dealers': '/images/ind-brokers-dealers.jpg',
  distributors: '/images/ind-distributors.jpg',
  'engineering-design': '/images/ind-engineering-design.jpg',
  'financial-services': '/images/ind-financial-services.jpg',
  franchisees: '/images/ind-franchisees.jpg',
  'holding-companies': '/images/ind-holding-companies.jpg',
  'offshore-companies': '/images/ind-offshore-companies.jpg',
  'hotels-resorts': '/images/ind-hotels-resorts.jpg',
  contractors: '/images/ind-contractors.jpg',
  'retail-trade': '/images/ind-retail-trade.jpg',
  'gas-stations': '/images/ind-gas-stations.jpg',
  pharmaceuticals: '/images/ind-pharmaceuticals.jpg',
  'representation-offices': '/images/ind-representation-offices.jpg',
  'pet-companies': '/images/ind-pet-companies.jpg',
};

export function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const i of en.clients.industries) out.push({ locale, slug: i.slug });
  }
  return out;
}

export async function generateMetadata(
  props: {
    params: Promise<{ locale: string; slug: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  const i = d.clients.industries.find((x) => x.slug === params.slug);
  if (!i) return {};
  return {
    title: `${i.title} | ${d.nav.clients}`,
    description: i.intro[0],
  };
}

export default async function IndustryDetail(
  props: {
    params: Promise<{ locale: string; slug: string }>;
  }
) {
  const params = await props.params;
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  const c = d.clients;
  const ind = c.industries.find((x) => x.slug === params.slug);
  if (!ind) notFound();

  const others = c.industries.filter((x) => x.slug !== ind.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: d.common.home, url: `${site.url}/${locale}` },
            { name: d.nav.clients, url: `${site.url}/${locale}/clients` },
            { name: ind.title, url: `${site.url}/${locale}/clients/industries/${ind.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow={c.industryKicker}
        title={ind.title}
        subtitle={ind.intro[0]}
        image={industryImg[ind.slug] || '/images/advisory.jpg'}
        imageAlt={ind.title}
        crumbs={[
          { name: d.common.home, href: href(locale) },
          { name: d.nav.clients, href: href(locale, 'clients') },
          { name: ind.title },
        ]}
      />

      <section className="section">
        <div className="container grid-sidebar">
          <div className="prose">
            {ind.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <h2>{c.sectorOfferingsTitle}</h2>
            <ul className="ticks">
              {ind.offerings.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>

            <h2>{c.sectorConsiderationsTitle}</h2>
            <ul className="ticks">
              {ind.considerations.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <aside className="sticky-side" style={{ position: 'sticky', top: 96, display: 'grid', gap: 20 }}>
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

      {/* Other industries */}
      <section className="section bg-soft">
        <div className="container">
          <h2 className="h2">{c.industriesTitle}</h2>
          <div className="flex wrap gap-sm mt-3">
            {others.map((o) => (
              <Link key={o.slug} href={href(locale, `clients/industries/${o.slug}`)} className="chip chip-link">
                {o.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
