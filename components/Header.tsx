'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { IconMenu } from './icons';
import { Locale } from '@/lib/i18n';
import { mainNav, href, NavKey } from '@/lib/nav';
import { NavDict } from '@/content/types';

export default function Header({
  locale,
  nav,
  ctaLabel,
}: {
  locale: Locale;
  nav: NavDict;
  ctaLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || `/${locale}`;
  const seg = pathname.split('/')[2] || '';

  const isActive = (path: string) => seg === path;

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href={href(locale)} aria-label="K&K home">
          <Logo />
        </Link>

        <nav className="nav" aria-label="Primary">
          {mainNav.map((item) => {
            const classes = [
              isActive(item.path) ? 'active' : '',
              item.key === 'contact' ? 'nav-strong' : '',
            ]
              .filter(Boolean)
              .join(' ');
            return (
              <Link
                key={item.key}
                href={href(locale, item.path)}
                className={classes}
              >
                {nav[item.key as NavKey]}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <LanguageSwitcher current={locale} />
          <Link className="btn btn-primary" href={href(locale, 'contact')}>
            {ctaLabel}
          </Link>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <IconMenu />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav">
          {mainNav.map((item) => (
            <Link
              key={item.key}
              href={href(locale, item.path)}
              onClick={() => setOpen(false)}
            >
              {nav[item.key as NavKey]}
            </Link>
          ))}
          <Link
            className="btn btn-primary"
            href={href(locale, 'contact')}
            onClick={() => setOpen(false)}
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </header>
  );
}
