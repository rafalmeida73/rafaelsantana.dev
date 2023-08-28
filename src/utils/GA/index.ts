export const handleAnalyticsEventTracker = (action: string) => {
  try {
    if (window !== undefined) {
      window.gtag('event', action);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
