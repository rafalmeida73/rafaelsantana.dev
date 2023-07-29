/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
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
