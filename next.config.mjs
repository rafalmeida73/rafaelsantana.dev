/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["icon-library"],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
