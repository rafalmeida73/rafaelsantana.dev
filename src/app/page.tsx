import { Suspense } from "react";

import { BackToTheTop } from "@/components/BackToTheTop";
import { ChangeColor } from "@/components/ChangeColor";
import { Container } from "@/components/Container";
import { InfoCard } from "@/components/InfoCard";
import InitialContent from "@/components/InitialContent";
import { Line } from "@/components/Line";
import { ProjectCard } from "@/components/ProjectCard";
import { Techs } from "@/components/Techs";
import { Title } from "@/components/Title";
import { projects } from "@/utils/projects";
import { techs } from "@/utils/techs";

export default async function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="relative">
        <InitialContent />
      </div>

      <Line />

      <Container>
        <section className="mt-10 mb-16">
          <Title title="About" focusText="Me" />

          <p className="text-center text-[1rem] text-white">
            Mobile developer speacialised in React Native, with passion for
            creating elegant & functional solutions. Focused on clean code,
            performance & user experience.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-8 md:flex-row">
            <div>
              <p className="text-primary">System analyst & developer</p>
              <div className="mt-2 flex items-center justify-center">
                <p>UNINOVE</p>
                <div className="mx-2 h-[4px] w-[4px] rounded-full bg-white" />
                <p>2019 - 2021</p>
              </div>
            </div>

            <div className="md:from-primary/0 md:to-primary/0 md:via-primary/40 w-[1px] md:h-[5.2rem] md:bg-gradient-to-r" />

            <div>
              <p className="text-primary">Full Stack Developer</p>
              <div className="mt-2 flex items-center">
                <p>SENAC </p>
                <div className="mx-2 h-[4px] w-[4px] rounded-full bg-white" />
                <p>2022 - 2023</p>
              </div>
            </div>
          </div>
        </section>

        <Line />

        <section className="mt-10">
          <Title title="My Recent" focusText="Projects" />

          {projects.map((project) => (
            <Suspense key={project.title} fallback={null}>
              <InfoCard>
                <ProjectCard
                  hasMockup={project.hasMockup}
                  title={project.title}
                  description={project.description}
                  app={project.app}
                  link={project.link}
                  android={project.android}
                  ios={project.ios}
                  images={project.images}
                  techs={project.techs}
                />
              </InfoCard>
            </Suspense>
          ))}
        </section>

        <Line />
      </Container>

      <section className="my-10">
        <Title title="My" focusText="Skillset" />

        <Techs techs={techs} />
      </section>

      <footer className="flex flex-col items-center justify-center overflow-y-hidden py-10">
        <Suspense>
          <ChangeColor />
        </Suspense>
      </footer>

      <BackToTheTop />
    </main>
  );
}
