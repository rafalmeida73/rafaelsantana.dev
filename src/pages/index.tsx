import { GithubIcon } from '@/components/GithubIcon';
import { ImageProfile } from '@/components/ImageProfile';
import { LinkedinIcon } from '@/components/LinkedinIcon';

import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.content} row container`}>
        <div className="col s6 m6 l6">
          <ImageProfile />
        </div>

        <div className="col s6 m6 l6 white-text">
          <h1>Rafael Santana</h1>
          <p className={styles.city}>Zona Sul, São Paulo</p>
          <p className={styles.desc}>
            Desenvolvedor Mobile, apaixonado por tecnologia, sempre em busca de
            desafios e projeto para ter um aprendizado constante. Focado
            atualmente em desenvolvimento mobile que é uma área com bastante
            novidades e diversos conhecimentos que pretendo aprender.
          </p>
          <div className={styles.links}>
            <a
              href="https://github.com/rafalmeida73"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/rafalmeida73/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
            >
              <LinkedinIcon />
            </a>
          </div>
          <div className={styles.contact}>
            <a
              className="waves-effect waves-light btn"
              href="mailto:contato@rafaelsantana.dev"
              aria-label="Enviar e-mail"
              id="email"
            >
              <i className="material-icons left">email</i>
              Enviar um e-mail
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
