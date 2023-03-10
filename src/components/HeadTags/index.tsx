import { useTranslations } from 'next-intl';
import Head from 'next/head';

export const HeadTags = () => {
  const t = useTranslations('Document');

  return (
    <Head>
      <meta property="og:description" content={t('description')} />
      <meta property="twitter:description" content={t('description')} />
      <meta name="description" content={t('description')} />

      <meta
        name="keywords"
        content={`${t(
          'developer',
        )}, Mobile, React Js, React Native, Rafael Santana `}
      />
    </Head>
  );
};

export async function getStaticProps(context: {
  locale: string;
  defaultLocale: string;
}) {
  const language = (await import(`../../../messages/${context.locale}.json`))
    .default;

  return {
    props: {
      messages: language,
    },
  };
}
