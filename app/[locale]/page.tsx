import Link from 'next/link';
import { Locale, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { href } from '@/lib/nav';
import { site } from '@/lib/site';
import { SectionHeader, CTABand } from '@/components/blocks';
import Reveal from '@/components/Reveal';
import {
  iconFor,
  IconArrow,
  IconShield,
  IconGlobe2,
  IconScale,
  IconBook,
  IconCheck,
} from '@/components/icons';

const whyIcons = [IconShield, IconGlobe2, IconScale, IconBook];

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  const h = d.home;

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="hero">
        <div className="hero-bg" aria-hidden>
          <span className="blob b1" />
          <span className="blob b2" />
          <span className="grid-lines" />
        </div>
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
              <Link className="btn btn-underline" href={href(locale, 'services')}>
                {d.common.viewAllServices}
                <IconArrow className="arrow" />
              </Link>
            </div>
            <div className="flex wrap gap-sm mt-4">
              {d.hero.badges.map((b) => (
                <span className="chip" key={b}>{b}</span>
              ))}
            </div>
          </div>

          <div className="hero-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hero-towers.jpg" alt="Modern corporate towers" loading="eager" />
            <div className="tag">
              <div className="k">{site.yearsExperience}+ years · GMN International</div>
              <div className="v">{d.hero.badges[1]}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Stats ---------------- */}
      <section className="section-tight" style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <Reveal className="stat-row">
            {h.stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------- About ---------------- */}
      <section className="section">
        <div className="container split split-7-5">
          <Reveal>
            <span className="marker">01 — {h.aboutEyebrow}</span>
            <h2 className="h2">{h.aboutTitle}</h2>
            {h.aboutBody.map((p) => (
              <p key={p} className="muted">{p}</p>
            ))}
            <ul className="ticks mt-2">
              {h.aboutPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <Link className="btn btn-underline mt-3" href={href(locale, 'about')}>
              {d.common.learnMore}
              <IconArrow className="arrow" />
            </Link>
          </Reveal>
          <Reveal className="figure figure-tall">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/boardroom.jpg" alt="K&K boardroom" loading="lazy" />
            <span className="figure-badge">Badaro · Beirut</span>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Services ---------------- */}
      <section className="section bg-soft">
        <div className="container">
          <SectionHeader
            marker={`02 — ${h.servicesEyebrow}`}
            title={h.servicesTitle}
            subtitle={h.servicesSubtitle}
          />
          <Reveal stagger className="grid grid-2 mt-4">
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
          </Reveal>
        </div>
      </section>

      {/* ---------------- Why K&K ---------------- */}
      <section className="section">
        <div className="container split split-5-7">
          <Reveal className="figure figure-tall">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/meeting-glass.jpg" alt="Advisory meeting" loading="lazy" />
          </Reveal>
          <Reveal>
            <span className="marker">03 — {h.whyEyebrow}</span>
            <h2 className="h2">{h.whyTitle}</h2>
            <p className="lead mt-1">{h.whySubtitle}</p>
            <div className="grid" style={{ gap: 22, marginTop: 28 }}>
              {h.why.map((w, i) => {
                const Icon = whyIcons[i % whyIcons.length];
                return (
                  <div className="feature" key={w.title}>
                    <div className="card-icon"><Icon /></div>
                    <div>
                      <h3 style={{ fontSize: '1.2rem' }}>{w.title}</h3>
                      <p>{w.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- GMN ---------------- */}
      <section className="section bg-soft">
        <div className="container split">
          <Reveal>
            <span className="marker">04 — {h.gmnEyebrow}</span>
            <h2 className="h2">{h.gmnTitle}</h2>
            <p className="muted">{h.gmnBody}</p>
            <Link className="btn btn-ghost mt-2" href={href(locale, 'about')}>
              {d.common.learnMore}
              <IconArrow className="arrow" />
            </Link>
          </Reveal>
          <Reveal>
            <div
              className="card"
              style={{ display: 'grid', gap: 18, placeItems: 'center', textAlign: 'center', padding: '48px 34px' }}
            >
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 500, color: 'var(--navy)', letterSpacing: '0.02em' }}>
                GMN
              </span>
              <span style={{ letterSpacing: '0.24em', fontSize: '0.78rem', color: 'var(--muted)', fontWeight: 600 }}>
                INTERNATIONAL
              </span>
              <hr className="rule-accent" />
              <span className="badge badge-gold">
                <IconCheck width={13} height={13} /> {d.common.memberOf} {d.common.since} {site.gmnSince}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Industries ---------------- */}
      <section className="section">
        <div className="container">
          <SectionHeader
            marker={`05 — ${h.industriesEyebrow}`}
            title={h.industriesTitle}
            subtitle={h.industriesSubtitle}
            center
          />
          <Reveal className="flex wrap gap-sm mt-4" style={{ justifyContent: 'center' }}>
            {d.clients.industries.slice(0, 14).map((ind) => (
              <span className="chip" key={ind}>{ind}</span>
            ))}
            <Link className="chip" href={href(locale, 'clients')} style={{ color: 'var(--navy)', fontWeight: 600 }}>
              +{Math.max(0, d.clients.industries.length - 14)} →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Insights ---------------- */}
      <section className="section bg-soft">
        <div className="container">
          <div className="flex between wrap items-center" style={{ gap: 16, marginBottom: 8 }}>
            <SectionHeader marker={`06 — ${h.insightsEyebrow}`} title={h.insightsTitle} subtitle={h.insightsSubtitle} />
            <Link className="btn btn-underline hide-mobile" href={href(locale, 'insights')}>
              {d.common.viewAllInsights}
              <IconArrow className="arrow" />
            </Link>
          </div>
          <Reveal stagger className="grid grid-3 mt-3">
            {d.insights.posts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={href(locale, `insights/${post.slug}`)} className="card card-hover">
                <span className="badge">{post.category}</span>
                <h3 style={{ marginTop: 16, fontSize: '1.3rem' }}>{post.title}</h3>
                <p className="muted">{post.excerpt}</p>
                <span className="updated">{formatDate(post.date, locale)}</span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <CTABand
        marker={`— ${d.meta.name}`}
        title={h.ctaTitle}
        body={h.ctaBody}
        primary={{ label: d.common.bookConsultation, href: href(locale, 'contact') }}
        secondary={{ label: d.common.viewAllServices, href: href(locale, 'services') }}
        image="/images/skyline.jpg"
      />
    </>
  );
}

function formatDate(iso: string, locale: Locale): string {
  try {
    return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'short', day: 'numeric' }).format(
      new Date(iso),
    );
  } catch {
    return iso;
  }
}
