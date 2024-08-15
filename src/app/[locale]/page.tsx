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
import { ProjectCard } from '@/components/ProjectCard';
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

      <section className={styles.projects}>
        <Container>
          <InfoCard>
            <h4>{t('projects.title')}</h4>
            <Suspense fallback={null}>
              <ProjectCard
                title="Broto"
                description={t('projects.broto.description')}
                app
                android="https://play.google.com/store/apps/details?id=broto.mobile.app"
                ios="https://apps.apple.com/br/app/broto/id1619769755"
                images={[
                  {
                    image: '/img/broto/broto.webp',
                    text: 'Broto logo',
                  },
                ]}
                techs={[
                  'React Native',
                  'Styled Components',
                  'Firebase',
                  'Magento',
                  'Graphql',
                ]}
              />
            </Suspense>

            <Suspense fallback={null}>
              <ProjectCard
                title="Natural da terra"
                description={t('projects.nt.description')}
                app
                android="https://play.google.com/store/apps/details?id=br.com.naturaldaterra.app"
                ios="https://apps.apple.com/br/app/natural-da-terra-novo/id1583935893"
                images={[
                  {
                    image: '/img/naturalTerra/nt.webp',
                    text: 'Natural da terra logo',
                  },
                ]}
                techs={[
                  'React Native',
                  'Styled Components',
                  'Firebase',
                  'Magento',
                  'Graphql',
                ]}
              />
            </Suspense>

            <Suspense fallback={null}>
              <ProjectCard
                title="Hortifruti"
                description={t('projects.ht.description')}
                app
                android="https://play.google.com/store/apps/details?id=br.com.hortifruti.app"
                ios="https://apps.apple.com/br/app/hortifruti-novo/id1583936154"
                images={[
                  {
                    image: '/img/hortifruti/ht.webp',
                    text: 'Hortifruti Logo',
                  },
                ]}
                techs={[
                  'React Native',
                  'Styled Components',
                  'Firebase',
                  'Magento',
                  'Graphql',
                ]}
              />
            </Suspense>

            <Suspense fallback={null}>
              <ProjectCard
                title="MedSales"
                description={t('projects.medSales.description')}
                app
                ios="https://apps.apple.com/br/app/medsales/id6471970812"
                android="https://play.google.com/store/apps/details?id=com.medsystems.propostasvendas"
                images={[
                  {
                    image: '/img/medSales/medSales.webp',
                    text: 'MedSales logo',
                  },
                ]}
                techs={['React Native', 'Styled Components']}
              />
            </Suspense>

            <Suspense fallback={null}>
              <ProjectCard
                title="MedInventory"
                description={t('projects.medInventory.description')}
                app
                ios="https://apps.apple.com/br/app/medinventory/id6474357759"
                android="https://play.google.com/store/apps/details?id=br.com.helpdesk.medsystems.medinventory"
                images={[
                  {
                    image: '/img/medInventory/medInventory.webp',
                    text: 'MedInventory logo',
                  },
                ]}
                techs={['React Native', 'Styled Components']}
              />
            </Suspense>

            <Suspense fallback={null}>
              <ProjectCard
                title="MedEntregas"
                description={t('projects.medEntregas.description')}
                app
                ios="https://apps.apple.com/br/app/medentregas/id6471966535"
                android="https://play.google.com/store/apps/details?id=br.com.helpdesk.medsystems.app"
                images={[
                  {
                    image: '/img/medEntregas/medEntregas.webp',
                    text: 'MedEntregas logo',
                  },
                ]}
                techs={['React Native', 'Styled Components']}
              />
            </Suspense>

            <Suspense fallback={null}>
              <ProjectCard
                title="MedStock"
                description={t('projects.medStock.description')}
                link="https://comunidade.medsystems.com.br/"
                images={[
                  {
                    image: '/img/medStock/medStock.webp',
                    text: 'MedStock logo',
                  },
                ]}
                techs={[
                  'Next.js',
                  'MUI',
                  'Firebase',
                  'React Query',
                  'TypeScript',
                  'React Hook Form',
                ]}
              />
            </Suspense>

            <Suspense fallback={null}>
              <ProjectCard
                hasMockup
                title="Pokemon"
                description={t('projects.pokemon.description')}
                images={[
                  {
                    image: '/img/pokemon/pokemon1.webp',
                    text: t('projects.splashScreen'),
                    mockup: true,
                  },
                  {
                    image: '/img/pokemon/pokemon2.webp',
                    text: t('projects.pokemon.infoPage'),
                    mockup: true,
                  },
                  {
                    image: '/img/pokemon/pokemon3.webp',
                    text: t('projects.initialPage'),
                    mockup: true,
                  },
                ]}
                techs={['React Native', 'Styled Components', 'Firebase']}
              />
            </Suspense>

            <Suspense fallback={null}>
              <ProjectCard
                hasMockup
                title="Todo List"
                description={t('projects.todoList.description')}
                images={[
                  {
                    image: '/img/todo/todo1.webp',
                    text: t('projects.initialPage'),
                    mockup: true,
                  },
                  {
                    image: '/img/todo/todo2.webp',
                    text: t('projects.signInPage'),
                    mockup: true,
                  },
                  {
                    image: '/img/todo/todo3.webp',
                    text: t('projects.signUpPage'),
                    mockup: true,
                  },
                  {
                    image: '/img/todo/todo4.webp',
                    text: t('projects.todoList.emptyListPage'),
                    mockup: true,
                  },
                  {
                    image: '/img/todo/todo6.webp',
                    text: t('projects.todoList.listPage'),
                    mockup: true,
                  },
                  {
                    image: '/img/todo/todo5.webp',
                    text: t('projects.todoList.profilePage'),
                    mockup: true,
                  },
                ]}
                techs={['React Native', 'Styled Components', 'Firebase']}
              />
            </Suspense>

            <Suspense fallback={null}>
              <ProjectCard
                title="Broken Out"
                description={t('projects.brokenOut.description')}
                link="https://broken-out.vercel.app"
                images={[
                  {
                    image: '/img/brokenOut/brokenOut1.webp',
                    text: t('projects.initialPage'),
                  },
                  {
                    image: '/img/brokenOut/brokenOut2.webp',
                    text: t('projects.aboutPage'),
                  },
                  {
                    image: '/img/brokenOut/brokenOut3.webp',
                    text: t('projects.brokenOut.gamesPage'),
                  },
                  {
                    image: '/img/brokenOut/brokenOut4.webp',
                    text: t('projects.brokenOut.selectedGamePage'),
                  },
                  {
                    image: '/img/brokenOut/brokenOut5.webp',
                    text: t('projects.signInPage'),
                  },
                  {
                    image: '/img/brokenOut/brokenOut6.webp',
                    text: t('projects.signUpPage'),
                  },
                ]}
                techs={['React', 'Sass', 'Materialize']}
              />
            </Suspense>

            <Suspense fallback={null}>
              <ProjectCard
                title="High Performance"
                description={t('projects.highPerformance.description')}
                link="https://highperformance.herokuapp.com/"
                images={[
                  {
                    image: '/img/highPerformance/high1.webp',
                    text: t('projects.initialPage'),
                  },
                  {
                    image: '/img/highPerformance/high2.webp',
                    text: t('projects.aboutPage'),
                  },
                  {
                    image: '/img/highPerformance/high5.webp',
                    text: t('projects.highPerformance.reportsPage'),
                  },
                  {
                    image: '/img/highPerformance/high4.webp',
                    text: t('projects.signUpPage'),
                  },
                  {
                    image: '/img/highPerformance/high3.webp',
                    text: t('projects.signInPage'),
                  },
                ]}
                techs={['HTML5 - ejs', 'Materialize', 'expressJS']}
              />
            </Suspense>

            <Suspense fallback={null}>
              <ProjectCard
                title="Rafael's Trips"
                description={t('projects.rafaels.description')}
                images={[
                  {
                    image: '/img/trips/trip1.webp',
                    text: t('projects.initialPage'),
                  },
                  {
                    image: '/img/trips/trip2.webp',
                    text: t('projects.rafaels.salvadorPage'),
                  },
                  {
                    image: '/img/trips/trip3.webp',
                    text: t('projects.rafaels.saoPauloPage'),
                  },
                ]}
                techs={['Next Js', 'Styled Components', 'leaflet']}
              />
            </Suspense>

            <Suspense fallback={null}>
              <ProjectCard
                title="Estética Rhoades"
                description={t('projects.rhoades.description')}
                link="https://estetica-rhoades.vercel.app"
                images={[
                  {
                    image: '/img/rhoades/rhoades1.webp',
                    text: t('projects.initialPage'),
                  },
                  {
                    image: '/img/rhoades/rhoades2.webp',
                    text: t('projects.aboutPage'),
                  },
                  {
                    image: '/img/rhoades/rhoades4.webp',
                    text: t('projects.rhoades.blogPage'),
                  },
                  {
                    image: '/img/rhoades/rhoades5.webp',
                    text: t('projects.signInPage'),
                  },
                  {
                    image: '/img/rhoades/rhoades3.webp',
                    text: t('projects.rhoades.postsPage'),
                  },
                ]}
                techs={['Javascript', 'Firebase', 'Materialize']}
              />
            </Suspense>
          </InfoCard>
        </Container>
      </section>

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
        <Suspense>
          <ChangeColor />
        </Suspense>
      </footer>

      <BackToTheTop />
    </main>
  );
}
