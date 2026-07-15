import { Plus_Jakarta_Sans, IBM_Plex_Sans_Arabic } from 'next/font/google';

// Headlines use Times New Roman (a system serif) — set directly in globals.css,
// so no web font is loaded for the serif family.

// Modern geometric sans for body & UI
export const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans-src',
});

// Modern Arabic (headings + body) for the RTL locale
export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-ar-src',
});

export const fontVariables = `${sans.variable} ${plexArabic.variable}`;
