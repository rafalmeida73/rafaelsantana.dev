import { Mail } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import Links from '../Links';
import { ProfileIcons } from '../ProfileIcons';
import styles from './ProfileInfo.module.css';

export default async function ProfileInfo() {
  const t = await getTranslations('Home');

  return (
    <div className={styles.container}>
      <h1>Rafael Santana</h1>
      <p>{t('mainContent.city')}</p>
      <p>{t('mainContent.description')}</p>

      <div className={styles.icons}>
        <ProfileIcons type="github" />
        <ProfileIcons type="whatsapp" />
        <ProfileIcons type="linkedin" />
      </div>

      <Links
        className={styles.button}
        href={`mailto:${t('mainContent.contact')}@rafaelsantana.dev`}
      >
        <Mail size={20} />
        {t('mainContent.email')}
      </Links>
    </div>
  );
}
