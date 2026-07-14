import type { Metadata } from 'next';
import { Locale, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { href } from '@/lib/nav';
import { PageHero } from '@/components/blocks';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  return { title: d.privacy.title, description: d.privacy.subtitle, robots: { index: false, follow: true } };
}

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  const p = d.privacy;

  return (
    <>
      <PageHero
        title={p.title}
        subtitle={p.subtitle}
        crumbs={[{ name: d.common.home, href: href(locale) }, { name: p.title }]}
      />
      <section className="section">
        <div className="container">
          <article className="prose">
            <p className="updated">{d.common.lastUpdated}: {p.updated}</p>
            {p.sections.map((s) => (
              <div key={s.h}>
                <h2>{s.h}</h2>
                {s.body.map((b) => (
                  <p key={b}>{b}</p>
                ))}
              </div>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
