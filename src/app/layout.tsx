import { ReactNode } from 'react';

import '../styles/globals.css';
import { ColorProvider } from '@/hooks/useColor';
import { cookies } from 'next/headers';
import Script from 'next/script';

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
      <body>
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
