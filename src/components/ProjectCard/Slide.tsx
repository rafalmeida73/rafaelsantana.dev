import { memo } from 'react';

import { StackedCarouselSlideProps } from 'react-stacked-center-carousel';

export const Slide = memo(function slideCard(
  SlideProps: StackedCarouselSlideProps,
) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } = SlideProps;

  const coverImage = data[dataIndex].image;

  return (
    <div className="card-card" draggable={false}>
      <div className={`cover fill ${isCenterSlide ? 'off' : 'on'}`}>
        <div
          className="card-overlay fill"
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
          aria-hidden="true"
        />
      </div>
      <div className="detail fill">
        <div className="discription">
          <img
            style={{ width: '100%' }}
            alt="j"
            className="cover-image"
            src={coverImage}
          />
        </div>
      </div>
    </div>
  );
});
