import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;

  return (
    <Html lang="pt-br">
      <Head>
        <noscript>
          <link rel="stylesheet" href="/noJs.css" />
        </noscript>
        {/* Import Google Icon Font */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap"
          rel="stylesheet"
          media="all"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        {/* Import materialize.css */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
          media="all"
        />
        {/* Let browser know website is optimized for mobile */}
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
        <link rel="canonical" href="https://rafaelsantana.dev/</meta>" />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Global site tag (gtag.js) - Google Analytics */}
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
        <Script strategy="beforeInteractive">
          {`
           const theme = localStorage.getItem('theme');
           if (theme) document.documentElement.setAttribute('theme', theme);
        `}
        </Script>
      </body>
    </Html>
  );
}
