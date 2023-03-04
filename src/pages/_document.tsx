import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        {/* Import Google Icon Font */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap"
          rel="stylesheet"
          media="all"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
          media="all"
        />
        <link rel="stylesheet" href="./style/styles.css" />
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        {/* Import materialize.css */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
          media="all"
        />
        {/* Let browser know website is optimized for mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Desenvolvedor Mobile, apaixonado por tecnologia, sempre em busca de desafios e projeto para ter um aprendizado constante."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rafaelsantana.dev/" />
        <meta property="og:title" content="Rafael Santana" />
        <meta
          property="og:description"
          content="Desenvolvedor Mobile, apaixonado por tecnologia, sempre em busca de desafios e projeto para ter um aprendizado constante."
        />
        <meta
          property="og:image"
          content="https://rafaelsantana.dev/img/index.png"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rafaelsantana.dev" />
        <meta property="twitter:title" content="Rafael Santana" />
        <meta
          property="twitter:description"
          content="Desenvolvedor Mobile, apaixonado por tecnologia, sempre em busca de desafios e projeto para ter um aprendizado constante."
        />
        <meta
          property="twitter:image"
          content="https://rafaelsantana.dev/img/index.png"
        />
        {/* SEO */}
        <link rel="canonical" href="https://rafaelsantana.dev/</meta>" />
        <meta
          name="keywords"
          content="Desenvolvedor, Mobile, React Js, React Native, Rafael Santana"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
