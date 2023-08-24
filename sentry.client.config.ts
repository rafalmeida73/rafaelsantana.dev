import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://8a8d62bf0fcf4aa31e0aaa6ad2cefcb4@o4505761048690688.ingest.sentry.io/4505761049870336',
  tracesSampleRate: 1,
  debug: false,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  integrations: [
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});
