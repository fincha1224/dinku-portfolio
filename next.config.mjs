/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes a plain website to /out that can be hosted
  // on Vercel, Cloudflare Pages, Netlify or any static host.
  output: 'export',
  images: { unoptimized: true },
};
export default nextConfig;
