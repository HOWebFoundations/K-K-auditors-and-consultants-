import { Fraunces, Inter, IBM_Plex_Sans_Arabic } from 'next/font/google';

// Editorial serif for display headlines
export const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-serif-src',
});

// Clean neutral sans for body & UI
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans-src',
});

// Modern Arabic (headings + body) for the RTL locale
export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-ar-src',
});

export const fontVariables = `${fraunces.variable} ${inter.variable} ${plexArabic.variable}`;
