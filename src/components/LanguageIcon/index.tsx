import { FC } from 'react';

import Image from 'next/image';

import GALink from '../GALink';
import styles from './LanguageIcon.module.css';
import { LanguageIconProps } from './types';

export const LanguageIcon: FC<LanguageIconProps> = ({
  language,
  alt,
  currentLocale,
}) => {
  return (
    <GALink
      nextLink={{
        page: `/${language}`,
      }}
      gaText={language === 'en' ? 'en' : 'pt'}
      className={language === currentLocale ? styles.border : undefined}
    >
      <Image
        src={language === 'en' ? '/img/icons/usa.png' : '/img/icons/brazil.png'}
        alt={alt}
        width={22}
        height={16}
        loading="lazy"
        className={language === currentLocale ? styles.image : undefined}
      />
    </GALink>
  );
};
