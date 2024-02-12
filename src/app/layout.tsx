import { ReactNode } from 'react';

import '../styles/globals.css';
import { ColorProvider } from '@/hooks/useColor';
import { Inter, Inconsolata, Montserrat } from 'next/font/google';
import { cookies } from 'next/headers';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-Inconsolata',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = cookies();
  const locale = cookieStore?.get('NEXT_LOCALE') || 'pt';
  const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html lang={typeof locale === 'object' ? locale?.value : locale}>
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

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rafaelsantana.dev/" />
        <meta property="og:title" content="Rafael Santana" />
        <meta
          property="og:image"
          content="https://rafaelsantana.dev/img/index.png"
        />
        {/* Twitter */}
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
        <ColorProvider>{children}</ColorProvider>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
         window.dataLayer = window.dataLayer || [];
         function gtag() { dataLayer.push(arguments); }
         gtag('js', new Date());
     
         gtag('config', '${analyticsId}');
      `}
        </Script>
        <Script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
         (function(c,l,a,r,i,t,y){
             c[a] = c[a] || function () { (c[a].q = c[a].q || 
             []).push(arguments) };
             t=l.createElement(r);
             t.async=1;
             t.src="https://www.clarity.ms/tag/"+i;
             y=l.getElementsByTagName(r)[0];
             y.parentNode.insertBefore(t,y);
         })(window, document, "clarity", "script", "${clarityId}");`,
          }}
        />
      </body>
    </html>
  );
}
