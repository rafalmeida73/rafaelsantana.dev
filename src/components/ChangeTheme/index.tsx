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
      setThemeImage('/img/moon.png');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.removeAttribute('theme');
      setThemeImage('/img/sun.png');
      localStorage.removeItem('theme');
    }
  }, [themeImage]);

  useEffect(() => {
    const hasTheme = localStorage.getItem('theme');
    if (hasTheme) {
      setThemeImage('/img/moon.png');
      return;
    }
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setThemeImage('/img/sun.png');
    } else {
      setThemeImage('/img/moon.png');
    }
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
