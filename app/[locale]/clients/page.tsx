import type { Metadata } from 'next';
import { Locale, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { href } from '@/lib/nav';
import { PageHero, SectionHeader, CTABand } from '@/components/blocks';

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
      />

      <section className="section">
        <div className="container grid grid-2" style={{ gap: 48, alignItems: 'start' }}>
          <div>
            <h2 className="h2">{c.approachTitle}</h2>
            {c.approach.map((p) => (
              <p key={p} className="muted">{p}</p>
            ))}
          </div>
          <div className="card" style={{ background: 'var(--paper-2)' }}>
            <h3>{c.proofTitle}</h3>
            <p className="muted">{c.proofBody}</p>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <SectionHeader title={c.industriesTitle} subtitle={c.industriesSubtitle} center />
          <div className="flex wrap gap-sm mt-4" style={{ justifyContent: 'center' }}>
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
