import { useCallback, useState } from 'react';

import { BackToTheTop } from '@/components/BackToTheTop';
import { Carrousel } from '@/components/Carrousel';
import { ChangeTheme } from '@/components/ChangeTheme';
import { GithubIcon } from '@/components/GithubIcon';
import { HeadTags } from '@/components/HeadTags';
import { ImageProfile } from '@/components/ImageProfile';
import { Info } from '@/components/Info';
import { LanguageIcon } from '@/components/LanguageIcon';
import { LinkedinIcon } from '@/components/LinkedinIcon';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '@/styles/Home.module.scss';

export default function Home() {
  const { locale } = useRouter();

  const [color, setColor] = useState('#3bbbe8');
  const t = useTranslations('Home');

  const handleChangeColor = useCallback((colorValue: string) => {
    setColor(colorValue);
    document.documentElement.style.setProperty('--primary', colorValue);
  }, []);

  return (
    <>
      <Head>
        <title>Rafael Santana</title>
      </Head>
      <HeadTags />
      <main className={`${styles.main} mainHome`}>
        <div className={`${styles.languages} languages`}>
          <ChangeTheme />
          <LanguageIcon language="pt-br" alt={t('ptLanguage')} />
          <LanguageIcon language="en-US" alt={t('enLanguage')} />
        </div>
        <div className={`${styles.content} row container content`}>
          <div className="col s6 m6 l6">
            <ImageProfile />
          </div>

          <div className="col s6 m6 l6 white-text">
            <h1>Rafael Santana</h1>
            <p className={`${styles.city} city`}>{t('city')}</p>
            <p className={`${styles.desc} desc`}>{t('description')}</p>
            <div className={`${styles.links} links`}>
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
            <div className={`${styles.contact} contact`}>
              <a
                className="waves-effect waves-light btn"
                href={`mailto:${t('contact')}@rafaelsantana.dev`}
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
        <section
          className={`${styles.me} ${styles.contentSquare} contentSquare me`}
        >
          <h2>{t('aboutMe')}</h2>
          <p>{t('aboutMeDescription')}</p>
        </section>

        <section
          className={`${styles.infos}  ${styles.contentSquare} col s12 m12 l6 contentSquare infos`}
        >
          <h3>{t('academicFormation')}</h3>
          <div className="row">
            <Info
              title={{
                text: t('ads'),
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
                text: t('fullStackDeveloper'),
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
                text: t('mobileDeveloper'),
              }}
              time={`Set/2021 - ${t('current')}`}
              description={{
                text: 'Web Jump',
                ariaLabel: 'Web Jump',
                link: 'https://webjump.com.br/',
              }}
            />
          </div>

          <h3>{t('courses')}</h3>
          <div className="row">
            <Info
              title={{
                text: 'Web Full Stack Node',
                link: 'https://drive.google.com/file/d/1i-797GuLtIlLSNEbPE6gFIU9RRjS1JIv/view?usp=sharing',
                ariaLabel: `${t('certificate')} Web Full Stack Node`,
              }}
              time={`185 ${t('hours')}`}
              description={{
                text: 'Digital House',
              }}
            />
            <Info
              title={{
                text: t('english'),
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
                ariaLabel: `${t('certificate')} Microsoft Excel`,
              }}
              time={`11 ${t('hours')}`}
              description={{
                text: 'Udemy',
              }}
            />
            <Info
              title={{
                text: t('htmlAndCss'),
                link: 'https://drive.google.com/file/d/1b9UyZWeGBx43Gm_q0H6wvBbE9eLNOjwl/view?usp=sharing',
                ariaLabel: `${t('certificate')} ${t('htmlAndCss')}`,
              }}
              time={`24 ${t('hours')}`}
              description={{
                text: 'Fundação Bradesco',
              }}
            />
            <Info
              title={{
                text: t('modernWeb'),
                link: 'https://www.udemy.com/certificate/UC-N4JLM3OE/',
                ariaLabel: `${t('certificate')} ${t('modernWeb')}`,
              }}
              time={`76 ${t('hours')}`}
              description={{
                text: 'Udemy',
              }}
            />
            <Info
              title={{
                text: t('sql'),
                link: 'https://www.udemy.com/certificate/UC-6RK781ZN/',
                ariaLabel: `${t('certificate')} ${t('sql')}`,
              }}
              time={`36 ${t('hours')}`}
              description={{
                text: 'Udemy',
              }}
            />
            <Info
              title={{
                text: t('reactInPractive'),
                link: 'https://www.udemy.com/certificate/UC-0YQZQZ7Y/',
                ariaLabel: `${t('certificate')} ${t('reactInPractive')}`,
              }}
              time={`18 ${t('hours')}`}
              description={{
                text: 'Udemy',
              }}
            />
            <Info
              title={{
                text: t('mobileApps'),
                link: 'https://www.udemy.com/certificate/UC-fec333ae-cced-400f-ad23-e734934d4f71/',
                ariaLabel: `${t('certificate')} ${t('mobileApps')}`,
              }}
              time={`31 ${t('hours')}`}
              description={{
                text: 'Udemy',
              }}
            />
            <Info
              title={{
                text: t('learnNext'),
                link: 'https://www.udemy.com/certificate/UC-408ca299-98c6-4653-a05e-8d4a6fb61b21/',
                ariaLabel: `${t('certificate')} ${t('learnNext')}`,
              }}
              time={`9 ${t('hours')}`}
              description={{
                text: 'Udemy',
              }}
            />
            <Info
              title={{
                text: t('igniteRn'),
                link: 'https://app.rocketseat.com.br/api/certificates/pdf/fece1ed0-e703-4253-9b39-b667120b0a32',
                ariaLabel: `${t('certificate')} ${t('igniteRn')}`,
              }}
              time={`100 ${t('hours')}`}
              description={{
                text: 'Rocketseat',
              }}
            />
            <Info
              title={{
                text: t('igniteR'),
                link: 'https://app.rocketseat.com.br/api/certificates/pdf/14a5304c-b6bb-43aa-9d97-db267aa8c405',
                ariaLabel: `${t('certificate')} ${t('igniteRn')}`,
              }}
              time={`100 ${t('hours')}`}
              description={{
                text: 'Rocketseat',
              }}
              full
            />
          </div>
        </section>

        <section
          className={`${styles.projects} ${styles.contentSquare} contentSquare  projects`}
        >
          <h3>{t('projects')}</h3>

          <Carrousel
            title="Broto"
            description={t('broto')}
            app
            android="https://play.google.com/store/apps/details?id=broto.mobile.app"
            ios="https://apps.apple.com/br/app/broto/id1619769755"
            images={[
              {
                image: '/img/broto.png',
                title: 'Broto logo',
              },
            ]}
          />

          <Carrousel
            title="Natural da terra"
            description={t('nt')}
            app
            android="https://play.google.com/store/apps/details?id=br.com.naturaldaterra.app"
            ios="https://apps.apple.com/br/app/natural-da-terra-novo/id1583935893"
            images={[
              {
                image: '/img/nt.png',
                title: 'Natural da terra logo',
              },
            ]}
          />

          <Carrousel
            title="Hortifruti"
            description={t('ht')}
            app
            android="https://play.google.com/store/apps/details?id=br.com.hortifruti.app"
            ios="https://apps.apple.com/br/app/hortifruti-novo/id1583936154"
            images={[
              {
                image: '/img/ht.png',
                title: 'Hortifruti Logo',
              },
            ]}
          />

          <Carrousel
            hasMockup
            title="Todo List"
            description={t('todoList')}
            images={[
              {
                image: '/img/todo1.png',
                title: t('initialPage'),
              },
              {
                image: '/img/todo2.png',
                title: t('signInPage'),
              },
              {
                image: '/img/todo3.png',
                title: t('signUpPage'),
              },
              {
                image: '/img/todo4.png',
                title: t('emptyListPage'),
              },
              {
                image: '/img/todo6.png',
                title: t('listPage'),
              },
              {
                image: '/img/todo5.png',
                title: t('profilePage'),
              },
            ]}
          />

          <Carrousel
            title="Broken Out"
            description={t('brokenOut')}
            link="https://broken-out.vercel.app"
            images={[
              {
                image: '/img/brokenOut1.png',
                title: t('initialPage'),
              },
              {
                image: '/img/brokenOut2.png',
                title: t('aboutPage'),
              },
              {
                image: '/img/brokenOut3.png',
                title: t('gamesPage'),
              },
              {
                image: '/img/brokenOut4.png',
                title: t('selectedGamePage'),
              },
              {
                image: '/img/brokenOut5.png',
                title: t('signInPage'),
              },
              {
                image: '/img/brokenOut6.png',
                title: t('signUpPage'),
              },
            ]}
          />

          <Carrousel
            title="High Performance"
            description={t('highPerformance')}
            link="https://highperformance.herokuapp.com/"
            images={[
              {
                image: '/img/high1.png',
                title: t('initialPage'),
              },
              {
                image: '/img/high2.png',
                title: t('aboutPage'),
              },
              {
                image: '/img/high5.png',
                title: t('reportsPage'),
              },
              {
                image: '/img/high4.png',
                title: t('signUpPage'),
              },
              {
                image: '/img/high3.png',
                title: t('signInPage'),
              },
            ]}
          />

          <Carrousel
            title="Rafael's Trips"
            description={t('rafaels')}
            images={[
              {
                image: '/img/trip1.png',
                title: t('initialPage'),
              },
              {
                image: '/img/trip2.png',
                title: t('salvadorPage'),
              },
              {
                image: '/img/trip3.png',
                title: t('saoPauloPage'),
              },
            ]}
          />

          <Carrousel
            title="Estética Rhoades"
            description={t('rhoades')}
            link="https://estetica-rhoades.vercel.app"
            images={[
              {
                image: '/img/rhoades1.png',
                title: t('initialPage'),
              },
              {
                image: '/img/rhoades2.png',
                title: t('aboutPage'),
              },
              {
                image: '/img/rhoades4.png',
                title: t('blogPage'),
              },
              {
                image: '/img/rhoades5.png',
                title: t('signInPage'),
              },
              {
                image: '/img/rhoades3.png',
                title: t('postsPage'),
              },
            ]}
          />
        </section>
      </div>

      <section className={`${styles.tech} tech`}>
        <h4 className="center-align">{t('techs')}</h4>
        <div className={`${styles.icons} icons`}>
          <Image
            src="/img/postgresql.webp"
            width="40"
            height="40"
            alt="PostgreSQL"
            loading="lazy"
            className="tooltipped"
            data-position="bottom"
            data-tooltip="PostgreSQL"
          />
          <Image
            src="/img/html.webp"
            width="40"
            height="40"
            alt="Html"
            loading="lazy"
            className="tooltipped"
            data-position="bottom"
            data-tooltip="Html"
          />
          <Image
            src="/img/css.webp"
            width="40"
            height="40"
            alt="Css"
            loading="lazy"
            className="tooltipped"
            data-position="bottom"
            data-tooltip="Css"
          />
          <Image
            src="/img/mysql.webp"
            width="40"
            height="40"
            alt="MySql"
            loading="lazy"
            className="tooltipped darkImage"
            data-position="bottom"
            data-tooltip="MySql"
          />
          <Image
            src="/img/js.png"
            width="40"
            height="40"
            alt="Javascript"
            loading="lazy"
            className="tooltipped"
            data-position="bottom"
            data-tooltip="Javascript"
          />
          <Image
            src="/img/react.webp"
            width="40"
            height="40"
            alt="React"
            loading="lazy"
            className="tooltipped"
            data-position="bottom"
            data-tooltip="React"
          />
          <Image
            src="/img/reactNative.png"
            width="40"
            height="40"
            alt="React Native"
            loading="lazy"
            className="tooltipped"
            data-position="bottom"
            data-tooltip="React Native"
          />
          <Image
            src="/img/ts.png"
            width="40"
            height="40"
            alt="Typescript"
            loading="lazy"
            className="tooltipped"
            data-position="bottom"
            data-tooltip="Typescript"
          />
          <Image
            src="/img/firebase.webp"
            width="40"
            height="40"
            alt="Firebase"
            loading="lazy"
            className="tooltipped"
            data-position="bottom"
            data-tooltip="Firebase"
          />
          <Image
            src="/img/git.webp"
            width="40"
            height="40"
            alt="Git"
            loading="lazy"
            className="tooltipped"
            data-position="bottom"
            data-tooltip="Git"
          />
          <Image
            src="/img/jira.png"
            width="40"
            height="40"
            alt="Jira"
            loading="lazy"
            className="tooltipped"
            data-position="bottom"
            data-tooltip="Jira"
          />
          <Image
            src="/img/figma.png"
            width="40"
            height="40"
            alt="Figma"
            loading="lazy"
            className="tooltipped"
            data-position="bottom"
            data-tooltip="Figma"
          />
        </div>
      </section>

      <footer className={`${styles.footer} footer`}>
        <p className="center">Developed by Rafael Santana</p>
        <div id="color">
          <input
            type="color"
            value={color}
            onChange={e => {
              handleChangeColor(e.target.value);
            }}
            aria-labelledby="color"
            aria-label={t('changeColor')}
          />
        </div>
        <noscript>
          <a
            href={`https://www.enable-javascript.com/${
              locale === 'en-US' ? '' : 'pt'
            }`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('enableJsSite')}
            className="enableJs"
          >
            <i className="material-icons">report_problem</i>
            <p>
              <strong>{t('enableJs1')}</strong> <span>{t('enableJs2')}</span>
            </p>
          </a>
        </noscript>
      </footer>

      <BackToTheTop />
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
