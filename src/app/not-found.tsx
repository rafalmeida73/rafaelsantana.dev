'use client';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Lottie from 'react-lottie';

// eslint-disable-next-line import-helpers/order-imports
import * as animationData from '../../public/lottie/404.json';
// eslint-disable-next-line import/order
import styles from '@/styles/NotFound.module.css';

const Custom404 = () => {
  const router = useRouter();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <main className={styles.container}>
      <Lottie options={defaultOptions} height="unset" width="unset" />
      <noscript>
        <Image
          src="/img/lottie.gif"
          alt="Página não encontrada"
          className="lottieImg"
          height={200}
          width={1000}
        />
      </noscript>
      <h1>Página não encontrada</h1>
      <Button
        variant="text"
        startIcon={<ArrowLeftIcon />}
        onClick={() => router.back()}
      >
        Voltar para a página anterior
      </Button>
    </main>
  );
};

export default Custom404;
