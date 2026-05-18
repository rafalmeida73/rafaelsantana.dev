export interface ProjectCardProps {
  title: string;
  images: Array<{
    text: string;
    image: string;
    width?: number;
    height?: number;
  }>;
  description: string;
  link?: string;
  android?: string;
  ios?: string;
  year: number;
  techs: Array<string>;
}
