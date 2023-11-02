import { FC } from 'react';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import Carousel from '../Carousel';
import GALink from '../GALink';
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
            {t('projectLink')}
            <GALink
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={title}
              className={styles.link}
              gaText={title}
            >
              {title}
            </GALink>
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
              src="/img/android.png"
              width="50"
              height="50"
              alt="Android Logo"
              loading="lazy"
            />
            <GALink
              href={android}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Play Store link"
              className={styles.link}
              gaText={`${title} Play Store`}
            >
              Play Store
            </GALink>
          </div>
          
          {ios && (
            <div>
              <Image
                src="/img/ios.png"
                width="45"
                height="39"
                alt="Apple logo"
                loading="lazy"
              />
              <GALink
                href={ios}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="App Store link"
                className={styles.link}
                gaText={`${title} App Store`}
              >
                App Store
              </GALink>
            </div>
          )}

        </section>
      )}
    </div>
  );
};
