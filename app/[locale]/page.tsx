import Link from 'next/link';
import { Locale, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { href } from '@/lib/nav';
import { LogoMark } from '@/components/Logo';
import { SectionHeader, CTABand } from '@/components/blocks';
import {
  iconFor,
  IconArrow,
  IconShield,
  IconGlobe2,
  IconScale,
  IconBook,
  IconCheck,
} from '@/components/icons';
import { site } from '@/lib/site';

const whyIcons = [IconShield, IconGlobe2, IconScale, IconBook];

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  const h = d.home;

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">{d.hero.eyebrow}</div>
            <h1 className="display">{d.hero.title}</h1>
            <p className="lead mt-1">{d.hero.subtitle}</p>
            <div className="btn-row mt-3">
              <Link className="btn btn-primary btn-lg" href={href(locale, 'contact')}>
                {d.common.requestProposal}
                <IconArrow className="arrow" />
              </Link>
              <Link className="btn btn-ghost btn-lg" href={href(locale, 'services')}>
                {d.common.viewAllServices}
              </Link>
            </div>
            <div className="flex wrap gap-sm mt-3">
              {d.hero.badges.map((b) => (
                <span className="chip" key={b}>{b}</span>
              ))}
            </div>
          </div>

          <div className="hero-card">
            <div className="flex items-center between" style={{ marginBottom: 18 }}>
              <strong style={{ color: 'var(--navy-900)', fontSize: '1.1rem' }}>
                {d.hero.cardTitle}
              </strong>
              <LogoMark style={{ height: 34, color: 'var(--navy)' }} />
            </div>
            <ul className="ticks">
              {d.hero.cardPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <Link
              className="btn btn-primary mt-3"
              href={href(locale, 'about')}
              style={{ width: '100%' }}
            >
              {d.nav.about}
              <IconArrow className="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-tight bg-navy">
        <div className="container">
          <div className="stat-row">
            {h.stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="container grid grid-2" style={{ alignItems: 'center', gap: 48 }}>
          <div>
            <div className="eyebrow">{h.aboutEyebrow}</div>
            <h2 className="h2">{h.aboutTitle}</h2>
            {h.aboutBody.map((p) => (
              <p key={p} className="muted">{p}</p>
            ))}
            <ul className="ticks mt-2">
              {h.aboutPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <Link className="btn btn-ghost mt-3" href={href(locale, 'about')}>
              {d.common.learnMore}
              <IconArrow className="arrow" />
            </Link>
          </div>
          <div className="hero-figure">
            <LogoMark className="big-mark" style={{ color: '#fff' }} />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-soft">
        <div className="container">
          <SectionHeader
            eyebrow={h.servicesEyebrow}
            title={h.servicesTitle}
            subtitle={h.servicesSubtitle}
            center
          />
          <div className="grid grid-2 mt-4">
            {d.services.items.map((s) => (
              <Link
                key={s.slug}
                href={href(locale, `services/${s.slug}`)}
                className="card card-hover"
              >
                <div className="card-icon">{iconFor(s.icon)}</div>
                <h3>{s.title}</h3>
                <p className="muted">{s.summary}</p>
                <span className="card-link">
                  {d.common.exploreService}
                  <IconArrow className="arrow" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why K&K */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={h.whyEyebrow} title={h.whyTitle} subtitle={h.whySubtitle} />
          <div className="grid grid-2 mt-4">
            {h.why.map((w, i) => {
              const Icon = whyIcons[i % whyIcons.length];
              return (
                <div className="feature" key={w.title}>
                  <div className="card-icon"><Icon /></div>
                  <div>
                    <h3>{w.title}</h3>
                    <p>{w.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GMN band */}
      <section className="section bg-navy">
        <div className="container grid grid-2" style={{ alignItems: 'center', gap: 44 }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>{h.gmnEyebrow}</div>
            <h2 className="h2">{h.gmnTitle}</h2>
            <p style={{ color: '#cdd9ee' }}>{h.gmnBody}</p>
            <Link className="btn btn-onnavy mt-2" href={href(locale, 'about')}>
              {d.common.learnMore}
              <IconArrow className="arrow" />
            </Link>
          </div>
          <div className="center">
            <div
              style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 14,
                border: '1px solid rgba(255,255,255,0.16)',
                borderRadius: 18,
                padding: '34px 46px',
              }}
            >
              <span style={{ fontSize: '2.6rem', fontWeight: 800, color: '#fff', letterSpacing: '0.04em' }}>
                GMN
              </span>
              <span style={{ color: '#aebcd4', letterSpacing: '0.18em', fontSize: '0.8rem' }}>
                INTERNATIONAL
              </span>
              <span className="badge badge-gold" style={{ marginTop: 6 }}>
                <IconCheck width={14} height={14} /> {d.common.since} {site.gmnSince}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-soft">
        <div className="container">
          <SectionHeader
            eyebrow={h.industriesEyebrow}
            title={h.industriesTitle}
            subtitle={h.industriesSubtitle}
            center
          />
          <div className="flex wrap gap-sm mt-4" style={{ justifyContent: 'center' }}>
            {d.clients.industries.slice(0, 14).map((ind) => (
              <span className="chip" key={ind}>{ind}</span>
            ))}
            <Link className="chip" href={href(locale, 'clients')} style={{ color: 'var(--navy)', fontWeight: 700 }}>
              +{Math.max(0, d.clients.industries.length - 14)} {d.common.readMore}
            </Link>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="section">
        <div className="container">
          <div className="flex between wrap items-center" style={{ gap: 16 }}>
            <SectionHeader eyebrow={h.insightsEyebrow} title={h.insightsTitle} subtitle={h.insightsSubtitle} />
            <Link className="btn btn-ghost" href={href(locale, 'insights')}>
              {d.common.viewAllInsights}
              <IconArrow className="arrow" />
            </Link>
          </div>
          <div className="grid grid-3 mt-4">
            {d.insights.posts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={href(locale, `insights/${post.slug}`)} className="card card-hover">
                <span className="badge">{post.category}</span>
                <h3 style={{ marginTop: 14, fontSize: '1.15rem' }}>{post.title}</h3>
                <p className="muted">{post.excerpt}</p>
                <span className="updated">{formatDate(post.date, locale)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={h.ctaTitle}
        body={h.ctaBody}
        primary={{ label: d.common.bookConsultation, href: href(locale, 'contact') }}
        secondary={{ label: d.common.viewAllServices, href: href(locale, 'services') }}
      />
    </>
  );
}

function formatDate(iso: string, locale: Locale): string {
  try {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}
