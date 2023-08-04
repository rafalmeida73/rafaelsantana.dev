export interface ProjectCardProps {
  title: string;
  images: Array<{
    text: string;
    image: string;
    mockup?: boolean;
  }>;
  description: string;
  link?: string;
  app?: boolean;
  android?: string;
  ios?: string;
  hasMockup?: boolean;
  techs?: Array<string>;
}
