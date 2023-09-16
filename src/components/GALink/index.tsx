'use client';

import { FC } from 'react';

import { handleAnalyticsEventTracker } from '@/utils/GA';
import Link from 'next/link';

import styles from './GALink.module.css';
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
        className={styles.link}
        {...props}
      >
        {children}
      </Link>
    );

  return (
    <a
      href={href}
      onClick={() => handleAnalyticsEventTracker(gaText)}
      className={styles.link}
      {...props}
    >
      {children}
    </a>
  );
};

export default GALink;
