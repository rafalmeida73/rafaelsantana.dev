'use client';

import Link from 'next/link';

import { LinksProps } from './types';

const Links = ({ children, href, nextLink, ...props }: LinksProps) => {
  if (nextLink)
    return (
      <Link href={nextLink?.page} className="h-fit" {...props}>
        {children}
      </Link>
    );

  return (
    <a href={href} className="h-fit" {...props}>
      {children}
    </a>
  );
};

export default Links;
