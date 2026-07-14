import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { locales, Locale, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { href } from '@/lib/nav';
import { site } from '@/lib/site';
import { PageHero } from '@/components/blocks';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import { IconArrow } from '@/components/icons';
import en from '@/content/en';

const serviceImg: Record<string, string> = {
  'audit-assurance': '/images/finance-audit.jpg',
  'tax-planning': '/images/finance-signing.jpg',
  accounting: '/images/finance-data.jpg',
  'business-advisory': '/images/people-advisory.jpg',
};

export function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const s of en.services.items) out.push({ locale, slug: s.slug });
  }
  return out;
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Metadata {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  const s = d.services.items.find((x) => x.slug === params.slug);
  if (!s) return {};
  return { title: `${s.title} — ${d.nav.services}`, description: s.summary };
}

export default function ServiceDetail({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  const s = d.services.items.find((x) => x.slug === params.slug);
  if (!s) notFound();

  const others = d.services.items.filter((x) => x.slug !== s.slug);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(s, locale),
          faqSchema(s.faq),
          breadcrumbSchema([
            { name: d.common.home, url: `${site.url}/${locale}` },
            { name: d.nav.services, url: `${site.url}/${locale}/services` },
            { name: s.title, url: `${site.url}/${locale}/services/${s.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow={s.tagline}
        title={s.title}
        image={serviceImg[s.slug]}
        imageAlt={s.title}
        crumbs={[
          { name: d.common.home, href: href(locale) },
          { name: d.nav.services, href: href(locale, 'services') },
          { name: s.title },
        ]}
      />

      <section className="section">
        <div className="container grid-sidebar">
          <div className="prose">
            {s.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <h2>{d.services.includesTitle}</h2>
            <ul className="ticks">
              {s.includes.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>

            <h2>{d.services.processTitle}</h2>
            <div className="grid" style={{ gap: 16 }}>
              {s.process.map((step, i) => (
                <div className="feature" key={step.title}>
                  <div className="card-icon" style={{ fontWeight: 800, fontSize: '1.1rem' }}>{i + 1}</div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem' }}>{step.title}</h3>
                    <p className="muted">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>{d.common.faqTitle}</h2>
            <div className="faq">
              {s.faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <div className="faq-body">{f.a}</div>
                </details>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="sticky-side" style={{ position: 'sticky', top: 96, display: 'grid', gap: 20 }}>
            <div className="card">
              <h3 style={{ fontSize: '1.05rem' }}>{d.services.forWhoTitle}</h3>
              <ul className="ticks mt-1">
                {s.forWho.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.05rem' }}>{d.services.deliverablesTitle}</h3>
              <ul className="ticks mt-1">
                {s.deliverables.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
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

      {/* Other services */}
      <section className="section bg-soft">
        <div className="container">
          <h2 className="h2">{d.nav.services}</h2>
          <div className="grid grid-3 mt-3">
            {others.map((o) => (
              <Link key={o.slug} href={href(locale, `services/${o.slug}`)} className="card card-hover">
                <h3 style={{ fontSize: '1.15rem' }}>{o.title}</h3>
                <p className="muted">{o.summary}</p>
                <span className="card-link">{d.common.exploreService}<IconArrow className="arrow" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
