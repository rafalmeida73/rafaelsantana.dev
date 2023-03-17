/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', "pt-br"],
    defaultLocale: 'pt-br',
    domains: [
      {
        domain: 'rafaelsantana.dev',
        defaultLocale: 'pt-br',
      },
    ],
    localeDetection: false,
  },
}

module.exports = nextConfig
