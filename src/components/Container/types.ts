export interface InfoProps {
  title: {
    text: string;
    link?: string;
    ariaLabel?: string;
  };
  time: string;
  full?: boolean;
  description?: {
    text: string;
    link?: string;
    ariaLabel?: string;
  };
}
