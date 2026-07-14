export const locales = ['en', 'ar', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeConfig: Record<
  Locale,
  { label: string; nativeLabel: string; dir: 'ltr' | 'rtl'; htmlLang: string }
> = {
  en: { label: 'English', nativeLabel: 'English', dir: 'ltr', htmlLang: 'en' },
  ar: { label: 'Arabic', nativeLabel: 'العربية', dir: 'rtl', htmlLang: 'ar' },
  fr: { label: 'French', nativeLabel: 'Français', dir: 'ltr', htmlLang: 'fr' },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function dirFor(locale: Locale): 'ltr' | 'rtl' {
  return localeConfig[locale].dir;
}
