/* eslint-disable @typescript-eslint/no-explicit-any */
import '@/styles/globals.scss';
import { useEffect } from 'react';

import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const carousel = document.querySelectorAll('.carousel');
    const tooltip = document.querySelectorAll('.tooltipped');
    const changeColor = document?.getElementById?.('color');
    if (carousel && (window as any)?.M) {
      (window as any).M.Carousel.init(carousel);
    }
    if ((window as any)?.M) {
      (window as any).M.Tooltip.init(tooltip);
    }

    if (changeColor) changeColor.style.display = 'flex';
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
