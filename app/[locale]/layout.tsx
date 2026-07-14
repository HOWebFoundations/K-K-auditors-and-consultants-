import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../globals.css';
import { fontVariables } from '../fonts';
import { locales, isLocale, localeConfig, Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/content';
import { site } from '@/lib/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import JsonLd from '@/components/JsonLd';
import { organizationSchema, websiteSchema } from '@/lib/schema';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = (isLocale(params.locale) ? params.locale : 'en') as Locale;
  const dict = getDictionary(locale);
  const languages: Record<string, string> = {
    'x-default': `${site.url}/en`,
  };
  for (const l of locales) languages[l] = `${site.url}/${l}`;

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${dict.meta.name} — ${dict.meta.tagline}`,
      template: `%s — ${dict.meta.name}`,
    },
    description: dict.meta.description,
    alternates: {
      canonical: `${site.url}/${locale}`,
      languages,
    },
    openGraph: {
      type: 'website',
      siteName: dict.meta.name,
      title: `${dict.meta.name} — ${dict.meta.tagline}`,
      description: dict.meta.description,
      url: `${site.url}/${locale}`,
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dict.meta.name} — ${dict.meta.tagline}`,
      description: dict.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
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
        <Header locale={locale} nav={dict.nav} ctaLabel={dict.common.requestProposal} />
        <main id="main">{children}</main>
        <Footer locale={locale} dict={dict} />
        <WhatsAppButton label={dict.common.chatOnWhatsapp} />
      </body>
    </html>
  );
}
