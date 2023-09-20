'use client';

import { FC } from 'react';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import GALink from '../GALink';
import styles from './LanguageIcon.module.css';
import { LanguageIconProps } from './types';

export const LanguageIcon: FC<LanguageIconProps> = ({ language, alt }) => {
  const { locale } = useParams();

  return (
    <GALink
      nextLink={{
        page: `/${language}`,
      }}
      gaText={language === 'en' ? 'en' : 'pt'}
      className={language === locale ? styles.border : undefined}
    >
      <Image
        src={language === 'en' ? '/img/usa.png' : '/img/brazil.png'}
        alt={alt}
        width={22}
        height={16}
        loading="lazy"
      />
    </GALink>
  );
};
