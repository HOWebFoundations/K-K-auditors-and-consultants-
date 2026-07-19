import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { href } from '@/lib/nav';
import { PageHero, CTABand } from '@/components/blocks';
import { iconFor, IconArrow } from '@/components/icons';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  return { title: `${d.services.title}`, description: d.services.subtitle };
}

export default async function ServicesPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={d.services.eyebrow}
        title={d.services.title}
        subtitle={d.services.subtitle}
        crumbs={[{ name: d.common.home, href: href(locale) }, { name: d.nav.services }]}
        image="/images/boardroom.jpg"
        imageAlt={d.services.title}
      />
      <section className="section">
        <div className="container grid grid-2">
          {d.services.items.map((s) => (
            <div className="card card-hover" key={s.slug}>
              <div className="card-icon">{iconFor(s.icon)}</div>
              <h2 style={{ fontSize: '1.4rem' }}>{s.title}</h2>
              <p style={{ fontWeight: 600, color: 'var(--navy)' }}>{s.tagline}</p>
              <p className="muted">{s.summary}</p>
              <ul className="ticks mt-1">
                {s.includes.slice(0, 4).map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <Link className="btn btn-ghost mt-3" href={href(locale, `services/${s.slug}`)}>
                {d.common.exploreService}
                <IconArrow className="arrow" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <CTABand
        title={d.home.ctaTitle}
        body={d.home.ctaBody}
        primary={{ label: d.common.requestProposal, href: href(locale, 'contact') }}
      />
    </>
  );
}
