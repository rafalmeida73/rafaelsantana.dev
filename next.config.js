/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/i18n.ts'
);

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA(
  withNextIntl({
  reactStrictMode: true,
  swcMinify: true
  })
)

