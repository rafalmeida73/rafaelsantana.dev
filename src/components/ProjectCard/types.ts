export interface ProjectCardProps {
  title: string;
  images: Array<{
    text: string;
    image: string;
  }>;
  description: string;
  link?: string;
  android?: string;
  ios?: string;
  hasMockup?: boolean;
  techs?: Array<string>;
}
