import { BackToTheTop } from '@/components/BackToTheTop';
import { ChangeColor } from '@/components/ChangeColor';
import { ImageProfile } from '@/components/ImageProfile';
import { Info } from '@/components/Info';
import InfoCard from '@/components/InfoCard';
import ProfileInfo from '@/components/ProfileInfo';
import { ProjectCard } from '@/components/ProjectCard';
import { Grid, Container, Tooltip } from '@mui/material';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <ImageProfile />
            </Grid>
            <Grid item xs={6}>
              <ProfileInfo />
            </Grid>
          </Grid>
        </Container>
      </main>

      <section className={styles.aboutMe}>
        <Container>
          <InfoCard>
            <h2>SOBRE MIM</h2>
            <p>
              Eu sou o Rafael Santana, Desenvolvedor Mobile e formado em Análise
              e Desenvolvimento de Sistemas. Focado em desenvolvimento mobile
              procuro sempre escrever código bem projetado, testável, eficiente
              usando as melhores práticas atuais em desenvolvimento mobile e
              aprender novas tecnologias. Se você está procurando um
              desenvolvedor mobile talentoso e dedicado para ajudar a levar sua
              ideia de aplicativo para o próximo nível, estou pronto para
              conversar com você!
            </p>
          </InfoCard>
        </Container>
      </section>

      <Container>
        <InfoCard>
          <section className={styles.education}>
            <h3>Educação</h3>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Info
                  title={{
                    text: 'Full-stack Developer',
                  }}
                  time="2022 - 2023"
                  description={{ text: 'SENAC' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Info
                  title={{
                    text: 'Análise e Desenvolvimento de Sistemas',
                  }}
                  time="2019 - 2021"
                  description={{ text: 'Uninove' }}
                />
              </Grid>
            </Grid>
          </section>

          <section className={styles.jobsAndCourses}>
            <h3>Experiências</h3>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Info
                  title={{
                    text: 'Web Full Stack Node',
                  }}
                  time="Fev/2021 - Set/2021"
                  description={{
                    text: 'Valiant Group',
                    ariaLabel: 'Valiant Group',
                    link: 'https://valiantgroup.com.br/',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Info
                  title={{
                    text: 'Inglês',
                  }}
                  time="2016-2018"
                  description={{
                    text: 'Cidadão Pró-Mundo',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Info
                  title={{
                    text: 'Microsoft Excel',
                    link: 'https://www.udemy.com/certificate/UC-J026Q6DE/',
                    ariaLabel: `Certificado Microsoft Excel`,
                  }}
                  time="11 horas"
                  description={{
                    text: 'Udemy',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Info
                  title={{
                    text: 'HTML e CSS na prática',
                    link: 'https://drive.google.com/file/d/1b9UyZWeGBx43Gm_q0H6wvBbE9eLNOjwl/view?usp=sharing',
                    ariaLabel: `Certificado HTML e CSS na prática`,
                  }}
                  time="24 horas"
                  description={{
                    text: 'Fundação Bradesco',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Info
                  title={{
                    text: 'Web Moderno com JavaScript',
                    link: 'https://www.udemy.com/certificate/UC-N4JLM3OE/',
                    ariaLabel: `Certificado Web Moderno com JavaScript`,
                  }}
                  time="76 horas"
                  description={{
                    text: 'Udemy',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Info
                  title={{
                    text: 'Banco de dados SQL',
                    link: 'https://www.udemy.com/certificate/UC-6RK781ZN/',
                    ariaLabel: `Certificado Banco de dados SQL`,
                  }}
                  time="36 horas"
                  description={{
                    text: 'Udemy',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Info
                  title={{
                    text: 'React Js do zero ao avançado na pratica',
                    link: 'https://www.udemy.com/certificate/UC-0YQZQZ7Y/',
                    ariaLabel: `Certificado React Js do zero ao avançado na pratica`,
                  }}
                  time="18 horas"
                  description={{
                    text: 'Udemy',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Info
                  title={{
                    text: 'Aplicativos mobile do zero com React Native e Redux',
                    link: 'https://www.udemy.com/certificate/UC-fec333ae-cced-400f-ad23-e734934d4f71/',
                    ariaLabel: `Certificado Aplicativos mobile do zero com React Native e Redux`,
                  }}
                  time="31 horas"
                  description={{
                    text: 'Udemy',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Info
                  title={{
                    text: 'Aprenda NextJS, GraphQL e Leaflet na prática!',
                    link: 'https://www.udemy.com/certificate/UC-408ca299-98c6-4653-a05e-8d4a6fb61b21/',
                    ariaLabel: `Certificado Aprenda NextJS, GraphQL e Leaflet na prática!`,
                  }}
                  time="9 horas"
                  description={{
                    text: 'Udemy',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Info
                  title={{
                    text: 'Trilha React Native do programa Ignite',
                    link: 'https://app.rocketseat.com.br/api/certificates/pdf/fece1ed0-e703-4253-9b39-b667120b0a32',
                    ariaLabel: `Certificado Trilha React Native do programa Ignite`,
                  }}
                  time="100 horas"
                  description={{
                    text: 'Rocketseat',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Info
                  title={{
                    text: 'Trilha React do programa Ignite',
                    link: 'https://app.rocketseat.com.br/api/certificates/pdf/14a5304c-b6bb-43aa-9d97-db267aa8c405',
                    ariaLabel: `Certificado Trilha React do programa Ignite`,
                  }}
                  time="100 horas"
                  description={{
                    text: 'Rocketseat',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Info
                  title={{
                    text: 'Fábrica de aplicativos - React Native',
                    link: 'https://fabricadeapps.club.hotmart.com/public/user-certificate/1f80f402-d6c6-4216-8c3b-781f3c7843b8/_',
                    ariaLabel: `Certificado Fábrica de aplicativos - React Native`,
                  }}
                  time="95 horas"
                  description={{
                    text: 'Sujeito Programador',
                  }}
                />
              </Grid>
            </Grid>
          </section>
        </InfoCard>
      </Container>

      <section className={styles.projects}>
        <Container>
          <InfoCard>
            <h4>Projetos</h4>
            <ProjectCard
              title="Broto"
              description="O Broto é um aplicativo, onde você encontra máquinas, implementos, equipamentos de energia, irrigação e armazenagem, serviços, insumos e tecnologias voltadas à agricultura de precisão."
              app
              android="https://play.google.com/store/apps/details?id=broto.mobile.app"
              ios="https://apps.apple.com/br/app/broto/id1619769755"
              images={[
                {
                  image: '/img/broto.png',
                  text: 'Broto logo',
                },
              ]}
            />
            <ProjectCard
              title="Natural da terra"
              description="O Natural da terra é um aplicativo de ecommerce do ramo de hortifrutigranjeiro, desenvolvido com React native."
              app
              android="https://play.google.com/store/apps/details?id=br.com.naturaldaterra.app"
              ios="https://apps.apple.com/br/app/natural-da-terra-novo/id1583935893"
              images={[
                {
                  image: '/img/nt.png',
                  text: 'Natural da terra logo',
                },
              ]}
            />
            <ProjectCard
              title="Hortifruti"
              description="O Hortifruti é um aplicativo de ecommerce do ramo de hortifrutigranjeiro, desenvolvido com React native."
              app
              android="https://play.google.com/store/apps/details?id=br.com.hortifruti.app"
              ios="https://apps.apple.com/br/app/hortifruti-novo/id1583936154"
              images={[
                {
                  image: '/img/ht.png',
                  text: 'Hortifruti Logo',
                },
              ]}
            />
            <ProjectCard
              hasMockup
              title="Pokemon"
              description="Pokemon é app desenvolvido com React Native, que tem como objetivo principal, listar todos os pokemons, mostrar suas informações e que seja possível realizar pesquisa via imagens."
              images={[
                {
                  image: '/img/pokemon1.png',
                  text: 'Página de carregamento do aplicativo.',
                  mockup: true,
                },
                {
                  image: '/img/pokemon2.png',
                  text: '"Página que lista as informações do pokemon escolhido."',
                  mockup: true,
                },
                {
                  image: '/img/pokemon3.png',
                  text: 'Página inical',
                  mockup: true,
                },
              ]}
            />
            <ProjectCard
              hasMockup
              title="Todo List"
              description="O Todo List é um aplicativo desenvolvido com React native que tem como objetivo principal, criar uma lista de tarefas, onde o usuário pode adicionar, editar, excluir e marcar como concluída"
              images={[
                {
                  image: '/img/todo1.png',
                  text: 'Página inical',
                  mockup: true,
                },
                {
                  image: '/img/todo2.png',
                  text: 'Página login',
                  mockup: true,
                },
                {
                  image: '/img/todo3.png',
                  text: 'Página cadastro',
                  mockup: true,
                },
                {
                  image: '/img/todo4.png',
                  text: 'Página com lista vazia',
                  mockup: true,
                },
                {
                  image: '/img/todo6.png',
                  text: 'Página com lista vazia',
                  mockup: true,
                },
                {
                  image: '/img/todo5.png',
                  text: 'Página de perfil',
                  mockup: true,
                },
              ]}
            />
            <ProjectCard
              title="Broken Out"
              description="O Broken Out é um site que visa facilitar o acesso a informações de jogos, seja do celular, console ou desktop. Disponibilizamos uma imensa variedade de jogos cadastrados. Contudo, você pode adicionar qualquer jogo que não esteja cadastrado. Ajudando assim, outros usuários a encontrar o jogo desejado no site."
              link="https://broken-out.vercel.app"
              images={[
                {
                  image: '/img/brokenOut1.png',
                  text: 'Página inical',
                },
                {
                  image: '/img/brokenOut2.png',
                  text: 'Página sobre',
                },
                {
                  image: '/img/brokenOut3.png',
                  text: 'Página jogos',
                },
                {
                  image: '/img/brokenOut4.png',
                  text: 'Página jogo selecionado',
                },
                {
                  image: '/img/brokenOut5.png',
                  text: 'Página login',
                },
                {
                  image: '/img/brokenOut6.png',
                  text: 'Página cadastro',
                },
              ]}
            />
            <ProjectCard
              title="High Performance"
              description="O projeto High Performance é um app voltado para educadores físicos que desejam uma ferramenta de interação com seus alunos de uma maneira simples. O objetivo é a construção de uma plataforma onde o usuário tenha total controle dos seus alunos, com uma agenda de aulas, além de uma plataforma onde seja possível também um controle financeiro."
              link="https://highperformance.herokuapp.com/"
              images={[
                {
                  image: '/img/high1.png',
                  text: 'Página inical',
                },
                {
                  image: '/img/high2.png',
                  text: 'Página sobre',
                },
                {
                  image: '/img/high5.png',
                  text: 'Página de relatórios',
                },
                {
                  image: '/img/high4.png',
                  text: 'Página cadastro',
                },
                {
                  image: '/img/high3.png',
                  text: 'Página login',
                },
              ]}
            />
            <ProjectCard
              title="Rafael's Trips"
              description="O projeto Rafael's Trips é um para relembrar os lugares que eu já estive pelo mundo!"
              images={[
                {
                  image: '/img/trip1.png',
                  text: 'Página inical',
                },
                {
                  image: '/img/trip2.png',
                  text: 'Página Salvador',
                },
                {
                  image: '/img/trip3.png',
                  text: 'Página São Paulo',
                },
              ]}
            />
            <ProjectCard
              title="Estética Rhoades"
              description="O projeto Estética Rhoades é um web site que tem como o objetivo de apresentar um portifólio de uma determindada profissional de estética e um blog para estudante e profissionais da área de estética. Contudo, de uma forma bem simples em que até um entusiasta da área possa entender."
              link="https://estetica-rhoades.vercel.app"
              images={[
                {
                  image: '/img/rhoades1.png',
                  text: 'Página inical',
                },
                {
                  image: '/img/rhoades2.png',
                  text: 'Página sobre',
                },
                {
                  image: '/img/rhoades4.png',
                  text: 'Página do Blog',
                },
                {
                  image: '/img/rhoades5.png',
                  text: 'Página login',
                },
                {
                  image: '/img/rhoades3.png',
                  text: 'Página de Post',
                },
              ]}
            />
          </InfoCard>
        </Container>
      </section>

      <section className={styles.techs}>
        <h5>Algumas tecnologias que utilizo</h5>
        <div>
          <Tooltip title="PostgreSQL">
            <Image
              src="/img/postgresql.webp"
              width="40"
              height="40"
              alt="PostgreSQL"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip title="Html">
            <Image
              src="/img/html.webp"
              width="40"
              height="40"
              alt="Html"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip title="Css">
            <Image
              src="/img/css.webp"
              width="40"
              height="40"
              alt="Css"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip title="MySql">
            <Image
              src="/img/mysql.webp"
              width="40"
              height="40"
              alt="MySql"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip title="Javascript">
            <Image
              src="/img/js.png"
              width="40"
              height="40"
              alt="Javascript"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip title="React">
            <Image
              src="/img/react.webp"
              width="40"
              height="40"
              alt="React"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip title="React Native">
            <Image
              src="/img/reactNative.png"
              width="40"
              height="40"
              alt="React Native"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip title="Typescript">
            <Image
              src="/img/ts.png"
              width="40"
              height="40"
              alt="Typescript"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip title="Firebase">
            <Image
              src="/img/firebase.webp"
              width="40"
              height="40"
              alt="Firebase"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip title="Git">
            <Image
              src="/img/git.webp"
              width="40"
              height="40"
              alt="Git"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip title="Jira">
            <Image
              src="/img/jira.png"
              width="40"
              height="40"
              alt="Jira"
              loading="lazy"
            />
          </Tooltip>
          <Tooltip title="Figma">
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
        <h5>Developed by Rafael Santana</h5>
        <ChangeColor />
      </footer>

      <BackToTheTop />
    </>
  );
}
