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
}) => {
  const t = useTranslations('Home');

  return (
    <div className={styles.container}>
      <p>{title}</p>

      <Carousel images={images} />

      <noscript>
        <section>
          <div className={styles.slides}>
            {images?.[1] && (
              <div className={styles.slidesItem}>
                <Image
                  src={images?.[1]?.image}
                  width={200}
                  height={hasMockup ? 405.02 : 200}
                  alt={images?.[1]?.text}
                />
              </div>
            )}
            <div className={`${styles.slidesItem} ${styles.centerImg}`}>
              <Image
                src={images?.[0]?.image}
                width={200}
                height={hasMockup ? 405.02 : 200}
                alt={images?.[0]?.text}
              />
            </div>
            {images?.[1] && (
              <div className={styles.slidesItem}>
                <Image
                  src={images?.[2]?.image}
                  width={200}
                  height={hasMockup ? 405.02 : 200}
                  alt={images?.[2]?.text}
                />
              </div>
            )}
          </div>
        </section>
      </noscript>

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
        </section>
      )}
    </div>
  );
};
