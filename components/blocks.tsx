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
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: { name: string; href?: string }[];
}) {
  return (
    <section className="page-hero">
      <div className="container">
        {crumbs && <Breadcrumbs items={crumbs} />}
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {subtitle && <p className="lead mt-1">{subtitle}</p>}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? 'center maxw-center' : 'maxw'}>
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
}: {
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '46ch' }}>
            <h2 className="h2">{title}</h2>
            <p className="lead mt-1">{body}</p>
            <div className="btn-row mt-2">
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
