import { ReactNode } from 'react';

import '../styles/globals.css';
import { ColorProvider } from '@/hooks/useColor';
import { Inter, Inconsolata, Montserrat } from 'next/font/google';
import { cookies } from 'next/headers';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-Inconsolata',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = cookies();
  const locale = cookieStore?.get('NEXT_LOCALE') || 'pt';
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html lang={typeof locale === 'object' ? locale?.value : locale}>
      <head>
        <title>Rafael Santana</title>
      </head>
      <body
        className={`${inter.variable} ${inconsolata.variable} ${montserrat.variable}`}
      >
        <ColorProvider>{children}</ColorProvider>
        <Script
          id="clarity-script"
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
