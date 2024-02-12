import { BackToTheTop } from '@/components/BackToTheTop';
import { Canvas } from '@/components/Canvas';
import { ChangeColor } from '@/components/ChangeColor';
import { Container } from '@/components/Container';
import GithubInfo from '@/components/GithubInfo';
import { ImageProfile } from '@/components/ImageProfile';
import { Info } from '@/components/Info';
import InfoCard from '@/components/InfoCard';
import { LanguageIcon } from '@/components/LanguageIcon';
import ProfileInfo from '@/components/ProfileInfo';
import { ProjectCard } from '@/components/ProjectCard';
import { Tooltip } from '@/components/ToolTip';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';

export default function Home() {
  const t = useTranslations('Home');
  const currentLocale = useLocale();

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
            <ProfileInfo />
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

          <section className={styles.jobsAndCourses}>
            <h3>{t('experiences.title')}</h3>
            <div className={styles.jobsAndCoursesContent}>
              <Info
                title={{
                  text: t('experiences.valiant.title'),
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
                  text: t('experiences.webjump.title'),
                }}
                time="Set/2021 - Jul/2023"
                description={{
                  text: 'Web Jump',
                  ariaLabel: 'Web Jump',
                  link: 'https://webjump.com.br/',
                }}
              />
            </div>

            <div className={styles.centerGrid}>
              <Info
                title={{
                  text: t('experiences.medsystems.title'),
                }}
                time={`Out/2023 - ${t('experiences.medsystems.current')}`}
                description={{
                  text: 'MedSystems',
                  ariaLabel: 'MedSystems',
                  link: 'https://www.medsystems.com.br/',
                }}
              />
            </div>

            <h3>{t('courses.title')}</h3>

            <div className={styles.coursesContent}>
              <Info
                title={{
                  text: 'Web Full Stack Node',
                  link: 'https://drive.google.com/file/d/1i-797GuLtIlLSNEbPE6gFIU9RRjS1JIv/view?usp=sharing',
                  ariaLabel: `${t('courses.certificate')} Web Full Stack Node`,
                }}
                time={`185 ${t('courses.hours')}`}
                description={{
                  text: 'Digital House',
                }}
              />
              <Info
                title={{
                  text: t('courses.english'),
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
                  ariaLabel: `${t('courses.certificate')} Microsoft Excel`,
                }}
                time={`11 ${t('courses.hours')}`}
                description={{
                  text: 'Udemy',
                }}
              />
              <Info
                title={{
                  text: t('courses.htmlAndCss'),
                  link: 'https://drive.google.com/file/d/1b9UyZWeGBx43Gm_q0H6wvBbE9eLNOjwl/view?usp=sharing',
                  ariaLabel: `${t('courses.certificate')} ${t(
                    'courses.htmlAndCss',
                  )}`,
                }}
                time={`24 ${t('courses.hours')}`}
                description={{
                  text: 'Fundação Bradesco',
                }}
              />
              <Info
                title={{
                  text: t('courses.modernWeb'),
                  link: 'https://www.udemy.com/certificate/UC-N4JLM3OE/',
                  ariaLabel: `${t('courses.certificate')} ${t(
                    'courses.modernWeb',
                  )}`,
                }}
                time={`76 ${t('courses.hours')}`}
                description={{
                  text: 'Udemy',
                }}
              />
              <Info
                title={{
                  text: t('courses.sql'),
                  link: 'https://www.udemy.com/certificate/UC-6RK781ZN/',
                  ariaLabel: `${t('courses.certificate')} ${t('courses.sql')}`,
                }}
                time={`36 ${t('courses.hours')}`}
                description={{
                  text: 'Udemy',
                }}
              />
              <Info
                title={{
                  text: t('courses.reactInPractive'),
                  link: 'https://www.udemy.com/certificate/UC-5d02fcb1-33b9-4880-abdc-2e2a420df627/',
                  ariaLabel: `${t('courses.certificate')} ${t(
                    'courses.reactInPractive',
                  )}`,
                }}
                time={`18 ${t('courses.hours')}`}
                description={{
                  text: 'Udemy',
                }}
              />
              <Info
                title={{
                  text: t('courses.mobileApps'),
                  link: 'https://www.udemy.com/certificate/UC-fec333ae-cced-400f-ad23-e734934d4f71/',
                  ariaLabel: `${t('courses.certificate')} ${t(
                    'courses.mobileApps',
                  )}`,
                }}
                time={`31 ${t('courses.hours')}`}
                description={{
                  text: 'Udemy',
                }}
              />
              <Info
                title={{
                  text: t('courses.learnNext'),
                  link: 'https://www.udemy.com/certificate/UC-408ca299-98c6-4653-a05e-8d4a6fb61b21/',
                  ariaLabel: `${t('courses.certificate')} ${t(
                    'courses.learnNext',
                  )}`,
                }}
                time={`9 ${t('courses.hours')}`}
                description={{
                  text: 'Udemy',
                }}
              />
              <Info
                title={{
                  text: t('courses.igniteRn'),
                  link: 'https://app.rocketseat.com.br/certificates/fece1ed0-e703-4253-9b39-b667120b0a32',
                  ariaLabel: `${t('courses.certificate')} ${t(
                    'courses.igniteRn',
                  )}`,
                }}
                time={`100 ${t('courses.hours')}`}
                description={{
                  text: 'Rocketseat',
                }}
              />
              <Info
                title={{
                  text: t('courses.igniteR'),
                  link: 'https://app.rocketseat.com.br/certificates/14a5304c-b6bb-43aa-9d97-db267aa8c405',
                  ariaLabel: `${t('courses.certificate')} ${t(
                    'courses.igniteRn',
                  )}`,
                }}
                time={`100 ${t('courses.hours')}`}
                description={{
                  text: 'Rocketseat',
                }}
              />
              <Info
                title={{
                  text: t('courses.factoryApp'),
                  link: 'https://fabricadeapps.club.hotmart.com/public/user-certificate/1f80f402-d6c6-4216-8c3b-781f3c7843b8/_',
                  ariaLabel: `${t('courses.certificate')} ${t(
                    'courses.factoryApp',
                  )}`,
                }}
                time={`95 ${t('courses.hours')}`}
                description={{
                  text: 'Sujeito Programador',
                }}
              />
              <Info
                title={{
                  text: t('courses.reactNativePractice'),
                  link: 'https://www.udemy.com/certificate/UC-89fdfce6-5353-4336-a1f9-b815382adb64/',
                  ariaLabel: `${t('courses.certificate')} ${t(
                    'courses.reactNativePractice',
                  )}`,
                }}
                time={`41 ${t('courses.hours')}`}
                description={{
                  text: 'Udemy',
                }}
              />
              <Info
                title={{
                  text: t('courses.detox'),
                  link: 'https://www.udemy.com/certificate/UC-900bef79-7462-4ffc-90eb-3516e553a6e1/',
                  ariaLabel: `${t('courses.certificate')} ${t(
                    'courses.detox',
                  )}`,
                }}
                time={`14 ${t('courses.hours')}`}
                description={{
                  text: 'Udemy',
                }}
              />
            </div>
            <div className={styles.centerGrid}>
              <Info
                title={{
                  text: t('courses.threeJourney'),
                  link: 'https://threejs-journey.com/certificate/view/37128',
                  ariaLabel: `${t('courses.certificate')} ${t(
                    'courses.threeJourney',
                  )}`,
                }}
                time={`70 ${t('courses.hours')}`}
                description={{
                  text: t('courses.threeJourney'),
                }}
              />
            </div>
          </section>
        </InfoCard>
      </Container>

      <section className={styles.projects}>
        <Container>
          <InfoCard>
            <h4>{t('projects.title')}</h4>

            <ProjectCard
              title="Broto"
              description={t('projects.broto.description')}
              app
              android="https://play.google.com/store/apps/details?id=broto.mobile.app"
              ios="https://apps.apple.com/br/app/broto/id1619769755"
              images={[
                {
                  image: '/img/broto/broto.png',
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
            <ProjectCard
              title="Natural da terra"
              description={t('projects.nt.description')}
              app
              android="https://play.google.com/store/apps/details?id=br.com.naturaldaterra.app"
              ios="https://apps.apple.com/br/app/natural-da-terra-novo/id1583935893"
              images={[
                {
                  image: '/img/naturalTerra/nt.png',
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
            <ProjectCard
              title="Hortifruti"
              description={t('projects.ht.description')}
              app
              android="https://play.google.com/store/apps/details?id=br.com.hortifruti.app"
              ios="https://apps.apple.com/br/app/hortifruti-novo/id1583936154"
              images={[
                {
                  image: '/img/hortifruti/ht.png',
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
            <ProjectCard
              title="MedInventory"
              description={t('projects.medInventory.description')}
              app
              ios="https://apps.apple.com/br/app/medinventory/id6474357759"
              android="https://play.google.com/store/apps/details?id=br.com.helpdesk.medsystems.medinventory"
              images={[
                {
                  image: '/img/medInventory/medInventory.png',
                  text: 'MedInventory logo',
                },
              ]}
              techs={['React Native', 'Styled Components', 'Express.JS']}
            />
            <ProjectCard
              title="MedEntregas"
              description={t('projects.medEntregas.description')}
              app
              ios="https://apps.apple.com/br/app/medentregas/id6471966535"
              android="https://play.google.com/store/apps/details?id=br.com.helpdesk.medsystems.app"
              images={[
                {
                  image: '/img/medEntregas/medEntregas.png',
                  text: 'MedEntregas logo',
                },
              ]}
              techs={['React Native', 'Styled Components', 'Express.JS']}
            />
            <ProjectCard
              title="MedSales"
              description={t('projects.medSales.description')}
              app
              ios="https://apps.apple.com/br/app/medsales/id6471970812"
              android="https://play.google.com/store/apps/details?id=com.medsystems.propostasvendas"
              images={[
                {
                  image: '/img/medSales/medSales.png',
                  text: 'MedSales logo',
                },
              ]}
              techs={['React Native', 'Styled Components', 'Express.JS']}
            />
            <ProjectCard
              hasMockup
              title="Pokemon"
              description={t('projects.pokemon.description')}
              images={[
                {
                  image: '/img/pokemon/pokemon1.png',
                  text: t('projects.splashScreen'),
                  mockup: true,
                },
                {
                  image: '/img/pokemon/pokemon2.png',
                  text: t('projects.pokemon.infoPage'),
                  mockup: true,
                },
                {
                  image: '/img/pokemon/pokemon3.png',
                  text: t('projects.initialPage'),
                  mockup: true,
                },
              ]}
              techs={['React Native', 'Styled Components', 'Firebase']}
            />
            <ProjectCard
              hasMockup
              title="Todo List"
              description={t('projects.todoList.description')}
              images={[
                {
                  image: '/img/todo/todo1.png',
                  text: t('projects.initialPage'),
                  mockup: true,
                },
                {
                  image: '/img/todo/todo2.png',
                  text: t('projects.signInPage'),
                  mockup: true,
                },
                {
                  image: '/img/todo/todo3.png',
                  text: t('projects.signUpPage'),
                  mockup: true,
                },
                {
                  image: '/img/todo/todo4.png',
                  text: t('projects.todoList.emptyListPage'),
                  mockup: true,
                },
                {
                  image: '/img/todo/todo6.png',
                  text: t('projects.todoList.listPage'),
                  mockup: true,
                },
                {
                  image: '/img/todo/todo5.png',
                  text: t('projects.todoList.profilePage'),
                  mockup: true,
                },
              ]}
              techs={['React Native', 'Styled Components', 'Firebase']}
            />
            <ProjectCard
              title="Broken Out"
              description={t('projects.brokenOut.description')}
              link="https://broken-out.vercel.app"
              images={[
                {
                  image: '/img/brokenOut/brokenOut1.png',
                  text: t('projects.initialPage'),
                },
                {
                  image: '/img/brokenOut/brokenOut2.png',
                  text: t('projects.aboutPage'),
                },
                {
                  image: '/img/brokenOut/brokenOut3.png',
                  text: t('projects.brokenOut.gamesPage'),
                },
                {
                  image: '/img/brokenOut/brokenOut4.png',
                  text: t('projects.brokenOut.selectedGamePage'),
                },
                {
                  image: '/img/brokenOut/brokenOut5.png',
                  text: t('projects.signInPage'),
                },
                {
                  image: '/img/brokenOut/brokenOut6.png',
                  text: t('projects.signUpPage'),
                },
              ]}
              techs={['React', 'Sass', 'Materialize']}
            />
            <ProjectCard
              title="High Performance"
              description={t('projects.highPerformance.description')}
              link="https://highperformance.herokuapp.com/"
              images={[
                {
                  image: '/img/highPerformance/high1.png',
                  text: t('projects.initialPage'),
                },
                {
                  image: '/img/highPerformance/high2.png',
                  text: t('projects.aboutPage'),
                },
                {
                  image: '/img/highPerformance/high5.png',
                  text: t('projects.highPerformance.reportsPage'),
                },
                {
                  image: '/img/highPerformance/high4.png',
                  text: t('projects.signUpPage'),
                },
                {
                  image: '/img/highPerformance/high3.png',
                  text: t('projects.signInPage'),
                },
              ]}
              techs={['HTML5 - ejs', 'Materialize', 'expressJS']}
            />
            <ProjectCard
              title="Rafael's Trips"
              description={t('projects.rafaels.description')}
              images={[
                {
                  image: '/img/trips/trip1.png',
                  text: t('projects.initialPage'),
                },
                {
                  image: '/img/trips/trip2.png',
                  text: t('projects.rafaels.salvadorPage'),
                },
                {
                  image: '/img/trips/trip3.png',
                  text: t('projects.rafaels.saoPauloPage'),
                },
              ]}
              techs={['Next Js', 'Styled Components', 'leaflet']}
            />
            <ProjectCard
              title="Estética Rhoades"
              description={t('projects.rhoades.description')}
              link="https://estetica-rhoades.vercel.app"
              images={[
                {
                  image: '/img/rhoades/rhoades1.png',
                  text: t('projects.initialPage'),
                },
                {
                  image: '/img/rhoades/rhoades2.png',
                  text: t('projects.aboutPage'),
                },
                {
                  image: '/img/rhoades/rhoades4.png',
                  text: t('projects.rhoades.blogPage'),
                },
                {
                  image: '/img/rhoades/rhoades5.png',
                  text: t('projects.signInPage'),
                },
                {
                  image: '/img/rhoades/rhoades3.png',
                  text: t('projects.rhoades.postsPage'),
                },
              ]}
              techs={['Javascript', 'Firebase', 'Materialize']}
            />
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
              src="/img/icons/js.png"
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
              src="/img/icons/reactNative.png"
              width="40"
              height="40"
              alt="React Native"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="Typescript">
            <Image
              src="/img/icons/ts.png"
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
              src="/img/icons/jira.png"
              width="40"
              height="40"
              alt="Jira"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="Figma">
            <Image
              src="/img/icons/figma.png"
              width="40"
              height="40"
              alt="Figma"
              loading="lazy"
            />
          </Tooltip>
        </div>
      </section>

      <footer className={styles.footer}>
        <h5>Copyright © Rafael Santana · 2023 </h5>
        <ChangeColor />

        <GithubInfo />
      </footer>

      <BackToTheTop />
    </main>
  );
}
