export interface StackedCarouselSlideProps {
  data: Array<{ image: string; text: string; mockup: boolean }>;
  dataIndex: number;
  isCenterSlide: boolean;
  swipeTo: (index: number) => void;
  slideIndex: number;
}
