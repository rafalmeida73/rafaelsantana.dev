import { ReactNode } from 'react';

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: 'Mobile, React Js, React Native, Rafael Santana, developer, mobile developer, web developer, front-end developer, back-end developer, full-stack developer',
    openGraph: {
      type: 'website',
      url: 'https://rafaelsantana.dev/',
      title: 'Rafael Santana',
      description: t('description'),
      images: [
        {
          url: 'https://rafaelsantana.dev/img/index.webp',
          width: 800,
          height: 600,
          alt: 'Rafael Santana',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      url: 'https://rafaelsantana.dev',
      title: 'Rafael Santana',
      description: t('description'),
      images: [
        {
          url: 'https://rafaelsantana.dev/img/index.webp',
          width: 800,
          height: 600,
          alt: 'Rafael Santana',
        },
      ],
    },
    icons: 'https://www.rafaelsantana.dev/favicon.ico',
  };
}

export default async function LocaleLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();

  const messages =
    (await getMessages()) as unknown as typeof import('@/messages/en.json');


  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div>{children}</div>
    </NextIntlClientProvider>
  );
}
