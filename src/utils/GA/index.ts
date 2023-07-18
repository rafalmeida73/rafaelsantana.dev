export const handleAnalyticsEventTracker = (action: string) => {
  if (window !== undefined) {
    window.gtag('event', action);
  }
};
