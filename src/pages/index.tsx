import { useCallback } from 'react';

import { GithubIcon } from '@/components/GithubIcon';
import { ImageProfile } from '@/components/ImageProfile';
import { Info } from '@/components/Info';
import { LanguageIcon } from '@/components/LanguageIcon';
import { LinkedinIcon } from '@/components/LinkedinIcon';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { useTranslations } from 'next-intl';
import Head from 'next/head';

import styles from '@/styles/Home.module.scss';

export default function Home() {
  const t = useTranslations('Home');

  const handleChangeColor = useCallback((color: string) => {
    document.documentElement.style.setProperty('--primary', color);
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
        <section className={styles.me}>
          <h2>{t('aboutMe')}</h2>
          <p>{t('aboutMeDescription')}</p>
        </section>

        <section className={`${styles.infos} col s12 m12 l6`}>
          <h3>FORMAÇÃO ACADÊMICA</h3>
          <div className="row">
            <Info
              title={{
                text: 'Análise e Desenvolvimento de Sistemas',
              }}
              time="2019 - 2021"
              description={{ text: 'Uninove' }}
            />
            <Info
              title={{
                text: 'Full-stack Developer',
              }}
              time="2022 - 2023"
              description={{
                text: 'Senac',
              }}
            />
          </div>

          <h3>EXPERIÊNCIA</h3>
          <div className="row">
            <Info
              title={{
                text: 'Desenvolvedor Full Stack',
              }}
              time="Fev/2021 - Set/2021"
              description={{
                text: 'Valiant Group',
                ariaLabel: 'Valiant Group',
                link: 'https://valiantgroup.com.br/',
              }}
            />
            <Info
              title={{
                text: 'Desenvolvedor Mobile',
              }}
              time="Set/2021 - Atual"
              description={{
                text: 'Web Jump',
                ariaLabel: 'Web Jump',
                link: 'https://webjump.com.br/',
              }}
            />
          </div>

          <h3>CURSOS COMPLEMENTARES</h3>
          <div className="row">
            <Info
              title={{
                text: 'Web Full Stack Node',
                link: 'https://drive.google.com/file/d/1i-797GuLtIlLSNEbPE6gFIU9RRjS1JIv/view?usp=sharing',
                ariaLabel: 'Certificado Web Full Stack Node',
              }}
              time="185 horas"
              description={{
                text: 'Digital House',
              }}
            />
            <Info
              title={{
                text: 'Inglês',
              }}
              time="2016-2018"
              description={{
                text: 'Cidadão Pró-Mundo',
              }}
            />
            <Info
              title={{
                text: 'Microsoft Excel',
                link: 'https://www.udemy.com/certificate/UC-J026Q6DE/',
                ariaLabel: 'Certificado Microsoft Excel',
              }}
              time="11 horas"
              description={{
                text: 'Udemy',
              }}
            />
            <Info
              title={{
                text: 'HTML e CSS na prática',
                link: 'https://drive.google.com/file/d/1b9UyZWeGBx43Gm_q0H6wvBbE9eLNOjwl/view?usp=sharing',
                ariaLabel: 'Certificado HTML e CSS na prática',
              }}
              time="24 horas"
              description={{
                text: 'Fundação Bradesco',
              }}
            />
            <Info
              title={{
                text: 'Web Moderno com JavaScript',
                link: 'https://www.udemy.com/certificate/UC-N4JLM3OE/',
                ariaLabel: 'Certificado Web Moderno com JavaScript',
              }}
              time="76 horas"
              description={{
                text: 'Udemy',
              }}
            />
            <Info
              title={{
                text: 'Banco de dados SQL',
                link: 'https://www.udemy.com/certificate/UC-6RK781ZN/',
                ariaLabel: 'Certificado Banco de dados SQL',
              }}
              time="36 horas"
              description={{
                text: 'Udemy',
              }}
            />
            <Info
              title={{
                text: 'React Js do zero ao avançado na pratica',
                link: 'https://www.udemy.com/certificate/UC-0YQZQZ7Y/',
                ariaLabel:
                  'Certificado React Js do zero ao avançado na pratica',
              }}
              time="18 horas"
              description={{
                text: 'Udemy',
              }}
            />
            <Info
              title={{
                text: 'Aplicativos mobile do zero com React Native e Redux',
                link: 'https://www.udemy.com/certificate/UC-fec333ae-cced-400f-ad23-e734934d4f71/',
                ariaLabel:
                  'Certificado Aplicativos mobile do zero com React Native e Redux',
              }}
              time="31 horas"
              description={{
                text: 'Udemy',
              }}
            />
            <Info
              title={{
                text: 'Aprenda NextJS, GraphQL e Leaflet na prática!',
                link: 'https://www.udemy.com/certificate/UC-408ca299-98c6-4653-a05e-8d4a6fb61b21/',
                ariaLabel:
                  'Certificado Aprenda NextJS, GraphQL e Leaflet na prática!',
              }}
              time="9 horas"
              description={{
                text: 'Udemy',
              }}
            />
            <Info
              title={{
                text: 'Trilha React Native do programa Ignite',
                link: 'https://app.rocketseat.com.br/api/certificates/pdf/fece1ed0-e703-4253-9b39-b667120b0a32',
                ariaLabel: 'Certificado Trilha React Native do programa Ignite',
              }}
              time="100 horas"
              description={{
                text: 'Rocketseat',
              }}
            />
            <Info
              title={{
                text: 'Trilha ReactJS do programa Ignite',
                link: 'https://app.rocketseat.com.br/api/certificates/pdf/14a5304c-b6bb-43aa-9d97-db267aa8c405',
                ariaLabel: 'Certificado Trilha ReactJS do programa Ignite',
              }}
              time="100 horas"
              description={{
                text: 'Rocketseat',
              }}
              full
            />
          </div>
        </section>

        <section>
          <h3>PROJETOS</h3>
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
