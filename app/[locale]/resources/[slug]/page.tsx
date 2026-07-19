import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { locales, Locale, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { href } from '@/lib/nav';
import { site } from '@/lib/site';
import { PageHero } from '@/components/blocks';
import JsonLd from '@/components/JsonLd';
import { faqSchema, breadcrumbSchema } from '@/lib/schema';
import { IconArrow, IconClock } from '@/components/icons';
import en from '@/content/en';
import { ResourceSection } from '@/content/types';

export function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const r of en.resources.items) out.push({ locale, slug: r.slug });
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
  const r = d.resources.items.find((x) => x.slug === params.slug);
  if (!r) return {};
  return { title: r.title, description: r.summary };
}

function SectionBlock({ s }: { s: ResourceSection }) {
  return (
    <>
      <h2>{s.h}</h2>
      {s.body?.map((p) => (
        <p key={p}>{p}</p>
      ))}
      {s.list && (
        <ul className="ticks" style={{ margin: '0 0 1.2rem' }}>
          {s.list.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
      )}
      {s.table && (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                {s.table.head.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {s.table.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {s.note && <p className="notice">{s.note}</p>}
    </>
  );
}

export default async function ResourceDetail(
  props: {
    params: Promise<{ locale: string; slug: string }>;
  }
) {
  const params = await props.params;
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  const r = d.resources.items.find((x) => x.slug === params.slug);
  if (!r) notFound();

  const related = d.resources.items.filter((x) => x.slug !== r.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          faqSchema(r.faq),
          breadcrumbSchema([
            { name: d.common.home, url: `${site.url}/${locale}` },
            { name: d.nav.resources, url: `${site.url}/${locale}/resources` },
            { name: r.title, url: `${site.url}/${locale}/resources/${r.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow={r.category}
        title={r.title}
        crumbs={[
          { name: d.common.home, href: href(locale) },
          { name: d.nav.resources, href: href(locale, 'resources') },
          { name: r.title },
        ]}
      />

      <section className="section">
        <div className="container grid-sidebar">
          <article className="prose">
            <span className="updated">
              <IconClock width={15} height={15} /> {d.common.lastUpdated}: {d.privacy.updated}
            </span>

            {/* Answer-first block for AI / featured snippets */}
            <div className="card" style={{ background: 'var(--blue-50)', borderColor: '#d7e2f3', marginTop: 16 }}>
              <strong style={{ color: 'var(--navy)', textTransform: 'uppercase', fontSize: '0.78rem', letterSpacing: '0.1em' }}>
                {d.resources.answerLabel}
              </strong>
              <p style={{ margin: '8px 0 0', fontSize: '1.1rem', color: 'var(--navy-900)', fontWeight: 500 }}>
                {r.answer}
              </p>
            </div>

            {r.sections.map((s) => (
              <SectionBlock key={s.h} s={s} />
            ))}

            <h2>{d.common.faqTitle}</h2>
            <div className="faq">
              {r.faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <div className="faq-body">{f.a}</div>
                </details>
              ))}
            </div>

            <h3>{d.common.sourcesTitle}</h3>
            <ul>
              {r.sources.map((src) => (
                <li key={src}>{src}</li>
              ))}
            </ul>
          </article>

          <aside className="sticky-side" style={{ position: 'sticky', top: 96, display: 'grid', gap: 20 }}>
            <div className="card" style={{ background: 'var(--navy-900)', color: '#dbe4f2', borderColor: 'transparent' }}>
              <h3 style={{ color: '#fff' }}>{d.common.needHelp}</h3>
              <p style={{ color: '#c3cee2' }}>{d.common.needHelpBody}</p>
              <Link className="btn btn-gold mt-1" href={href(locale, 'contact')} style={{ width: '100%' }}>
                {d.common.bookConsultation}
                <IconArrow className="arrow" />
              </Link>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.05rem' }}>{d.nav.resources}</h3>
              <ul className="footer-links" style={{ gap: 10 }}>
                {related.map((rel) => (
                  <li key={rel.slug}>
                    <Link href={href(locale, `resources/${rel.slug}`)} style={{ fontWeight: 600 }}>
                      {rel.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
