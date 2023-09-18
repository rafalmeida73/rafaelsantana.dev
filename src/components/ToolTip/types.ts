import { JSXElementConstructor, ReactElement } from 'react';

export interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}
