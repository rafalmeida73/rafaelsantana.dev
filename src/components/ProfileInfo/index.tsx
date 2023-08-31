import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import { useTranslations } from 'next-intl';

import { ProfileIcons } from '../ProfileIcons';
import styles from './ProfileInfo.module.css';

export default function ProfileInfo() {
  const t = useTranslations('Home');

  return (
    <div className={styles.container}>
      <h1>Rafael Santana</h1>
      <p>{t('city')}</p>
      <p>{t('description')}</p>

      <div className={styles.icons}>
        <ProfileIcons type="github" />
        <ProfileIcons type="whatsapp" />
        <ProfileIcons type="linkedin" />
      </div>

      <Button
        variant="contained"
        startIcon={<EmailIcon />}
        href={`mailto:${t('contact')}@rafaelsantana.dev`}
        aria-label={t('email')}
        color="primary"
      >
        {t('email')}
      </Button>
    </div>
  );
}
