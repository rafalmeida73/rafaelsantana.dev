import { JSXElementConstructor, ReactElement } from 'react';

export interface TooltipProps {
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}
