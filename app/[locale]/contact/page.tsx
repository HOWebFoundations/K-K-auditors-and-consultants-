import type { Metadata } from 'next';
import { Locale, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { href } from '@/lib/nav';
import { site, mapsEmbedSrc, mapsLink } from '@/lib/site';
import { PageHero } from '@/components/blocks';
import ContactForm from '@/components/ContactForm';
import {
  IconPhone,
  IconMail,
  IconMap,
  IconClock,
  IconArrow,
} from '@/components/icons';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  return { title: d.contact.title, description: d.contact.subtitle };
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const d = getDictionary(locale);
  const c = d.contact;

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        subtitle={c.subtitle}
        crumbs={[{ name: d.common.home, href: href(locale) }, { name: d.nav.contact }]}
        image="/images/beirut-hero.jpg"
        imageAlt={c.title}
        video="/videos/hero-beirut.mp4"
      />

      <section className="section">
        <div className="container grid-contact">
          {/* Form */}
          <div className="card">
            <h2 style={{ fontSize: '1.5rem' }}>{c.formTitle}</h2>
            <p className="muted">{c.formSubtitle}</p>
            <div className="mt-2">
              <ContactForm
                labels={c.labels}
                services={[
                  ...d.services.items.map((s) => ({ slug: s.slug, title: s.title })),
                  ...c.moreServices.map((t, i) => ({ slug: `more-${i}`, title: t })),
                ]}
                privacyNote={c.privacyNote}
                successTitle={c.successTitle}
                successBody={c.successBody}
                errorMsg={c.errorMsg}
              />
            </div>
          </div>

          {/* Info */}
          <div>
            <h2 style={{ fontSize: '1.5rem' }}>{c.infoTitle}</h2>

            <div className="info-row mt-2">
              <div className="card-icon"><IconMap /></div>
              <div>
                <div className="k">{c.addressLabel}</div>
                <a className="v" href={mapsLink()} target="_blank" rel="noopener noreferrer">
                  {site.address.line1}, {site.address.line2}, {site.address.city}, {site.address.country} · {site.address.poBox}
                </a>
              </div>
            </div>

            <div className="info-row">
              <div className="card-icon"><IconPhone /></div>
              <div>
                <div className="k">{c.phoneLabel}</div>
                <a className="v" href={`tel:${site.phoneHref}`}>{site.phone}</a>
                <div className="v">{site.phoneSecondary} · {site.mobile}</div>
              </div>
            </div>

            <div className="info-row">
              <div className="card-icon"><IconMail /></div>
              <div>
                <div className="k">{c.emailLabel}</div>
                <a className="v" href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>

            <div className="info-row">
              <div className="card-icon"><IconClock /></div>
              <div>
                <div className="k">{c.hoursLabel}</div>
                <div className="v">{site.hours}</div>
              </div>
            </div>

            <a className="btn btn-primary mt-2" href={mapsLink()} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
              {d.common.getDirections}
              <IconArrow className="arrow" />
            </a>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-tight">
        <div className="container">
          <h2 className="h2" style={{ marginBottom: 18 }}>{c.mapTitle}</h2>
          <iframe
            className="map-embed"
            src={mapsEmbedSrc()}
            title={c.mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
