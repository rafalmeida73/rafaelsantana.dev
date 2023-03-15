/* eslint-disable @typescript-eslint/no-explicit-any */
import '@/styles/globals.scss';

import { useEffect } from 'react';

import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== undefined) {
      // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
      const M = require('materialize-css');

      const carousel = document.querySelectorAll('.carousel');
      if (carousel) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        M.Carousel.init(carousel);
      }

      const tooltip = document.querySelectorAll('.tooltipped');
      if (tooltip) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        M.Tooltip.init(tooltip);
      }
    }
  }, []);

  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
