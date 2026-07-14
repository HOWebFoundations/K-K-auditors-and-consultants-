import Link from 'next/link';
import { Locale, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { href } from '@/lib/nav';
import { site } from '@/lib/site';
import { SectionHeader, CTABand } from '@/components/blocks';
import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';
import CredentialStrip from '@/components/CredentialStrip';
import {
  IconArrow,
  IconShield,
  IconGlobe2,
  IconScale,
  IconBook,
} from '@/components/icons';

const whyIcons = [IconShield, IconGlobe2, IconScale, IconBook];

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  const h = d.home;

  const teasers = [
    { img: '/images/people-team.jpg', title: d.nav.about, line: d.about.subtitle, to: 'about' },
    { img: '/images/people-advisory.jpg', title: d.nav.services, line: d.services.subtitle, to: 'services' },
    { img: '/images/finance-statements.jpg', title: d.nav.resources, line: d.resources.subtitle, to: 'resources' },
    { img: '/images/beirut-downtown.jpg', title: d.nav.insights, line: d.insights.subtitle, to: 'insights' },
  ];

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
            <img src="/images/hero-towers.jpg" alt="Beirut skyline" loading="eager" />
          </div>
        </div>
      </section>

      {/* ---------------- Stats strip ---------------- */}
      <section className="section-tight" style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <Reveal className="stat-row">
            {h.stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num"><Counter value={s.num} /></div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------- Credentials strip ---------------- */}
      <CredentialStrip caption={d.about.credentialsTitle} />

      {/* ---------------- Explore (teaser cards) ---------------- */}
      <section className="section">
        <div className="container">
          <SectionHeader
            marker={h.aboutEyebrow}
            title={h.aboutTitle}
            subtitle={h.aboutBody[0]}
          />
          <Reveal stagger className="teasers mt-4">
            {teasers.map((t) => (
              <Link key={t.to} href={href(locale, t.to)} className="teaser-card">
                <div className="teaser-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.img} alt={t.title} loading="lazy" />
                </div>
                <div className="teaser-body">
                  <h3>{t.title}</h3>
                  <p className="muted">{t.line}</p>
                  <span className="card-link">
                    {d.common.learnMore}
                    <IconArrow className="arrow" />
                  </span>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------- Why K&K (compact) ---------------- */}
      <section className="section bg-soft">
        <div className="container">
          <SectionHeader
            marker={h.whyEyebrow}
            title={h.whyTitle}
            subtitle={h.whySubtitle}
            center
          />
          <Reveal stagger className="grid grid-4 mt-4">
            {h.why.map((w, i) => {
              const Icon = whyIcons[i % whyIcons.length];
              return (
                <div className="card" key={w.title}>
                  <div className="card-icon">
                    <Icon />
                  </div>
                  <h3 style={{ fontSize: '1.2rem' }}>{w.title}</h3>
                  <p className="muted">{w.body}</p>
                </div>
              );
            })}
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
