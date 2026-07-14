import { Dictionary, DeepPartial } from '@/content/types';
import en from '@/content/en';
import ar from '@/content/ar';
import fr from '@/content/fr';
import { Locale } from './i18n';

type AnyRecord = Record<string, unknown>;

/**
 * Deep-merge a locale override onto the English base.
 * Objects merge recursively; arrays and primitives from the override replace
 * the base. Any key a translation omits therefore falls back to English, so
 * the site always renders fully even while translations are being completed.
 */
function deepMerge<T>(base: T, override: DeepPartial<T> | undefined): T {
  if (!override) return base;
  if (Array.isArray(base)) {
    return ((override as unknown as T) ?? base) as T;
  }
  if (typeof base === 'object' && base !== null) {
    const out: AnyRecord = { ...(base as AnyRecord) };
    const ov = override as AnyRecord;
    for (const key of Object.keys(ov)) {
      const b = (base as AnyRecord)[key];
      const o = ov[key];
      if (
        b &&
        typeof b === 'object' &&
        !Array.isArray(b) &&
        o &&
        typeof o === 'object' &&
        !Array.isArray(o)
      ) {
        out[key] = deepMerge(b, o as DeepPartial<typeof b>);
      } else if (o !== undefined) {
        out[key] = o;
      }
    }
    return out as T;
  }
  return (override as unknown as T) ?? base;
}

const overrides: Record<Locale, DeepPartial<Dictionary>> = {
  en: {},
  ar,
  fr,
};

export function getDictionary(locale: Locale): Dictionary {
  return deepMerge(en, overrides[locale]);
}

export type { Dictionary };
