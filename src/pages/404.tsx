import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Image from 'next/image';
import Lottie from 'react-lottie';

import * as animationData from '../../public/lottie/404.json';

import styles from '../styles/NotFound.module.scss';

const NotFound = () => {
  const t = useTranslations('Notfound');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Head>
        <title>{t('notFound')}</title>
      </Head>
      <main className={`${styles.container} notFound container`}>
        <Lottie options={defaultOptions} height="unset" width="unset" />
        <noscript>
          <Image
            src="/img/lottie.gif"
            alt={t('notFound')}
            className="lottieImg"
            height={200}
            width={1000}
          />
        </noscript>
        <h1>{t('notFound')}</h1>
      </main>
    </>
  );
};

export async function getStaticProps(context: {
  locale: string;
  defaultLocale: string;
}) {
  const language = (await import(`../../messages/${context.locale}.json`))
    .default;

  return {
    props: {
      messages: language,
    },
  };
}

export default NotFound;
