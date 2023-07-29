'use client';

import { FC } from 'react';

import { handleAnalyticsEventTracker } from '@/utils/GA';
import Link from 'next/link';

import { GALinkProps } from './types';

const GALink: FC<GALinkProps> = ({
  children,
  href,
  gaText,
  nextLink,
  ...props
}) => {
  if (nextLink)
    return (
      <Link
        href={nextLink?.page}
        onClick={() => handleAnalyticsEventTracker(gaText)}
        {...props}
      >
        {children}
      </Link>
    );

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
