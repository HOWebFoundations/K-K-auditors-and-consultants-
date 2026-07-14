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
  return { title: d.insights.title, description: d.insights.subtitle };
}

function fmt(iso: string, locale: Locale) {
  try {
    return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default function InsightsPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  const posts = [...d.insights.posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHero
        eyebrow={d.insights.eyebrow}
        title={d.insights.title}
        subtitle={d.insights.subtitle}
        crumbs={[{ name: d.common.home, href: href(locale) }, { name: d.nav.insights }]}
        image="/images/beirut-night.jpg"
        imageAlt={d.insights.title}
      />
      <section className="section">
        <div className="container grid grid-3">
          {posts.map((post) => (
            <Link key={post.slug} href={href(locale, `insights/${post.slug}`)} className="card card-hover">
              <span className="badge">{post.category}</span>
              <h2 style={{ marginTop: 14, fontSize: '1.18rem' }}>{post.title}</h2>
              <p className="muted">{post.excerpt}</p>
              <div className="flex between items-center" style={{ marginTop: 8 }}>
                <span className="updated">{fmt(post.date, locale)}</span>
                <span className="card-link">{d.common.readMore}<IconArrow className="arrow" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CTABand
        title={d.common.needHelp}
        body={d.common.needHelpBody}
        primary={{ label: d.common.bookConsultation, href: href(locale, 'contact') }}
      />
    </>
  );
}
