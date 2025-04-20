"use client";

import { memo } from "react";

import Image from "next/image";

import { StackedCarouselSlideProps } from "./types";

export const Slide = memo(function slideCard(
  SlideProps: StackedCarouselSlideProps,
) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } = SlideProps;

  const coverImage = data?.[dataIndex]?.image;
  const textImage = data?.[dataIndex]?.text;
  const isMockup = data?.[dataIndex]?.mockup;

  return (
    <div className="card-card" draggable={false}>
      <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div
          className={`${isMockup && "card-overlay-mockup"} card-overlay fill`}
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
          aria-hidden="true"
        />
      </div>
      <div className="detail fill">
        <div className="description">
          <Image
            width={200}
            height={isMockup ? 406 : 200}
            alt={textImage}
            className="cover-image"
            src={coverImage}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
});
