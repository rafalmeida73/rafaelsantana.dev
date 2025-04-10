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
import { Tooltip } from "@/components/ToolTip";
import { formations } from "@/utils/formations";
import { projects } from "@/utils/projects";
import { techs } from "@/utils/techs";

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
        />
        <LanguageIcon
          currentLocale={currentLocale}
          language="en"
          alt={t("languages.enLanguage")}
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

      {/* <section>
        <Container>
          <InfoCard>
            <h2>{t("aboutMe.title")}</h2>
            <p>{t("aboutMe.description")}</p>
          </InfoCard>
        </Container>
      </section> */}

      {/* <Container>
        <InfoCard>
          <section className={styles.education}>
            <h3>{t('academicFormation.title')}</h3>
            <div className={styles.educationContent}>
              {formations.map(formation => (
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
      </Container> */}

      {/* <section className={styles.projects}>
        <Container>
          <InfoCard>
            <h4>{t('projects.title')}</h4>

            {projects.map(project => (
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
      </section> */}

      {/* <section className={styles.techs}>
        <h5>{t('techs.title')}</h5>

        <div>
          {techs.map(tech => (
            <Tooltip key={tech.title} text={tech.title}>
              <Image
                src={tech.img}
                width="40"
                height="40"
                alt={tech.title}
                loading="lazy"
              />
            </Tooltip>
          ))}
        </div>
      </section> */}

      {/* <footer className={styles.footer}>
        <h5>Copyright © Rafael Santana · {year} </h5>
        <Suspense>
          <ChangeColor />
        </Suspense>
      </footer> */}

      <BackToTheTop />
    </main>
  );
}
