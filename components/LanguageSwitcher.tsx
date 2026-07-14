'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { locales, localeConfig, Locale } from '@/lib/i18n';
import { IconGlobe } from './icons';

export default function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() || `/${current}`;

  function swap(target: Locale): string {
    const parts = pathname.split('/');
    // parts[0] === '' , parts[1] === locale
    if (parts.length > 1 && (locales as readonly string[]).includes(parts[1])) {
      parts[1] = target;
    } else {
      return `/${target}`;
    }
    return parts.join('/') || `/${target}`;
  }

  return (
    <details className="lang">
      <summary aria-label={localeConfig[current].label}>
        <IconGlobe />
        <span>{current.toUpperCase()}</span>
      </summary>
      <div className="lang-menu">
        {locales.map((l) => (
          <Link
            key={l}
            href={swap(l)}
            hrefLang={l}
            className={l === current ? 'active' : ''}
          >
            <span>{localeConfig[l].label}</span>
            <span className="native">{localeConfig[l].nativeLabel}</span>
          </Link>
        ))}
      </div>
    </details>
  );
}
