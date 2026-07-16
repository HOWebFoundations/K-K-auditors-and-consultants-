export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? U[]
    : T[P] extends object
    ? DeepPartial<T[P]>
    : T[P];
};

export interface NavDict {
  home: string;
  about: string;
  services: string;
  resources: string;
  clients: string;
  insights: string;
  contact: string;
  careers: string;
}

export interface CommonDict {
  requestProposal: string;
  bookConsultation: string;
  talkToUs: string;
  readMore: string;
  learnMore: string;
  exploreService: string;
  viewAllServices: string;
  viewAllResources: string;
  viewAllInsights: string;
  readGuide: string;
  contactUs: string;
  getDirections: string;
  callUs: string;
  emailUs: string;
  whatsapp: string;
  chatOnWhatsapp: string;
  memberOf: string;
  since: string;
  lastUpdated: string;
  home: string;
  skipToContent: string;
  menu: string;
  language: string;
  inThisSection: string;
  keyFacts: string;
  faqTitle: string;
  sourcesTitle: string;
  relatedServices: string;
  needHelp: string;
  needHelpBody: string;
}

export interface HeroDict {
  eyebrow: string;
  title: string;
  subtitle: string;
  badges: string[];
  cardTitle: string;
  cardPoints: string[];
}

export interface HomeDict {
  statsTitle: string;
  stats: { num: string; label: string }[];
  aboutEyebrow: string;
  aboutTitle: string;
  aboutBody: string[];
  aboutPoints: string[];
  servicesEyebrow: string;
  servicesTitle: string;
  servicesSubtitle: string;
  whyEyebrow: string;
  whyTitle: string;
  whySubtitle: string;
  why: { title: string; body: string }[];
  gmnEyebrow: string;
  gmnTitle: string;
  gmnBody: string;
  industriesEyebrow: string;
  industriesTitle: string;
  industriesSubtitle: string;
  insightsEyebrow: string;
  insightsTitle: string;
  insightsSubtitle: string;
  processEyebrow: string;
  processTitle: string;
  processSubtitle: string;
  process: { title: string; body: string }[];
  ctaTitle: string;
  ctaBody: string;
}

export interface Partner {
  name: string;
  initials: string;
  role: string;
  designation: string;
  bio: string;
  credentials: string[];
  memberships: string[];
  education: string;
}

export interface AboutDict {
  eyebrow: string;
  title: string;
  subtitle: string;
  storyTitle: string;
  story: string[];
  valuesTitle: string;
  valuesSubtitle: string;
  values: { title: string; body: string }[];
  ethicsQuote: string;
  ethicsBy: string;
  leadershipTitle: string;
  leadershipSubtitle: string;
  partners: Partner[];
  teamTitle: string;
  teamBody: string;
  credentialsTitle: string;
  credentialsBody: string;
  credentialsList: string[];
  gmnTitle: string;
  gmnBody: string[];
  gmnPoints: string[];
}

export interface ServiceProcess {
  title: string;
  body: string;
}
export interface ServiceItem {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  summary: string;
  intro: string[];
  includes: string[];
  process: ServiceProcess[];
  forWho: string[];
  deliverables: string[];
  faq: { q: string; a: string }[];
}
export interface ServicesDict {
  eyebrow: string;
  title: string;
  subtitle: string;
  includesTitle: string;
  processTitle: string;
  forWhoTitle: string;
  deliverablesTitle: string;
  items: ServiceItem[];
}

export interface ResourceSection {
  h: string;
  body?: string[];
  list?: string[];
  table?: { head: string[]; rows: string[][] };
  note?: string;
}
export interface ResourceItem {
  slug: string;
  title: string;
  category: string;
  summary: string;
  answer: string; // answer-first 2–3 sentence summary for AI/featured snippets
  sections: ResourceSection[];
  faq: { q: string; a: string }[];
  sources: string[];
}
export interface ResourcesDict {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  answerLabel: string;
  items: ResourceItem[];
}

export interface ClientsDict {
  eyebrow: string;
  title: string;
  subtitle: string;
  approachTitle: string;
  approach: string[];
  sectorsTitle: string;
  sectorsSubtitle: string;
  sectors: { icon: string; title: string; body: string }[];
  moreTitle: string;
  industriesTitle: string;
  industriesSubtitle: string;
  industries: string[];
  proofTitle: string;
  proofBody: string;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string[];
}
export interface InsightsDict {
  eyebrow: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  byLabel: string;
  posts: Post[];
}

export interface ContactDict {
  eyebrow: string;
  title: string;
  subtitle: string;
  formTitle: string;
  formSubtitle: string;
  labels: {
    name: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    selectService: string;
    message: string;
    send: string;
    sending: string;
    required: string;
  };
  successTitle: string;
  successBody: string;
  errorMsg: string;
  privacyNote: string;
  infoTitle: string;
  hoursLabel: string;
  addressLabel: string;
  phoneLabel: string;
  emailLabel: string;
  mapTitle: string;
  moreServices: string[];
}

export interface CareersDict {
  eyebrow: string;
  title: string;
  subtitle: string;
  cultureTitle: string;
  body: string[];
  perksTitle: string;
  perks: string[];
  areasTitle: string;
  areasSubtitle: string;
  areas: { title: string; body: string }[];
  openTitle: string;
  openBody: string;
  applyTitle: string;
  applySubtitle: string;
  form: {
    position: string;
    selectArea: string;
    cvLabel: string;
    cvChoose: string;
    cvHint: string;
    cvNote: string;
    fileError: string;
    successTitle: string;
    successBody: string;
  };
  ctaTitle: string;
  ctaBody: string;
}

export interface PrivacyDict {
  title: string;
  subtitle: string;
  updated: string;
  sections: { h: string; body: string[] }[];
}

export interface FooterDict {
  desc: string;
  companyTitle: string;
  servicesTitle: string;
  resourcesTitle: string;
  contactTitle: string;
  rights: string;
  disclaimer: string;
  privacy: string;
  followUs: string;
}

export interface Dictionary {
  meta: {
    name: string;
    legalName: string;
    tagline: string;
    description: string;
  };
  nav: NavDict;
  common: CommonDict;
  hero: HeroDict;
  home: HomeDict;
  about: AboutDict;
  services: ServicesDict;
  resources: ResourcesDict;
  clients: ClientsDict;
  insights: InsightsDict;
  contact: ContactDict;
  careers: CareersDict;
  privacy: PrivacyDict;
  footer: FooterDict;
}
