import Image from "next/image";

import Carousel from "../Carousel";
import Links from "../Links";
import { ProjectCardProps } from "./types";
import { getTranslations } from "next-intl/server";

export const ProjectCard = async ({
  title,
  images,
  description,
  link,
  app = false,
  android,
  ios,
  hasMockup,
  techs,
}: ProjectCardProps) => {
  const t = await getTranslations("Home");

  const translateImages = images.map((image) => ({
    ...image,
    text: t(image.text),
  }));

  return (
    <div className="my-[6rem] text-white">
      <p className="text-2xl">{title}</p>

      <Carousel images={translateImages} hasMockup={hasMockup} />

      <p className="text-center text-[1rem] md:text-[1.2rem]">
        {description}
        {link && (
          <span>
            {t("projects.projectLink")}
            <Links
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={title}
              className="text-picton-blue text-[1rem] md:text-[1.2rem]"
            >
              {title}
            </Links>
          </span>
        )}
      </p>

      {techs && (
        <ul className="mt-12 flex list-['|'] flex-wrap items-center justify-around md:list-none [&>*:nth-child(1)]:list-none">
          {techs?.map((tech) => (
            <li
              className="text-picton-blue p-2 text-[1rem] font-[var(--font-Inconsolata)] md:p-0"
              key={tech}
            >
              {tech}
            </li>
          ))}
        </ul>
      )}

      {app && (
        <section className="mt-12 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <Image
              src="/img/icons/android.webp"
              width="50"
              height="50"
              alt="Android Logo"
              loading="lazy"
            />
            <Links
              href={android}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Play Store link"
              className="text-picton-blue text-[1rem] md:text-[1.2rem]"
            >
              Play Store
            </Links>
          </div>

          {ios && (
            <div className="flex items-center justify-center">
              <Image
                src="/img/icons/ios.webp"
                width="45"
                height="39"
                alt="Apple logo"
                loading="lazy"
              />
              <Links
                href={ios}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="App Store link"
                className="text-picton-blue text-[1rem] md:text-[1.2rem]"
              >
                App Store
              </Links>
            </div>
          )}
        </section>
      )}
    </div>
  );
};
