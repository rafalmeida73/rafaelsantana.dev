export interface renderedSlide {
  dataIndex: number;
  scale: number;
  position: number;
  slideIndex: number;
  opacity: number;
  zIndex: number;
  key: number | string;
}

export interface staticSlideInfo {
  position: number;
  scale: number;
  opacity: number;
  slideIndex: number;
  maxTransformDistance: { left?: number; right?: number };
  maxTransformScale: { left?: number; right?: number };
  maxTransformOpacity: { left?: number; right?: number };
}

export interface slideInfoMap {
  [key: number]: staticSlideInfo;
}

export interface StackedCarouselProps {
  data: Array<{
    text: string;
    image: string;
  }>;
  slideComponent: React.ComponentType<{
    dataIndex: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[];
    slideIndex: number;
    isCenterSlide: boolean;
    swipeTo: (steps: number) => void;
  }>;
  slideWidth: number;
  carouselWidth: number;
  height?: number;
  maxVisibleSlide: number;
  currentVisibleSlide?: number;
  transitionTime?: number;
  swipeSpeed?: number;
  fadeDistance?: number;
  customScales?: number[];
  onActiveSlideChange?: (dataIndex: number) => void;
  disableSwipe?: boolean;
  className?: string;
  useGrabCursor?: boolean;
  customTransition?: string;
}
