import { useCallback, useEffect, useState } from 'react';

import { NextPage } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import styles from './ChangeTheme.module.scss';

export const ChangeTheme: NextPage = () => {
  const t = useTranslations('Home');

  const [themeImage, setThemeImage] = useState('/img/sun.png');

  const handleChangeTheme = useCallback(() => {
    if (themeImage === '/img/sun.png') {
      document.documentElement.setAttribute('theme', 'light');
      localStorage.setItem('theme', 'light');
      setThemeImage('/img/moon.png');
    } else {
      document.documentElement.setAttribute('theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setThemeImage('/img/sun.png');
    }
  }, [themeImage]);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (!theme) {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        setThemeImage('/img/sun.png');
      } else {
        setThemeImage('/img/moon.png');
      }
    }

    if (theme === 'light') {
      setThemeImage('/img/moon.png');
      return;
    }

    setThemeImage('/img/sun.png');
  }, []);

  return (
    <button
      type="button"
      className={`${styles.container} theme-button tooltipped`}
      onClick={handleChangeTheme}
      data-position="bottom"
      data-tooltip={t('theme')}
    >
      <Image src={themeImage} alt="ss" width={18} height={18} />
    </button>
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
