'use client';

import { useEffect, useMemo, useState } from 'react';

import { Player as Lottie } from '@lottiefiles/react-lottie-player';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import en from '../messages/en.json';
import pt from '../messages/pt.json';

import styles from '@/styles/NotFound.module.css';

const Custom404 = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);

  const locale = useMemo(() => {
    if (pathname?.includes('/en')) return en?.Notfound;
    return pt?.Notfound;
  }, [pathname]);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <main className={styles.container}>
      {!loading && (
        <Lottie
          autoplay
          loop
          src="/lottie/404.json"
          style={{ height: '70vh', width: 'unset' }}
        />
      )}
      <noscript>
        <Image
          src="/lottie/404.gif"
          alt={locale?.notFound}
          height={500}
          width={1000}
          loading="lazy"
          className={styles.lottieImg}
        />
      </noscript>
      <h1>{locale?.notFound}</h1>
      <button type="button" onClick={() => router.back()}>
        <ChevronLeft />
        {locale?.goBack}
      </button>
    </main>
  );
};

export default Custom404;
