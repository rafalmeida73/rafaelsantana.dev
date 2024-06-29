import { Suspense } from 'react';

import { BackToTheTop } from '@/components/BackToTheTop';
import { Canvas } from '@/components/Canvas';
import { ChangeColor } from '@/components/ChangeColor';
import { Container } from '@/components/Container';
import { ImageProfile } from '@/components/ImageProfile';
import { Info } from '@/components/Info';
import InfoCard from '@/components/InfoCard';
import { LanguageIcon } from '@/components/LanguageIcon';
import ProfileInfo from '@/components/ProfileInfo';
import { Tooltip } from '@/components/ToolTip';
import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';

export default async function Home() {
  const t = await getTranslations('Home');
  const currentLocale = await getLocale();

  const year = new Date()?.getFullYear?.();

  return (
    <main>
      <div className={styles.languages}>
        <LanguageIcon
          currentLocale={currentLocale}
          language="pt"
          alt={t('languages.ptLanguage')}
        />
        <LanguageIcon
          currentLocale={currentLocale}
          language="en"
          alt={t('languages.enLanguage')}
        />
      </div>
      <section className={styles.container}>
        <Container>
          <div className={styles.mainContent}>
            <Canvas>
              <ImageProfile />
            </Canvas>
            <Suspense fallback={null}>
              <ProfileInfo />
            </Suspense>
          </div>
        </Container>
      </section>

      <section className={styles.aboutMe}>
        <Container>
          <InfoCard>
            <h2>{t('aboutMe.title')}</h2>
            <p>{t('aboutMe.description')}</p>
          </InfoCard>
        </Container>
      </section>

      <Container>
        <InfoCard>
          <section className={styles.education}>
            <h3>{t('academicFormation.title')}</h3>
            <div className={styles.educationContent}>
              <Info
                title={{
                  text: t('academicFormation.ads'),
                }}
                time="2019 - 2021"
                description={{ text: 'UNINOVE' }}
              />
              <Info
                title={{
                  text: 'Full-stack Developer',
                }}
                time="2022 - 2023"
                description={{ text: 'SENAC' }}
              />
            </div>
          </section>
        </InfoCard>
      </Container>

      <section className={styles.techs}>
        <h5>{t('techs.title')}</h5>
        <div>
          <Tooltip text="PostgreSQL">
            <Image
              src="/img/icons/postgresql.webp"
              width="40"
              height="40"
              alt="PostgreSQL"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="Html">
            <Image
              src="/img/icons/html.webp"
              width="40"
              height="40"
              alt="Html"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="Css">
            <Image
              src="/img/icons/css.webp"
              width="40"
              height="40"
              alt="Css"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="MySql">
            <Image
              src="/img/icons/mysql.webp"
              width="40"
              height="40"
              alt="MySql"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="Javascript">
            <Image
              src="/img/icons/js.webp"
              width="40"
              height="40"
              alt="Javascript"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="React">
            <Image
              src="/img/icons/react.webp"
              width="40"
              height="40"
              alt="React"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="React Native">
            <Image
              src="/img/icons/reactNative.webp"
              width="40"
              height="40"
              alt="React Native"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="Typescript">
            <Image
              src="/img/icons/ts.webp"
              width="40"
              height="40"
              alt="Typescript"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="Firebase">
            <Image
              src="/img/icons/firebase.webp"
              width="40"
              height="40"
              alt="Firebase"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="Git">
            <Image
              src="/img/icons/git.webp"
              width="40"
              height="40"
              alt="Git"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="Jira">
            <Image
              src="/img/icons/jira.webp"
              width="40"
              height="40"
              alt="Jira"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="Figma">
            <Image
              src="/img/icons/figma.webp"
              width="40"
              height="40"
              alt="Figma"
              loading="lazy"
            />
          </Tooltip>
        </div>
      </section>

      <footer className={styles.footer}>
        <h5>Copyright © Rafael Santana · {year} </h5>
        <ChangeColor />
      </footer>

      <BackToTheTop />
    </main>
  );
}
