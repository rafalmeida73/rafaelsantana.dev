import { FC } from 'react';

import Image from 'next/image';

import Links from '../Links';
import styles from './LanguageIcon.module.css';
import { LanguageIconProps } from './types';

export const LanguageIcon: FC<LanguageIconProps> = ({
  language,
  alt,
  currentLocale,
}) => {
  return (
    <Links
      nextLink={{
        page: `/${language}`,
      }}
      className={language === currentLocale ? styles.border : undefined}
    >
      <Image
        src={language === 'en' ? '/img/icons/usa.png' : '/img/icons/brazil.png'}
        alt={alt}
        width={22}
        height={16}
        className={language === currentLocale ? styles.image : undefined}
        priority
      />
    </Links>
  );
};
