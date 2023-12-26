import createMiddleware from 'next-intl/middleware';

export const locales = ['en', 'pt'];

export default createMiddleware({
  locales,

  defaultLocale: 'pt',

  localePrefix: 'as-needed',
});

export const config = {
  matcher: ['/', '/(en|pt)/:path*'],
};
