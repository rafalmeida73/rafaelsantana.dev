export interface CarrouselProps {
  title: string;
  images: Array<{
    title: string;
    image: string;
  }>;
  description: string;
  link?: string;
  app?: boolean;
  android?: string;
  ios?: string;
}
