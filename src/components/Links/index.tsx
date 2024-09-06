'use client';

import Link from 'next/link';

import styles from './Link.module.css';
import { LinksProps } from './types';

const Links = ({ children, href, nextLink, ...props }: LinksProps) => {
  if (nextLink)
    return (
      <Link href={nextLink?.page} className={styles.link} {...props}>
        {children}
      </Link>
    );

  return (
    <a href={href} className={styles.link} {...props}>
      {children}
    </a>
  );
};

export default Links;
