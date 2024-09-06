'use client';

import Image from 'next/image';
import {
  StackedCarousel,
  ResponsiveContainer,
} from 'react-stacked-center-carousel';

import { Slide } from '../Slide';
import styles from './Carousel.module.css';
import { CarouselProps } from './types';

export const Carousel = ({ images, hasMockup }: CarouselProps) => {
  return (
    <div className={styles.container}>
      <ResponsiveContainer
        render={width => {
          return (
            <StackedCarousel
              slideComponent={Slide}
              slideWidth={200}
              carouselWidth={width}
              data={images}
              maxVisibleSlide={
                images?.length % 2 === 0 ? images?.length - 1 : images?.length
              }
              customScales={
                images?.length > 3 ? [1, 0.85, 0.7, 0.55] : undefined
              }
              transitionTime={450}
              fadeDistance={0.85}
              disableSwipe={images?.length === 1}
            />
          );
        }}
      />

      <noscript>
        <div
          className={`${styles.carousel} ${hasMockup && styles.carouselMockup}`}
        >
          {images?.length === 1 ? (
            <div className={styles.onlyOneImage}>
              <Image
                src={images?.[0]?.image}
                width={200}
                height={hasMockup ? 405.02 : 200}
                alt={images?.[0]?.text}
                loading="lazy"
              />
            </div>
          ) : (
            <div className={`${images?.length > 1 && styles.carouselContent}`}>
              <div className={styles.carouselItem}>
                <div className={`${styles?.cover} ${styles?.fill}`}>
                  <div
                    className={`${styles?.cardOverlay} ${styles?.fill} ${
                      hasMockup && styles?.cardOverlayRadius
                    }`}
                    aria-hidden="true"
                  ></div>
                </div>
                <Image
                  src={images?.[2]?.image}
                  width={170}
                  height={hasMockup ? 345 : 200}
                  alt={images?.[2]?.text}
                  loading="lazy"
                />
              </div>

              <div className={styles.carouselItem}>
                <Image
                  src={images?.[0]?.image}
                  width={200}
                  height={hasMockup ? 405.02 : 200}
                  alt={images?.[0]?.text}
                  loading="lazy"
                />
              </div>

              <div className={styles.carouselItem}>
                <div className={`${styles?.cover} ${styles?.fill}`}>
                  <div
                    className={`${styles?.cardOverlay} ${styles?.fill} ${
                      hasMockup && styles?.cardOverlayRadius
                    }`}
                    aria-hidden="true"
                  ></div>
                </div>
                <Image
                  src={images?.[1]?.image}
                  width={170}
                  height={hasMockup ? 345 : 200}
                  alt={images?.[1]?.text}
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </noscript>
    </div>
  );
};

export default Carousel;
