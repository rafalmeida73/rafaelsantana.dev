import { useTranslations } from 'next-intl';
import Image from 'next/image';

import styles from './ImageProfile.module.css';

export const ImageProfile = () => {
  const t = useTranslations('Home');

  return (
    <div className={styles.container}>
      <p data-text="Rafael">Rafael</p>
      <Image
        width={550}
        height={550}
        className={styles.image}
        src="/img/profileImage.webp"
        alt={t('profileImageAlt')}
        draggable={false}
      />
    </div>
  );
};
