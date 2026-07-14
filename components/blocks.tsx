import Link from 'next/link';
import { ReactNode } from 'react';
import { IconArrow } from './icons';

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {items.map((it, i) => (
        <span key={i}>
          {it.href ? <Link href={it.href}>{it.name}</Link> : <span>{it.name}</span>}
          {i < items.length - 1 && <span className="sep"> / </span>}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
  image,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: { name: string; href?: string }[];
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className={`page-hero${image ? ' has-media' : ''}`}>
      <div className="container">
        <div>
          {crumbs && <Breadcrumbs items={crumbs} />}
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1>{title}</h1>
          {subtitle && <p className="lead mt-1">{subtitle}</p>}
        </div>
        {image && (
          <div className="page-hero-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={imageAlt || ''} loading="eager" />
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  marker,
  title,
  subtitle,
  center,
}: {
  eyebrow?: string;
  marker?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`section-head${center ? ' center' : ''}`}>
      {marker && <span className="marker">{marker}</span>}
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="h2">{title}</h2>
      {subtitle && <p className="lead mt-1">{subtitle}</p>}
    </div>
  );
}

export function CTABand({
  title,
  body,
  primary,
  secondary,
  image = '/images/beirut-night.jpg',
  marker,
}: {
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  image?: string;
  marker?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          {image && (
            <div className="cta-img" aria-hidden data-parallax="0.16">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt="" loading="lazy" />
            </div>
          )}
          <div style={{ maxWidth: '52ch' }}>
            {marker && <span className="marker">{marker}</span>}
            <h2 className="h2">{title}</h2>
            <p className="lead mt-1">{body}</p>
            <div className="btn-row mt-3">
              <Link className="btn btn-gold btn-lg" href={primary.href}>
                {primary.label}
                <IconArrow className="arrow" />
              </Link>
              {secondary && (
                <Link className="btn btn-onnavy btn-lg" href={secondary.href}>
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="prose">{children}</div>;
}
