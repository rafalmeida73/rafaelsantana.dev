import { FC } from 'react';

import Image from 'next/image';

import styles from './Carrousel.module.scss';
import { CarrouselProps } from './types';

export const Carrousel: FC<CarrouselProps> = ({
  title,
  images,
  description,
  link,
  app = false,
  android,
  ios,
}) => {
  return (
    <div className={`${styles.container} carouselContent`}>
      <p>{title}</p>
      <div className="carousel">
        {images?.map((image, index) => (
          <a
            className="carousel-item"
            href={`${index}`}
            title={image?.title}
            aria-label={image?.title}
            // eslint-disable-next-line react/no-array-index-key
            key={index.toString()}
          >
            <Image
              src={image?.image}
              width="200"
              height="200"
              alt={image?.title}
            />
          </a>
        ))}

        <noscript>
          <section className="carouselSecondary">
            <div className="slides">
              <div className="slides-item">
                <img
                  src={images?.[0]?.image}
                  width="200"
                  height="200"
                  alt={images[0]?.title}
                />
              </div>
            </div>
          </section>
        </noscript>
      </div>
      <p className="center-align">
        {description}{' '}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={title}
            className={`${styles.link} link`}
          >
            {title}
          </a>
        )}
      </p>
      {app && (
        <section className={`${styles.app} app`}>
          <div>
            <Image
              src="/img/android.png"
              width="50"
              height="50"
              alt="Robô android (Logo Android)"
            />
            <a
              href={android}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link do(a) ${title} na Play Store`}
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
              alt="Maça mordida (Logo Apple)"
            />
            <a
              href={ios}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link do(a) ${title} na  App Store`}
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
