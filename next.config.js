/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', "pt"],
    defaultLocale: 'pt',
    domains: [
      {
        domain: 'rafaelsantana.dev',
        defaultLocale: 'pt',
      },
    ],
  },
}

module.exports = nextConfig
