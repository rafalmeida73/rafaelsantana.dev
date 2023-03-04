/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', "pt-br"],
    defaultLocale: 'pt-br',
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'pt-br',
      },
    ],
    localeDetection: false,
  },
}

module.exports = nextConfig
