import { FC, useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import styles from './Carrousel.module.scss';
import { CarrouselProps } from './types';

export const Carrousel: FC<CarrouselProps> = ({
  title,
  images,
  description,
  link,
  app = false,
  hasMockup = false,
  android,
  ios,
}) => {
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('Home');

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`${styles.container} carouselContent`}>
      <p>{title}</p>
      <div
        className={`${
          hasMockup ? `${styles.carousel} hasMockup` : ''
        } carousel`}
      >
        {images?.map((image, index) => (
          <Image
            // eslint-disable-next-line react/no-array-index-key
            key={index.toString()}
            className="carousel-item"
            src={image?.image}
            width="200"
            height={hasMockup ? 405.02 : 200}
            alt={image?.title}
            loading="lazy"
          />
        ))}

        <noscript>
          <section className="carouselSecondary">
            <div className="slides">
              {images?.[1] && (
                <div className="slides-item">
                  <Image
                    src={images?.[1]?.image}
                    width={200}
                    height={hasMockup ? 405.02 : 200}
                    alt={images?.[1]?.title}
                  />
                </div>
              )}
              <div className="slides-item centerImg">
                <Image
                  src={images?.[0]?.image}
                  width={200}
                  height={hasMockup ? 405.02 : 200}
                  alt={images?.[0]?.title}
                />
              </div>
              {images?.[1] && (
                <div className="slides-item">
                  <Image
                    src={images?.[2]?.image}
                    width={200}
                    height={hasMockup ? 405.02 : 200}
                    alt={images?.[2]?.title}
                  />
                </div>
              )}
            </div>
          </section>
        </noscript>
      </div>
      <p className="center-align">
        {description}
        {link && mounted && (
          <p>
            {t('projectLink')}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={title}
              className={`${styles.link} link`}
            >
              {title}
            </a>
          </p>
        )}
      </p>
      {app && (
        <section className={`${styles.app} app`}>
          <div>
            <Image
              src="/img/android.png"
              width="50"
              height="50"
              alt="Android Logo"
              loading="lazy"
            />
            <a
              href={android}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Play Store link"
              className="link"
            >
              Play Store
            </a>
          </div>
          <div>
            <Image
              src="/img/ios.png"
              width="45"
              height="39"
              alt="Apple logo"
              loading="lazy"
            />
            <a
              href={ios}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="App Store link"
              className="link"
            >
              App Store
            </a>
          </div>
        </section>
      )}
    </div>
  );
};
