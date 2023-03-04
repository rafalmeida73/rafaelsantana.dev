import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './LanguageIcon.module.scss';
import { IconProps } from './types';

export const LanguageIcon: FC<IconProps> = ({ language, alt }) => {
  const { locale } = useRouter();

  return (
    <Link
      href="/"
      locale={language === 'en-US' ? 'en-US' : 'pt-br'}
      className={language === locale ? styles.border : undefined}
    >
      <Image
        src={language === 'en-US' ? '/img/usa.png' : '/img/brazil.png'}
        alt={alt}
        width={22}
        height={16}
      />
    </Link>
  );
};
