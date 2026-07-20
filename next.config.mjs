/** @type {import('next').NextConfig} */
import { withPayload } from '@payloadcms/next/withPayload';

// Content-Security-Policy. 'unsafe-inline' is required for Next's inline RSC
// bootstrap scripts and injected styles; everything else is locked to same-origin
// except the Google Maps embed (frame-src) on the contact page. blob: covers the
// Payload admin's upload previews and web workers. Tighten to a nonce-based
// script-src as a future hardening step.
// Next's dev server (HMR / React Refresh) evaluates strings as JS, so it needs
// 'unsafe-eval' — but only in development. Production stays strict.
const isDev = process.env.NODE_ENV !== 'production';

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "media-src 'self' data: blob:",
  "worker-src 'self' blob:",
  "font-src 'self' data:",
  "frame-src https://www.google.com https://maps.google.com",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=()',
  },
  { key: 'Content-Security-Policy', value: csp },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // drizzle-kit is require()'d at runtime by Payload's schema push; keep it
  // external so it's loaded from node_modules rather than bundled.
  serverExternalPackages: ['drizzle-kit'],
  // We hand-author our ESLint-free codebase; do not block production builds on lint.
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      // Send the bare root to the default (English) locale.
      { source: '/', destination: '/en', permanent: false },
    ];
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

export default withPayload(nextConfig);
