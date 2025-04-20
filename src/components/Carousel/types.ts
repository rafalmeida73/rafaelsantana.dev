export interface CarouselProps {
  images: Array<{
    text: string;
    image: string;
  }>;
  hasMockup?: boolean;
}
