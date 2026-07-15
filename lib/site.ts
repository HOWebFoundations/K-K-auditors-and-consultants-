/**
 * Canonical business data — the SINGLE source of truth for NAP
 * (Name, Address, Phone). Every page, the footer, and the JSON-LD schema
 * read from here, which resolves the P0 "two different phone numbers /
 * off-domain email" issue flagged in the SEO audit and website review.
 */
export const site = {
  name: 'K&K Auditors & Consultants',
  legalName: 'K&K Auditors & Consultants Civil Co.',
  shortName: 'K&K',
  url: 'https://kandkauditors.com',

  // Canonical, consistent contact identity (used identically everywhere)
  phone: '+961 1 393821',
  phoneSecondary: '+961 1 390821',
  mobile: '+961 3 329079',
  phoneHref: '+9611393821',
  whatsapp: '9613329079', // wa.me target (mobile, no +/spaces)
  email: 'k-k@k-kauditconsult.com',
  careersEmail: 'k-k@k-kauditconsult.com',

  address: {
    line1: 'Badaro Center, 9th Floor, Office 38',
    line2: 'Ibrahim Mdawar Street, Badaro',
    city: 'Beirut',
    country: 'Lebanon',
    countryCode: 'LB',
    poBox: 'P.O. Box 16-6969',
  },

  // The firm's exact Google Business Profile place (from its Maps listing).
  // `mapFtid`/`mapCid` identify the precise pin; `geo` is the Badaro coordinate
  // used for the JSON-LD GeoCoordinates.
  geo: { lat: 33.8757, lng: 35.5161 },
  mapQuery: 'K&K Auditors & Consultants, Badaro, Beirut',
  mapFtid: '0x151f1746f5ded20b:0xe886756e49057d92',
  mapCid: '16755208580210458002',
  mapShareUrl: 'https://maps.app.goo.gl/RRXbv1YRCQupUtWA8',

  hours: 'Mon–Fri, 8:30 – 17:00',

  gmnSince: 2012,
  yearsExperience: 25,
  teamSize: 14,

  social: {
    facebook: 'https://www.facebook.com/kandkauditconsult',
    linkedin: 'https://www.linkedin.com/company/kandk-auditors-and-consultants',
  },

  // Partner direct contacts (from the new brand materials)
  partners: {
    krayem: { email: 'e.krayem@kandkauditors.com' },
  },
} as const;

export function whatsappLink(text?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function mapsEmbedSrc(): string {
  // Keyless Google Maps embed pinned to the firm's exact Business Profile,
  // identified by name + Google feature id (ftid), so it lands on the real
  // office rather than an approximate address search.
  return `https://www.google.com/maps?q=${encodeURIComponent(
    site.mapQuery,
  )}&ftid=${site.mapFtid}&z=17&hl=en&output=embed`;
}

export function mapsLink(): string {
  // The firm's own Google Maps share link — opens the exact place / directions.
  return site.mapShareUrl;
}
