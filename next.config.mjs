/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // We hand-author our ESLint-free codebase; do not block production builds on lint.
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      // Send the bare root to the default (English) locale.
      { source: '/', destination: '/en', permanent: false },
    ];
  },
};

export default nextConfig;
