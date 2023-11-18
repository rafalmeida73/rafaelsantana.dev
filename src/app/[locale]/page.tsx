import { BackToTheTop } from '@/components/BackToTheTop';
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
    <>
      <div className={styles.languages}>
        <LanguageIcon
          currentLocale={currentLocale}
          language="pt"
          alt={t('ptLanguage')}
        />
        <LanguageIcon
          currentLocale={currentLocale}
          language="en"
          alt={t('enLanguage')}
        />
      </div>
      <main className={styles.main}>
        <Container>
          <div className={styles.mainContent}>
            <ImageProfile />
            <ProfileInfo />
          </div>
        </Container>
      </main>

      <section className={styles.aboutMe}>
        <Container>
          <InfoCard>
            <h2>{t('aboutMe')}</h2>
            <p>{t('aboutMeDescription')}</p>
          </InfoCard>
        </Container>
      </section>

      <Container>
        <InfoCard>
          <section className={styles.education}>
            <h3>{t('academicFormation')}</h3>
            <div className={styles.educationContent}>
              <Info
                title={{
                  text: t('ads'),
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
            <h3>{t('experiences')}</h3>
            <div className={styles.jobsAndCoursesContent}>
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
                  text: t('fullStackDeveloper'),
                }}
                time={`Out/2023 - ${t('current')}`}
                description={{
                  text: 'MedSystems',
                  ariaLabel: 'MedSystems',
                  link: 'https://www.medsystems.com.br/',
                }}
              />
            </div>

            <h3>{t('courses')}</h3>

            <div className={styles.coursesContent}>
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
              />
              <Info
                title={{
                  text: t('factoryApp'),
                  link: 'https://fabricadeapps.club.hotmart.com/public/user-certificate/1f80f402-d6c6-4216-8c3b-781f3c7843b8/_',
                  ariaLabel: `${t('certificate')} ${t('factoryApp')}`,
                }}
                time={`95 ${t('hours')}`}
                description={{
                  text: 'Sujeito Programador',
                }}
              />
            </div>
            <div className={styles.centerGrid}>
              <Info
                title={{
                  text: t('reactNativePractice'),
                  link: 'https://www.udemy.com/certificate/UC-89fdfce6-5353-4336-a1f9-b815382adb64/',
                  ariaLabel: `${t('certificate')} ${t('reactNativePractice')}`,
                }}
                time={`41 ${t('hours')}`}
                description={{
                  text: 'Udemy',
                }}
              />
            </div>
          </section>
        </InfoCard>
      </Container>

      <section className={styles.projects}>
        <Container>
          <InfoCard>
            <h4>{t('projects')}</h4>
            <ProjectCard
              title="MedEntregas"
              description={t('medEntregas')}
              app
              ios="https://apps.apple.com/br/app/medentregas/id6471966535"
              android="https://play.google.com/store/apps/details?id=br.com.helpdesk.medsystems.app"
              images={[
                {
                  image: '/img/medEntregas.png',
                  text: 'MedEntregas logo',
                },
              ]}
              techs={['React Native', 'Styled Components', 'Express.JS']}
            />
            <ProjectCard
              title="Broto"
              description={t('broto')}
              app
              android="https://play.google.com/store/apps/details?id=broto.mobile.app"
              ios="https://apps.apple.com/br/app/broto/id1619769755"
              images={[
                {
                  image: '/img/broto.png',
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
              description={t('nt')}
              app
              android="https://play.google.com/store/apps/details?id=br.com.naturaldaterra.app"
              ios="https://apps.apple.com/br/app/natural-da-terra-novo/id1583935893"
              images={[
                {
                  image: '/img/nt.png',
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
              description={t('ht')}
              app
              android="https://play.google.com/store/apps/details?id=br.com.hortifruti.app"
              ios="https://apps.apple.com/br/app/hortifruti-novo/id1583936154"
              images={[
                {
                  image: '/img/ht.png',
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
              hasMockup
              title="Pokemon"
              description={t('pokemon')}
              images={[
                {
                  image: '/img/pokemon1.png',
                  text: t('splashScreen'),
                  mockup: true,
                },
                {
                  image: '/img/pokemon2.png',
                  text: t('pokemonInfoPage'),
                  mockup: true,
                },
                {
                  image: '/img/pokemon3.png',
                  text: t('initialPage'),
                  mockup: true,
                },
              ]}
              techs={['React Native', 'Styled Components', 'Firebase']}
            />
            <ProjectCard
              hasMockup
              title="Todo List"
              description={t('todoList')}
              images={[
                {
                  image: '/img/todo1.png',
                  text: t('initialPage'),
                  mockup: true,
                },
                {
                  image: '/img/todo2.png',
                  text: t('signInPage'),
                  mockup: true,
                },
                {
                  image: '/img/todo3.png',
                  text: t('signUpPage'),
                  mockup: true,
                },
                {
                  image: '/img/todo4.png',
                  text: t('emptyListPage'),
                  mockup: true,
                },
                {
                  image: '/img/todo6.png',
                  text: t('listPage'),
                  mockup: true,
                },
                {
                  image: '/img/todo5.png',
                  text: t('profilePage'),
                  mockup: true,
                },
              ]}
              techs={['React Native', 'Styled Components', 'Firebase']}
            />
            <ProjectCard
              title="Broken Out"
              description={t('brokenOut')}
              link="https://broken-out.vercel.app"
              images={[
                {
                  image: '/img/brokenOut1.png',
                  text: t('initialPage'),
                },
                {
                  image: '/img/brokenOut2.png',
                  text: t('aboutPage'),
                },
                {
                  image: '/img/brokenOut3.png',
                  text: t('gamesPage'),
                },
                {
                  image: '/img/brokenOut4.png',
                  text: t('selectedGamePage'),
                },
                {
                  image: '/img/brokenOut5.png',
                  text: t('signInPage'),
                },
                {
                  image: '/img/brokenOut6.png',
                  text: t('signUpPage'),
                },
              ]}
              techs={['React', 'Sass', 'Materialize']}
            />
            <ProjectCard
              title="High Performance"
              description={t('highPerformance')}
              link="https://highperformance.herokuapp.com/"
              images={[
                {
                  image: '/img/high1.png',
                  text: t('initialPage'),
                },
                {
                  image: '/img/high2.png',
                  text: t('aboutPage'),
                },
                {
                  image: '/img/high5.png',
                  text: t('reportsPage'),
                },
                {
                  image: '/img/high4.png',
                  text: t('signUpPage'),
                },
                {
                  image: '/img/high3.png',
                  text: t('signInPage'),
                },
              ]}
              techs={['HTML5 - ejs', 'Materialize', 'expressJS']}
            />
            <ProjectCard
              title="Rafael's Trips"
              description={t('rafaels')}
              images={[
                {
                  image: '/img/trip1.png',
                  text: t('initialPage'),
                },
                {
                  image: '/img/trip2.png',
                  text: t('salvadorPage'),
                },
                {
                  image: '/img/trip3.png',
                  text: t('saoPauloPage'),
                },
              ]}
              techs={['Next Js', 'Styled Components', 'leaflet']}
            />
            <ProjectCard
              title="Estética Rhoades"
              description={t('rhoades')}
              link="https://estetica-rhoades.vercel.app"
              images={[
                {
                  image: '/img/rhoades1.png',
                  text: t('initialPage'),
                },
                {
                  image: '/img/rhoades2.png',
                  text: t('aboutPage'),
                },
                {
                  image: '/img/rhoades4.png',
                  text: t('blogPage'),
                },
                {
                  image: '/img/rhoades5.png',
                  text: t('signInPage'),
                },
                {
                  image: '/img/rhoades3.png',
                  text: t('postsPage'),
                },
              ]}
              techs={['Javascript', 'Firebase', 'Materialize']}
            />
          </InfoCard>
        </Container>
      </section>

      <section className={styles.techs}>
        <h5>{t('techs')}</h5>
        <div>
          <Tooltip text="PostgreSQL">
            <Image
              src="/img/postgresql.webp"
              width="40"
              height="40"
              alt="PostgreSQL"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="Html">
            <Image
              src="/img/html.webp"
              width="40"
              height="40"
              alt="Html"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="Css">
            <Image
              src="/img/css.webp"
              width="40"
              height="40"
              alt="Css"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="MySql">
            <Image
              src="/img/mysql.webp"
              width="40"
              height="40"
              alt="MySql"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="Javascript">
            <Image
              src="/img/js.png"
              width="40"
              height="40"
              alt="Javascript"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="React">
            <Image
              src="/img/react.webp"
              width="40"
              height="40"
              alt="React"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="React Native">
            <Image
              src="/img/reactNative.png"
              width="40"
              height="40"
              alt="React Native"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="Typescript">
            <Image
              src="/img/ts.png"
              width="40"
              height="40"
              alt="Typescript"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="Firebase">
            <Image
              src="/img/firebase.webp"
              width="40"
              height="40"
              alt="Firebase"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="Git">
            <Image
              src="/img/git.webp"
              width="40"
              height="40"
              alt="Git"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="Jira">
            <Image
              src="/img/jira.png"
              width="40"
              height="40"
              alt="Jira"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip text="Figma">
            <Image
              src="/img/figma.png"
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
    </>
  );
}
