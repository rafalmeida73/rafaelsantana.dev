"use client";

import Image from "next/image";

import { Slide } from "../Slide";
import { CarouselProps } from "./types";
import {
  ResponsiveContainer,
  StackedCarousel,
} from "react-stacked-center-carousel";

export const Carousel = ({ images, hasMockup }: CarouselProps) => {
  return (
    <div className="my-12 w-full">
      <ResponsiveContainer
        render={(width) => {
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
        <div className={`w-full ${hasMockup && "h-[40rem]"}`}>
          {images?.length === 1 ? (
            <div className="flex items-center justify-center">
              <Image
                src={images?.[0]?.image}
                width={200}
                height={hasMockup ? 405.02 : 200}
                alt={images?.[0]?.text}
                loading="lazy"
              />
            </div>
          ) : (
            <div
              className={`${images?.length > 1 && "flex items-center justify-center"}`}
            >
              <div className="">
                <div className="">
                  <div aria-hidden="true"></div>
                </div>
                <Image
                  src={images?.[2]?.image}
                  width={170}
                  height={hasMockup ? 345 : 200}
                  alt={images?.[2]?.text}
                  loading="lazy"
                />
              </div>

              <div>
                <Image
                  src={images?.[0]?.image}
                  width={200}
                  height={hasMockup ? 405.02 : 200}
                  alt={images?.[0]?.text}
                  loading="lazy"
                />
              </div>

              <div>
                <div>
                  <div aria-hidden="true"></div>
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
