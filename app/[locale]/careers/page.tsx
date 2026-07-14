import type { Metadata } from 'next';
import { Locale, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { href } from '@/lib/nav';
import { site } from '@/lib/site';
import { PageHero } from '@/components/blocks';
import { IconArrow } from '@/components/icons';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  return { title: d.careers.title, description: d.careers.subtitle };
}

export default function CareersPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  const c = d.careers;
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent('Career application — K&K Auditors')}`;

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        subtitle={c.subtitle}
        crumbs={[{ name: d.common.home, href: href(locale) }, { name: d.nav.careers }]}
      />
      <section className="section">
        <div className="container grid grid-2" style={{ gap: 48, alignItems: 'start' }}>
          <div>
            {c.body.map((p) => (
              <p key={p} className="muted">{p}</p>
            ))}
            <h2 className="h2 mt-2" style={{ fontSize: '1.5rem' }}>{c.openTitle}</h2>
            <p className="muted">{c.openBody}</p>
            <a className="btn btn-primary btn-lg mt-1" href={mailto}>
              {c.ctaTitle}
              <IconArrow className="arrow" />
            </a>
          </div>
          <div className="card" style={{ background: 'var(--paper-2)' }}>
            <h3>{c.perksTitle}</h3>
            <ul className="ticks mt-1">
              {c.perks.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
