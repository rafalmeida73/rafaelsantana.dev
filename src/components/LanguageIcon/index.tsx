import Image from 'next/image';

import Links from '../Links';
import styles from './LanguageIcon.module.css';
import { LanguageIconProps } from './types';

export const LanguageIcon = ({
  language,
  alt,
  currentLocale,
}: LanguageIconProps) => {
  return (
    <Links
      nextLink={{
        page: `/${language}`,
      }}
      className={language === currentLocale ? styles.border : undefined}
    >
      <Image
        src={
          language === 'en' ? '/img/icons/usa.webp' : '/img/icons/brazil.webp'
        }
        alt={alt}
        width={22}
        height={16}
        className={language === currentLocale ? styles.image : undefined}
        priority
      />
    </Links>
  );
};
