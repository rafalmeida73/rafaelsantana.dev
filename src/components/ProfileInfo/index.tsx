import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';

import { ProfileIcons } from '../ProfileIcons';
import styles from './ProfileInfo.module.css';

export default function ProfileInfo() {
  return (
    <div className={styles.container}>
      <h1>Rafael Santana</h1>
      <p>Zona Sul, São Paulo</p>
      <p>
        Desenvolvedor Mobile, apaixonado por tecnologia, sempre em busca de
        desafios e projeto para ter um aprendizado constante. Focado atualmente
        em desenvolvimento mobile que é uma área com bastante novidades e
        diversos conhecimentos que pretendo aprender.
      </p>

      <div className={styles.icons}>
        <ProfileIcons type="github" />
        <ProfileIcons type="whatsapp" />
        <ProfileIcons type="linkedin" />
      </div>

      <Button
        variant="contained"
        startIcon={<EmailIcon />}
        href="mailto:contato@rafaelsantana.dev"
        aria-label="email"
        style={{
          backgroundColor: 'var(--primary)',
        }}
      >
        Enviar e-mail
      </Button>
    </div>
  );
}
