import * as Sentry from '@sentry/nextjs';

export const handleAnalyticsEventTracker = (action: string) => {
  try {
    if (window !== undefined) {
      window.gtag('event', action);
    }
  } catch (error) {
    Sentry.captureException(error);
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
