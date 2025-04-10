import { Suspense } from "react";

import Image from "next/image";

import { BackToTheTop } from "@/components/BackToTheTop";
import { Canvas } from "@/components/Canvas";
import { ChangeColor } from "@/components/ChangeColor";
import { Container } from "@/components/Container";
import { ImageProfile } from "@/components/ImageProfile";
import { Info } from "@/components/Info";
import InfoCard from "@/components/InfoCard";
import { LanguageIcon } from "@/components/LanguageIcon";
import ProfileInfo from "@/components/ProfileInfo";
import { ProjectCard } from "@/components/ProjectCard";
import { ToolTip } from "@/components/Tooltip";
import { formations } from "@/i18n/messages/utils/formations";
import { projects } from "@/i18n/messages/utils/projects";
import { techs } from "@/i18n/messages/utils/techs";

import { getLocale, getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Home");
  const currentLocale = await getLocale();

  const year = new Date()?.getFullYear?.();

  return (
    <main>
      <div className="absolute top-0 right-0 flex w-full justify-end gap-0.5 p-4 md:pt-3">
        <LanguageIcon
          currentLocale={currentLocale}
          language="pt"
          alt={t("languages.ptLanguage")}
          useNavigation
        />
        <LanguageIcon
          currentLocale={currentLocale}
          language="en"
          alt={t("languages.enLanguage")}
          useNavigation
        />
      </div>

      <section className="mb-10 flex min-h-[100dvh] items-center justify-center">
        <Container>
          <div className="grid grid-cols-2 grid-rows-1 gap-x-1.5 gap-y-0 md:gap-x-8">
            <Canvas>
              <ImageProfile />
            </Canvas>
            <Suspense fallback={null}>
              <ProfileInfo />
            </Suspense>
          </div>
        </Container>
      </section>

      <section className="mb-16">
        <Container>
          <InfoCard>
            <h2 className="mb-6 text-3xl font-bold text-white md:mb-1">
              {t("aboutMe.title")}
            </h2>
            <p className="text-justify text-[1rem] text-white md:text-[1.2rem]">
              {t("aboutMe.description")}
            </p>
          </InfoCard>
        </Container>
      </section>

      <Container>
        <InfoCard>
          <section>
            <h3 className="mb-2 text-3xl font-bold text-white">
              {t("academicFormation.title")}
            </h3>
            <div className="grid-rols-1 grid grid-cols-1 gap-x-0 gap-y-0 md:grid-cols-2">
              {formations.map((formation) => (
                <Info
                  key={formation.description}
                  title={{
                    text: t(formation.title),
                  }}
                  time={formation.time}
                  description={{ text: formation.description }}
                />
              ))}
            </div>
          </section>
        </InfoCard>
      </Container>

      <section className="mt-16">
        <Container>
          <InfoCard>
            <h4 className="mb-2 text-3xl font-bold text-white">
              {t("projects.title")}
            </h4>

            {projects.map((project) => (
              <Suspense key={project.title} fallback={null}>
                <ProjectCard
                  hasMockup={project.hasMockup}
                  title={project.title}
                  description={t(project.description)}
                  app={project.app}
                  link={project.link}
                  android={project.android}
                  ios={project.ios}
                  images={project.images}
                  techs={project.techs}
                />
              </Suspense>
            ))}
          </InfoCard>
        </Container>
      </section>

      <section className="my-16">
        <h5 className="mb-10 text-center text-3xl font-bold text-white md:mb-10 md:text-5xl">
          {t("techs.title")}
        </h5>

        <div className="flex flex-wrap items-start justify-center gap-1.5 px-8 py-2.5 md:justify-around md:px-1">
          {techs.map((tech) => (
            <ToolTip key={tech.title} text={tech.title}>
              <Image
                src={tech.img}
                width="40"
                height="40"
                alt={tech.title}
                loading="lazy"
              />
            </ToolTip>
          ))}
        </div>
      </section>

      <footer className="flex flex-col items-center justify-center py-10">
        <h5 className="text-[1rem] font-bold text-white">
          Copyright © Rafael Santana · {year}{" "}
        </h5>
        <Suspense>
          <ChangeColor />
        </Suspense>
      </footer>

      <BackToTheTop />
    </main>
  );
}
