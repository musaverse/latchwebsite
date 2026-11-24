import type { NextConfig } from 'next';

/* Static export: `next build` writes a plain website to out/, one folder per page.
   BASE_PATH is the folder the site is served from (/latchwebsite on the GitHub Pages preview, empty on its own domain). */
const basePath = process.env.BASE_PATH || '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
