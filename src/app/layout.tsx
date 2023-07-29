import { ReactNode } from 'react';

import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { Metadata } from 'next';
import { Inter, Inconsolata } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-Inconsolata',
});

export const metadata: Metadata = {
  title: 'Rafael Santana',
  description:
    'Desenvolvedor Mobile, apaixonado por tecnologia, sempre em busca de desafios e projeto para ter um aprendizado constante.',
  appleWebApp: true,
  themeColor: '#363636',
  robots: 'index, follow',
  twitter: {
    description:
      'Desenvolvedor Mobile, apaixonado por tecnologia, sempre em busca de desafios e projeto para ter um aprendizado constante.',
    card: 'summary_large_image',
    site: 'https://rafaelsantana.dev',
    images: 'https://rafaelsantana.dev/img/index.png',
    title: 'Rafael Santana',
  },
  openGraph: {
    type: 'website',
    description:
      'Desenvolvedor Mobile, apaixonado por tecnologia, sempre em busca de desafios e projeto para ter um aprendizado constante.',
    url: 'https://rafaelsantana.dev',
    title: 'Rafael Santana',
    images: 'https://rafaelsantana.dev/img/index.png',
  },
  keywords:
    'Desenvolvedor, Mobile, React Js, React Native, Rafael Santana, developer, mobile developer, web developer, front-end developer, back-end developer, full-stack developer',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;

  return (
    <html lang="pt-br">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        {/* SEO */}
        <link rel="canonical" href="https://rafaelsantana.dev/" />
      </head>
      <body className={`${inconsolata.variable} ${inter.variable}`}>
        <ThemeRegistry>
          <div>{children}</div>
        </ThemeRegistry>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
           window.dataLayer = window.dataLayer || [];
           function gtag() { dataLayer.push(arguments); }
           gtag('js', new Date());
       
           gtag('config', '${analyticsId}');
        `}
        </Script>
      </body>
    </html>
  );
}
