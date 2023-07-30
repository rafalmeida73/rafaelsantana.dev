'use client';

import { FC } from 'react';

import {
  StackedCarousel,
  ResponsiveContainer,
} from 'react-stacked-center-carousel';

import { Slide } from '../Slide';
import styles from './Carousel.module.css';
import { CarouselProps } from './types';

export const Carousel: FC<CarouselProps> = ({ images }) => {
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
              fadeDistance={0.7}
              disableSwipe={images?.length === 1}
            />
          );
        }}
      />
    </div>
  );
};

export default Carousel;
