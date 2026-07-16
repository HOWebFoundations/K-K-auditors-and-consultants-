import type { Metadata } from 'next';
import { Locale, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { href } from '@/lib/nav';
import Link from 'next/link';
import { PageHero, SectionHeader, CTABand } from '@/components/blocks';
import Reveal from '@/components/Reveal';
import { sectorIcon, IconArrow } from '@/components/icons';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  return { title: d.clients.title, description: d.clients.subtitle };
}

export default function ClientsPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  const c = d.clients;

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        subtitle={c.subtitle}
        crumbs={[{ name: d.common.home, href: href(locale) }, { name: d.nav.clients }]}
        image="/images/advisory.jpg"
        imageAlt={c.title}
      />

      <section className="section">
        <div className="container grid grid-2" style={{ gap: 48, alignItems: 'start' }}>
          <div>
            <h2 className="h2">{c.approachTitle}</h2>
            {c.approach.map((p) => (
              <p key={p} className="muted">{p}</p>
            ))}
          </div>
          <div className="card bg-navy" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
            <h3>{c.proofTitle}</h3>
            <p className="muted" style={{ color: '#c6d2e8' }}>{c.proofBody}</p>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <SectionHeader title={c.sectorsTitle} subtitle={c.sectorsSubtitle} center />
          <Reveal stagger className="grid grid-4 mt-4">
            {c.sectors.map((s) => (
              <Link href={href(locale, `clients/${s.slug}`)} className="card card-hover" key={s.slug}>
                <div className="card-icon">{sectorIcon(s.icon)}</div>
                <h3 style={{ fontSize: '1.15rem' }}>{s.title}</h3>
                <p className="muted">{s.body}</p>
                <span className="card-link">{c.sectorExploreLabel}<IconArrow className="arrow" /></span>
              </Link>
            ))}
          </Reveal>

          <p className="dotline mt-4" style={{ justifyContent: 'center' }}>{c.moreTitle}</p>
          <div className="flex wrap gap-sm mt-3" style={{ justifyContent: 'center' }}>
            {c.industries.map((ind) => (
              <span className="chip" key={ind}>{ind}</span>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={d.home.ctaTitle}
        body={d.home.ctaBody}
        primary={{ label: d.common.requestProposal, href: href(locale, 'contact') }}
        secondary={{ label: d.nav.services, href: href(locale, 'services') }}
      />
    </>
  );
}
