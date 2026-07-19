import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { locales, Locale, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { href } from '@/lib/nav';
import { site } from '@/lib/site';
import { PageHero } from '@/components/blocks';
import JsonLd from '@/components/JsonLd';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { IconArrow } from '@/components/icons';
import en from '@/content/en';

export function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const p of en.insights.posts) out.push({ locale, slug: p.slug });
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
  const post = d.insights.posts.find((x) => x.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function fmt(iso: string, locale: Locale) {
  try {
    return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default async function PostDetail(
  props: {
    params: Promise<{ locale: string; slug: string }>;
  }
) {
  const params = await props.params;
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  const post = d.insights.posts.find((x) => x.slug === params.slug);
  if (!post) notFound();

  const more = d.insights.posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          articleSchema(post, d, locale),
          breadcrumbSchema([
            { name: d.common.home, url: `${site.url}/${locale}` },
            { name: d.nav.insights, url: `${site.url}/${locale}/insights` },
            { name: post.title, url: `${site.url}/${locale}/insights/${post.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow={`${post.category} · ${fmt(post.date, locale)}`}
        title={post.title}
        crumbs={[
          { name: d.common.home, href: href(locale) },
          { name: d.nav.insights, href: href(locale, 'insights') },
          { name: post.title },
        ]}
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 780 }}>
          <div className="flex items-center gap-sm" style={{ marginBottom: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/partner-elia.jpg"
              alt={d.insights.author}
              style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top center', boxShadow: 'var(--shadow-sm)' }}
            />
            <span>
              <strong style={{ display: 'block', color: 'var(--navy-900)' }}>
                {d.insights.byLabel} {d.insights.author}
              </strong>
              <span className="muted" style={{ fontSize: '0.9rem' }}>{d.insights.authorRole}</span>
            </span>
          </div>
          <article className="prose">
            {post.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="notice">{d.footer.disclaimer}</p>
          </article>
        </div>
      </section>
      <section className="section bg-soft">
        <div className="container">
          <h2 className="h2">{d.insights.title}</h2>
          <div className="grid grid-3 mt-3">
            {more.map((p) => (
              <Link key={p.slug} href={href(locale, `insights/${p.slug}`)} className="card card-hover">
                <span className="badge">{p.category}</span>
                <h3 style={{ marginTop: 12, fontSize: '1.1rem' }}>{p.title}</h3>
                <span className="card-link">{d.common.readMore}<IconArrow className="arrow" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
