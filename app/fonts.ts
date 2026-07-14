import { Source_Serif_4, Plus_Jakarta_Sans, IBM_Plex_Sans_Arabic } from 'next/font/google';

// Clean, corporate transitional serif for display headlines
export const serif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif-src',
});

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

export const fontVariables = `${serif.variable} ${sans.variable} ${plexArabic.variable}`;
