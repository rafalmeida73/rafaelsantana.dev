import { useTranslations } from 'next-intl';
import Image from 'next/image';

import styles from './ImageProfile.module.css';

export const ImageProfileNoJs = () => {
  const t = useTranslations('Home');

  return (
    <div className={styles.container}>
      <p data-text="Rafael">Rafael</p>
      <Image
        width={650}
        height={650}
        className={styles.image}
        src="/img/profileImage.webp"
        alt={t('mainContent.profileImageAlt')}
        draggable={false}
        priority
      />
    </div>
  );
};
