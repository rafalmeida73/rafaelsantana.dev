/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/i18n.ts'
);
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = withNextIntl({
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  sentry: {
    hideSourceMaps: true,
  },
})

const sentryWebpackPluginOptions = {
  silent: true,

  org: "portfolio-7681befb9",
  project: "javascript-nextjs",
  authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
}

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);