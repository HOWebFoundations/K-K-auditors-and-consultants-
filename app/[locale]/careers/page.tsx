import type { Metadata } from 'next';
import { Locale, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { href } from '@/lib/nav';
import { site } from '@/lib/site';
import { PageHero, SectionHeader, CTABand } from '@/components/blocks';
import Reveal from '@/components/Reveal';
import ApplicationForm from '@/components/ApplicationForm';
import { iconFor, IconMail, IconArrow } from '@/components/icons';

const areaIcons = ['audit', 'tax', 'accounting', 'advisory'];

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  return { title: d.careers.title, description: d.careers.subtitle };
}

export default async function CareersPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  const c = d.careers;

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        subtitle={c.subtitle}
        image="/images/careers-culture.jpg"
        imageAlt={c.title}
        crumbs={[{ name: d.common.home, href: href(locale) }, { name: d.nav.careers }]}
      />

      {/* Culture + benefits */}
      <section className="section">
        <div className="container split split-7-5">
          <Reveal>
            <span className="marker">{c.cultureTitle}</span>
            {c.body.map((p) => (
              <p key={p} className="muted">{p}</p>
            ))}
            <h3 className="mt-2" style={{ fontSize: '1.25rem' }}>{c.perksTitle}</h3>
            <ul className="ticks mt-1">
              {c.perks.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="figure figure-tall">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/careers-mentorship.jpg" alt={c.cultureTitle} loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* Where we hire */}
      <section className="section bg-soft">
        <div className="container">
          <SectionHeader title={c.areasTitle} subtitle={c.areasSubtitle} center />
          <Reveal stagger className="grid grid-4 mt-4">
            {c.areas.map((a, i) => (
              <div className="card" key={a.title}>
                <div className="card-icon">{iconFor(areaIcons[i % areaIcons.length])}</div>
                <h3 style={{ fontSize: '1.2rem' }}>{a.title}</h3>
                <p className="muted">{a.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Apply */}
      <section className="section" id="apply">
        <div className="container grid-contact">
          <Reveal>
            <span className="marker">{c.openTitle}</span>
            <h2 className="h2">{c.applyTitle}</h2>
            <p className="lead mt-1">{c.applySubtitle}</p>
            <p className="muted mt-2">{c.openBody}</p>
            <div className="info-row mt-2">
              <div className="card-icon"><IconMail /></div>
              <div>
                <div className="k">{d.contact.emailLabel}</div>
                <a className="v" href={`mailto:${site.careersEmail}`}>{site.careersEmail}</a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="card">
              <h3 style={{ fontSize: '1.35rem' }}>{c.applyTitle}</h3>
              <div className="mt-1">
                <ApplicationForm
                  labels={d.contact.labels}
                  careersForm={c.form}
                  areas={c.areas.map((a) => a.title)}
                  errorMsg={d.contact.errorMsg}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        marker={d.meta.name}
        title={c.ctaTitle}
        body={c.ctaBody}
        primary={{ label: c.applyTitle, href: '#apply' }}
        secondary={{ label: d.nav.about, href: href(locale, 'about') }}
        image="/images/beirut-night.jpg"
      />
    </>
  );
}
