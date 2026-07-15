import type { Metadata } from 'next';
import { Locale, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { href } from '@/lib/nav';
import { site } from '@/lib/site';
import { PageHero, SectionHeader, CTABand } from '@/components/blocks';
import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';
import JsonLd from '@/components/JsonLd';
import { personSchema, breadcrumbSchema } from '@/lib/schema';

// Partner portraits, keyed by the (locale-stable) initials.
const partnerPhoto: Record<string, string> = {
  EK: '/images/partner-elia.jpg',
  JK: '/images/partner-jihad.jpg',
};

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  return {
    title: `${d.nav.about} — ${d.about.title}`,
    description: d.about.subtitle,
  };
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  const a = d.about;

  return (
    <>
      <JsonLd
        data={[
          ...a.partners.map((p) => personSchema(p, partnerPhoto[p.initials])),
          breadcrumbSchema([
            { name: d.common.home, url: `${site.url}/${locale}` },
            { name: d.nav.about, url: `${site.url}/${locale}/about` },
          ]),
        ]}
      />
      <PageHero
        eyebrow={a.eyebrow}
        title={a.title}
        subtitle={a.subtitle}
        crumbs={[{ name: d.common.home, href: href(locale) }, { name: d.nav.about }]}
        image="/images/interior-lobby.jpg"
        imageAlt={a.title}
      />

      {/* Story */}
      <section className="section">
        <div className="container split split-7-5">
          <Reveal>
            <span className="marker">01 — {a.storyTitle}</span>
            {a.story.map((p) => (
              <p key={p} className="muted">{p}</p>
            ))}
          </Reveal>
          <Reveal className="figure figure-tall">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/team-office.jpg" alt="K&K team at work" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* Ethics pullquote */}
      <section className="section-tight bg-soft">
        <div className="container center">
          <p className="pullquote maxw-center">
            <span className="q">{locale === 'en' ? '“' : '«'}</span>
            {a.ethicsQuote}
            <span className="q">{locale === 'en' ? '”' : '»'}</span>
          </p>
          <p className="dotline mt-2" style={{ justifyContent: 'center' }}>{a.ethicsBy}</p>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <SectionHeader marker="02" title={a.valuesTitle} subtitle={a.valuesSubtitle} center />
          <div className="grid grid-3 mt-4">
            {a.values.map((v) => (
              <div className="card" key={v.title}>
                <h3>{v.title}</h3>
                <p className="muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <SectionHeader marker="03" title={a.leadershipTitle} subtitle={a.leadershipSubtitle} />
          <div className="grid grid-2 mt-4">
            {a.partners.map((p) => (
              <div className="card" key={p.name}>
                <div className="partner">
                  {partnerPhoto[p.initials] ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="avatar-photo" src={partnerPhoto[p.initials]} alt={p.name} loading="lazy" />
                  ) : (
                    <div className="avatar" aria-hidden>{p.initials}</div>
                  )}
                  <div>
                    <h3 style={{ marginBottom: 2 }}>{p.name}</h3>
                    <div style={{ fontWeight: 700, color: 'var(--navy)' }}>{p.role}</div>
                    <div className="muted">{p.designation}</div>
                  </div>
                </div>
                <p className="muted mt-2">{p.bio}</p>
                <div className="creds">
                  {p.credentials.map((c) => (
                    <span className="badge" key={c}>{c}</span>
                  ))}
                </div>
                <div className="creds">
                  {p.memberships.map((m) => (
                    <span className="badge badge-gold" key={m}>{m}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team + credentials */}
      <section className="section bg-soft">
        <div className="container grid grid-2" style={{ gap: 48, alignItems: 'start' }}>
          <div>
            <h2 className="h2">{a.teamTitle}</h2>
            <p className="muted">{a.teamBody}</p>
            <div className="stat-row mt-3" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
              <div className="stat"><div className="num"><Counter value={String(site.teamSize)} /></div><div className="lbl">{d.home.stats[1].label}</div></div>
              <div className="stat"><div className="num"><Counter value={`${site.yearsExperience}+`} /></div><div className="lbl">{d.home.stats[0].label}</div></div>
              <div className="stat"><div className="num"><Counter value="2" /></div><div className="lbl">{d.about.leadershipTitle}</div></div>
            </div>
          </div>
          <div className="card">
            <h3>{a.credentialsTitle}</h3>
            <p className="muted">{a.credentialsBody}</p>
            <ul className="ticks mt-2">
              {a.credentialsList.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GMN */}
      <section className="section bg-soft">
        <div className="container split split-7-5">
          <Reveal>
            <span className="marker">05 — {d.common.memberOf} GMN International</span>
            <h2 className="h2">{a.gmnTitle}</h2>
            {a.gmnBody.map((p) => (
              <p key={p} className="muted">{p}</p>
            ))}
            <ul className="ticks mt-2">
              {a.gmnPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="figure figure-tall">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/building-light.jpg" alt="International reach" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <CTABand
        title={d.home.ctaTitle}
        body={d.home.ctaBody}
        primary={{ label: d.common.bookConsultation, href: href(locale, 'contact') }}
        secondary={{ label: d.nav.services, href: href(locale, 'services') }}
      />
    </>
  );
}
