import { site } from './site';
import { Locale } from './i18n';
import { Dictionary, Partner, ServiceItem, Post } from '@/content/types';

const SITE_URL = site.url;

function abs(locale: Locale, path = ''): string {
  return `${SITE_URL}/${locale}${path ? `/${path}` : ''}`;
}

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: `${site.address.line1}, ${site.address.line2}`,
  addressLocality: site.address.city,
  addressCountry: site.address.countryCode,
  postOfficeBoxNumber: site.address.poBox,
};

export function organizationSchema(dict: Dictionary, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': ['AccountingService', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: dict.meta.name,
    legalName: dict.meta.legalName,
    description: dict.meta.description,
    url: abs(locale),
    telephone: site.phone,
    email: site.email,
    areaServed: { '@type': 'Country', name: 'Lebanon' },
    address: postalAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHours: 'Mo-Fr 08:30-17:00',
    priceRange: '$$',
    memberOf: { '@type': 'Organization', name: 'GMN International' },
    knowsAbout: [
      'Audit',
      'Assurance',
      'Taxation in Lebanon',
      'VAT',
      'NSSF',
      'Payroll',
      'Business valuation',
      'IFRS',
    ],
    sameAs: [site.social.facebook, site.social.linkedin],
  };
}

export function websiteSchema(dict: Dictionary, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: dict.meta.name,
    url: abs(locale),
    inLanguage: locale,
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

export function personSchema(p: Partner) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: p.name,
    jobTitle: `${p.role} — ${p.designation}`,
    worksFor: { '@id': `${SITE_URL}/#organization` },
    alumniOf: p.education,
    hasCredential: [...p.credentials, ...p.memberships],
  };
}

export function serviceSchema(s: ServiceItem, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title,
    description: s.summary,
    serviceType: s.title,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'Lebanon' },
    url: abs(locale, `services/${s.slug}`),
  };
}

export function articleSchema(post: Post, dict: Dictionary, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: locale,
    articleSection: post.category,
    author: {
      '@type': 'Person',
      name: dict.insights.author,
      jobTitle: dict.insights.authorRole,
    },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: abs(locale, `insights/${post.slug}`),
    description: post.excerpt,
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
