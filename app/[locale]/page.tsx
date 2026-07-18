import Link from 'next/link';
import { Locale, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { href } from '@/lib/nav';
import { SectionHeader, CTABand } from '@/components/blocks';
import HeroCinematic from '@/components/HeroCinematic';
import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';
import Ticker from '@/components/Ticker';
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
    { img: '/images/team-office.jpg', title: d.nav.about, line: d.about.subtitle, to: 'about' },
    { img: '/images/advisory.jpg', title: d.nav.services, line: d.services.subtitle, to: 'services' },
    { img: '/images/tax-still.jpg', title: d.nav.resources, line: d.resources.subtitle, to: 'resources' },
    { img: '/images/beirut-heritage.jpg', title: d.nav.insights, line: d.insights.subtitle, to: 'insights' },
  ];

  return (
    <>
      {/* ---------------- Cinematic hero (video + parallax) ---------------- */}
      <HeroCinematic
        eyebrow=""
        title={d.hero.title}
        subtitle={d.hero.subtitle}
        badges={d.hero.badges}
        primary={{ label: d.common.requestProposal, href: href(locale, 'contact') }}
        secondary={{ label: d.common.viewAllServices, href: href(locale, 'services') }}
        poster="/images/beirut-hero.jpg"
        video="/videos/hero-beirut.mp4"
      />

      {/* ---------------- Stats strip ---------------- */}
      <section className="section-tight" style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <Reveal className="stat-row stat-center">
            {h.stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num"><Counter value={s.num} /></div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------- Brand ticker (services + credentials) ---------------- */}
      <Ticker
        items={[
          ...d.services.items.map((s) => s.title),
          'LACPA',
          'GMN International',
          'IFRS',
          'ISA',
          'CMA',
          'ACCA',
          'AOCPA',
        ]}
      />

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

      {/* ---------------- How we work (dark chapter) ---------------- */}
      <section className="section chapter-dark">
        <div className="container">
          <SectionHeader
            marker={h.processEyebrow}
            title={h.processTitle}
            subtitle={h.processSubtitle}
          />
          <Reveal stagger className="process mt-4">
            {h.process.map((s, i) => (
              <div className="step" key={s.title}>
                <div className="n">{String(i + 1).padStart(2, '0')}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
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
        marker={d.meta.name}
        title={h.ctaTitle}
        body={h.ctaBody}
        primary={{ label: d.common.bookConsultation, href: href(locale, 'contact') }}
        secondary={{ label: d.common.viewAllServices, href: href(locale, 'services') }}
        image="/images/beirut-night.jpg"
      />
    </>
  );
}
