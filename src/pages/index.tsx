import { useCallback } from 'react';

import { GithubIcon } from '@/components/GithubIcon';
import { ImageProfile } from '@/components/ImageProfile';
import { LanguageIcon } from '@/components/LanguageIcon';
import { LinkedinIcon } from '@/components/LinkedinIcon';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { useTranslations } from 'next-intl';
import Head from 'next/head';

import styles from '@/styles/Home.module.scss';

export default function Home() {
  const t = useTranslations('Home');

  const handleChangeColor = useCallback((color: string) => {
    document.documentElement.style.setProperty('--primary', 'red');
  }, []);

  return (
    <>
      <Head>
        <title>Rafael Santana</title>
      </Head>
      <main className={styles.main}>
        <div className={`${styles.languages}`}>
          <LanguageIcon language="pt-br" alt={t('ptLanguage')} />
          <LanguageIcon language="en-US" alt={t('enLanguage')} />
        </div>
        <div className={`${styles.content} row container`}>
          <div className="col s6 m6 l6">
            <ImageProfile />
          </div>

          <div className="col s6 m6 l6 white-text">
            <h1>Rafael Santana</h1>
            <p className={styles.city}>{t('city')}</p>
            <p className={styles.desc}>{t('description')}</p>
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
                href="https://wa.me/5511963335067"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
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
                aria-label={t('email')}
              >
                <i className="material-icons left">email</i>
                {t('email')}
              </a>
            </div>
          </div>
        </div>
      </main>

      <div className="container">
        <section>
          <div className={styles.me}>
            <h2>{t('aboutMe')}</h2>
            <p>{t('aboutMeDescription')}</p>
          </div>
        </section>

        <section>
          <div className="col s12 m12 l6">
            <h3>FORMAÇÃO ACADÊMICA</h3>
            <div className="row" />
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps(context: {
  locale: string;
  defaultLocale: string;
}) {
  const language = (await import(`../../messages/${context.locale}.json`))
    .default;

  return {
    props: {
      messages: language,
    },
  };
}
