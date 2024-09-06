import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import Carousel from '../Carousel';
import Links from '../Links';
import styles from './ProjectCard.module.css';
import { ProjectCardProps } from './types';

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
  const t = await getTranslations('Home');

  const translateImages = images.map(image => ({
    ...image,
    text: t(image.text),
  }));

  return (
    <div className={styles.container}>
      <p>{title}</p>

      <Carousel images={translateImages} hasMockup={hasMockup} />

      <p className={styles.description}>
        {description}
        {link && (
          <span>
            {t('projects.projectLink')}
            <Links
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={title}
              className={styles.link}
            >
              {title}
            </Links>
          </span>
        )}
      </p>

      {techs && (
        <ul className={styles.techLists}>
          {techs?.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
      )}

      {app && (
        <section className={styles.app}>
          <div>
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
              className={styles.link}
            >
              Play Store
            </Links>
          </div>

          {ios && (
            <div>
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
                className={styles.link}
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
