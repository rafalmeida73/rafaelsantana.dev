import { FC } from 'react';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import Carousel from '../Carousel';
import Links from '../Links';
import styles from './ProjectCard.module.css';
import { ProjectCardProps } from './types';

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  images,
  description,
  link,
  app = false,
  android,
  ios,
  hasMockup,
  techs,
}) => {
  const t = useTranslations('Home');

  return (
    <div className={styles.container}>
      <p>{title}</p>

      <Carousel images={images} hasMockup={hasMockup} />

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
              src="/img/icons/android.png"
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
                src="/img/icons/ios.png"
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
