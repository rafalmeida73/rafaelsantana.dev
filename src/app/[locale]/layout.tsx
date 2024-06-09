import { ReactNode } from 'react';

import { locales } from '@/middleware';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

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
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div>{children}</div>
        </NextIntlClientProvider>
      </body>
    </>
  );
}
