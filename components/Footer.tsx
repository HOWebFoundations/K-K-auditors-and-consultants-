import Link from 'next/link';
import Logo from './Logo';
import { site, mapsLink } from '@/lib/site';
import { Locale } from '@/lib/i18n';
import { href } from '@/lib/nav';
import { Dictionary } from '@/content/types';
import {
  IconPhone,
  IconMail,
  IconMap,
  IconFacebook,
  IconLinkedIn,
} from './icons';

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const year = 2026;
  const { footer, nav, services, resources } = dict;

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Logo onNavy />
          <p className="footer-desc">{footer.desc}</p>
          <div className="social">
            <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook />
            </a>
            <a href={site.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <IconLinkedIn />
            </a>
          </div>
        </div>

        <div>
          <h4>{footer.companyTitle}</h4>
          <ul className="footer-links">
            <li><Link href={href(locale, 'about')}>{nav.about}</Link></li>
            <li><Link href={href(locale, 'clients')}>{nav.clients}</Link></li>
            <li><Link href={href(locale, 'insights')}>{nav.insights}</Link></li>
            <li><Link href={href(locale, 'careers')}>{nav.careers}</Link></li>
            <li><Link href={href(locale, 'contact')}>{nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h4>{footer.servicesTitle}</h4>
          <ul className="footer-links">
            {services.items.map((s) => (
              <li key={s.slug}>
                <Link href={href(locale, `services/${s.slug}`)}>{s.title}</Link>
              </li>
            ))}
          </ul>
          <h4 style={{ marginTop: 26 }}>{footer.resourcesTitle}</h4>
          <ul className="footer-links">
            {resources.items.slice(0, 4).map((r) => (
              <li key={r.slug}>
                <Link href={href(locale, `resources/${r.slug}`)}>{r.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>{footer.contactTitle}</h4>
          <div className="footer-contact">
            <a className="row" href={mapsLink()} target="_blank" rel="noopener noreferrer">
              <IconMap />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}, {site.address.city}, {site.address.country}
                <br />
                {site.address.poBox}
              </span>
            </a>
            <a className="row" href={`tel:${site.phoneHref}`}>
              <IconPhone />
              <span>
                {site.phone}
                <br />
                {site.mobile}
              </span>
            </a>
            <a className="row" href={`mailto:${site.email}`}>
              <IconMail />
              <span>{site.email}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <p className="footer-desc" style={{ maxWidth: '100%', fontSize: '0.82rem', paddingBottom: 8 }}>
          {footer.disclaimer}
        </p>
      </div>

      <div className="container footer-bottom">
        <span>
          © {year} {dict.meta.name}. {footer.rights}
        </span>
        <span className="fnav">
          <Link href={href(locale, 'privacy')}>{footer.privacy}</Link>
          <span>{dict.meta.legalName}</span>
        </span>
      </div>
    </footer>
  );
}
