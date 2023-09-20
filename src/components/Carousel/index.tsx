'use client';

import { FC } from 'react';

import Image from 'next/image';
import {
  StackedCarousel,
  ResponsiveContainer,
} from 'react-stacked-center-carousel';

import { Slide } from '../Slide';
import styles from './Carousel.module.css';
import { CarouselProps } from './types';

export const Carousel: FC<CarouselProps> = ({ images, hasMockup }) => {
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
          <div className={`${images?.length > 1 && styles.carouselContent}`}>
            {images?.map(image => (
              <div className={styles.carouselItem} key={image?.image}>
                <Image
                  src={image?.image}
                  width={200}
                  height={hasMockup ? 405.02 : 200}
                  alt={image?.text}
                />
              </div>
            ))}
          </div>
        </div>
      </noscript>
    </div>
  );
};

export default Carousel;
