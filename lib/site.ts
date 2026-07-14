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
  email: 'info@kandkauditors.com',
  careersEmail: 'careers@kandkauditors.com',

  address: {
    line1: 'Badaro Center, 9th Floor, Office 38',
    line2: 'Ibrahim Mdawar Street, Badaro',
    city: 'Beirut',
    country: 'Lebanon',
    countryCode: 'LB',
    poBox: 'P.O. Box 16-6969',
  },

  // Approx. coordinates for the Badaro, Beirut office (used for the map embed)
  geo: { lat: 33.8759, lng: 35.5178 },
  mapQuery: 'Badaro Center, Ibrahim Mdawar Street, Badaro, Beirut, Lebanon',

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
  // Keyless Google Maps embed (works without an API key).
  return `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;
}

export function mapsLink(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    site.mapQuery,
  )}`;
}
