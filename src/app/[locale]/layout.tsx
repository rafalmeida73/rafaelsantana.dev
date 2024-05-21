import { ReactNode } from 'react';

import '../../styles/globals.css';
import { locales } from '@/middleware';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Inter, Inconsolata, Montserrat } from 'next/font/google';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-Inconsolata',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!locales?.includes?.(params.locale)) {
    notFound();
  }

  const locale = await getLocale();

  const messages =
    (await getMessages()) as unknown as typeof import('@/messages/en.json');

  return (
    <>
      <head>
        <title>Rafael Santana</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={messages?.Document?.description} />
        <meta
          name="keywords"
          content={`${messages?.Document?.developer}, Mobile, React Js, React Native, Rafael Santana, developer, mobile developer, web developer, front-end developer, back-end developer, full-stack developer `}
        />
        {/* Open Graph / Facebook */}
        <meta
          property="og:description"
          content={messages?.Document?.description}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rafaelsantana.dev/" />
        <meta property="og:title" content="Rafael Santana" />
        <meta
          property="og:image"
          content="https://rafaelsantana.dev/img/index.png"
        />
        {/* Twitter */}
        <meta
          property="twitter:description"
          content={messages?.Document?.description}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rafaelsantana.dev" />
        <meta property="twitter:title" content="Rafael Santana" />
        <meta
          property="twitter:image"
          content="https://rafaelsantana.dev/img/index.png"
        />
        {/* SEO */}
        <link rel="canonical" href="https://rafaelsantana.dev/" />
      </head>
      <body
        className={`${inter.variable} ${inconsolata.variable} ${montserrat.variable}`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div>{children}</div>
        </NextIntlClientProvider>
      </body>
    </>
  );
}
