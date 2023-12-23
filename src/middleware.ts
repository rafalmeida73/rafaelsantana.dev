import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'pt'],

  defaultLocale: 'pt',
  localePrefix: 'as-needed',
});

export const config = {
  matcher: ['/', '/(en|pt)/:path*'],
};
