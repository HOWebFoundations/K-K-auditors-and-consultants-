import { Locale } from './i18n';
import { NavDict } from '@/content/types';

export type NavKey = keyof NavDict;

export interface NavItem {
  key: NavKey;
  path: string; // relative to locale root, '' = home
}

export const mainNav: NavItem[] = [
  { key: 'about', path: 'about' },
  { key: 'services', path: 'services' },
  { key: 'resources', path: 'resources' },
  { key: 'clients', path: 'clients' },
  { key: 'insights', path: 'insights' },
  { key: 'contact', path: 'contact' },
];

export function href(locale: Locale, path = ''): string {
  return path ? `/${locale}/${path}` : `/${locale}`;
}
