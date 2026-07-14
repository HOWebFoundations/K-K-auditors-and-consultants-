import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { href } from '@/lib/nav';
import { PageHero, CTABand } from '@/components/blocks';
import { IconArrow } from '@/components/icons';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  return { title: d.resources.title, description: d.resources.subtitle };
}

export default function ResourcesPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow={d.resources.eyebrow}
        title={d.resources.title}
        subtitle={d.resources.subtitle}
        crumbs={[{ name: d.common.home, href: href(locale) }, { name: d.nav.resources }]}
        image="/images/cedars.jpg"
        imageAlt={d.resources.title}
      />
      <section className="section">
        <div className="container">
          <p className="lead maxw">{d.resources.intro}</p>
          <div className="grid grid-3 mt-4">
            {d.resources.items.map((r) => (
              <Link key={r.slug} href={href(locale, `resources/${r.slug}`)} className="card card-hover">
                <span className="badge">{r.category}</span>
                <h3 style={{ marginTop: 14, fontSize: '1.2rem' }}>{r.title}</h3>
                <p className="muted">{r.summary}</p>
                <span className="card-link">{d.common.readGuide}<IconArrow className="arrow" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABand
        title={d.common.needHelp}
        body={d.common.needHelpBody}
        primary={{ label: d.common.bookConsultation, href: href(locale, 'contact') }}
        secondary={{ label: d.nav.services, href: href(locale, 'services') }}
      />
    </>
  );
}
