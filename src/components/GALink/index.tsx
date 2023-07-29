'use client';

import { FC } from 'react';

import { handleAnalyticsEventTracker } from '@/utils/GA';

import { GALinkProps } from './types';

const GALink: FC<GALinkProps> = ({ children, href, gaText, ...props }) => {
  return (
    <a
      href={href}
      onClick={() => handleAnalyticsEventTracker(gaText)}
      {...props}
    >
      {children}
    </a>
  );
};

export default GALink;
