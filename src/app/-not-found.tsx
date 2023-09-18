'use client';

import { useState, useEffect } from 'react';

import { ChevronLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Lottie from 'react-lottie';

// eslint-disable-next-line import-helpers/order-imports
import * as animationData from '../../public/lottie/404.json';
// eslint-disable-next-line import/order
import styles from '@/styles/NotFound.module.css';

const Custom404 = () => {
  const router = useRouter();
  const t = useTranslations('Notfound');
  const [loading, setLoading] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

  return (
    <main className={styles.container}>
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
      <button type="button" onClick={() => router.back()}>
        <ChevronLeft />
        {t('goBack')}
      </button>
    </main>
  );
};

export default Custom404;
