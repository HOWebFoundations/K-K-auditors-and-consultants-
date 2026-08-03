import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import '../globals.css';
import { fontVariables } from '../fonts';
import { locales, isLocale, localeConfig, Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { site } from '@/lib/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import ScrollFX from '@/components/ScrollFX';
import { organizationSchema, websiteSchema } from '@/lib/schema';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: '#204078',
};

export async function generateMetadata(
  props: {
    params: Promise<{ locale: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const dict = getDictionary(locale);
  const languages: Record<string, string> = {
    'x-default': `${site.url}/en`,
  };
  for (const l of locales) languages[l] = `${site.url}/${l}`;

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${dict.meta.name} | ${dict.meta.tagline}`,
      template: `%s | ${dict.meta.name}`,
    },
    description: dict.meta.description,
    alternates: {
      canonical: `${site.url}/${locale}`,
      languages,
    },
    openGraph: {
      type: 'website',
      siteName: dict.meta.name,
      title: `${dict.meta.name} | ${dict.meta.tagline}`,
      description: dict.meta.description,
      url: `${site.url}/${locale}`,
      locale,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${dict.meta.name}, ${dict.meta.tagline}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dict.meta.name} | ${dict.meta.tagline}`,
      description: dict.meta.description,
      images: ['/og-image.jpg'],
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout(
  props: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;

  const {
    children
  } = props;

  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  const { dir, htmlLang } = localeConfig[locale];

  return (
    <html lang={htmlLang} dir={dir} className={fontVariables}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a className="skip-link" href="#main">
          {dict.common.skipToContent}
        </a>
        <JsonLd data={[organizationSchema(dict, locale), websiteSchema(dict, locale)]} />
        <div className="scroll-progress" aria-hidden>
          <span id="scroll-progress-bar" />
        </div>
        <ScrollFX />
        <Header locale={locale} nav={dict.nav} ctaLabel={dict.common.requestProposal} />
        <main id="main">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
