import type { Metadata } from 'next';
import { Locale, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { href } from '@/lib/nav';
import { site } from '@/lib/site';
import { PageHero, SectionHeader, CTABand } from '@/components/blocks';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';
import { personSchema, breadcrumbSchema } from '@/lib/schema';

// Partner portraits, keyed by the (locale-stable) initials.
const partnerPhoto: Record<string, string> = {
  EK: '/images/partner-elia.jpg',
  JK: '/images/partner-jihad.jpg',
};

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  return {
    title: `${d.nav.about} | ${d.about.title}`,
    description: d.about.subtitle,
  };
}

export default async function AboutPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
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
      {/* Leadership — photos at the top, with names, titles and credentials */}
      <section className="section">
        <div className="container">
          <SectionHeader title={a.leadershipTitle} subtitle={a.leadershipSubtitle} center />
          <div className="grid grid-2 mt-4">
            {a.partners.map((p) => (
              <div className="card" key={p.name}>
                <div className="partner">
                  {partnerPhoto[p.initials] ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    (<img className="avatar-photo" src={partnerPhoto[p.initials]} alt={p.name} loading="lazy" />)
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
      {/* Story — text left, photo right */}
      <section className="section bg-soft">
        <div className="container split split-7-5">
          <Reveal>
            <span className="marker">{a.storyTitle}</span>
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
      <section className="section-tight">
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
          <SectionHeader title={a.valuesTitle} subtitle={a.valuesSubtitle} center />
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
      {/* Credentials — photo left, text right (alternating layout) */}
      <section className="section bg-soft">
        <div className="container split split-5-7">
          <Reveal className="figure figure-tall">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/finance-desk.jpg" alt={a.credentialsTitle} loading="lazy" />
          </Reveal>
          <Reveal>
            <h2 className="h2">{a.credentialsTitle}</h2>
            <p className="muted">{a.credentialsBody}</p>
            <ul className="ticks mt-2">
              {a.credentialsList.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      {/* GMN — text left, photo right (alternating layout) */}
      <section className="section">
        <div className="container split split-7-5">
          <Reveal>
            <span className="marker">{d.common.memberOf} GMN International</span>
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
