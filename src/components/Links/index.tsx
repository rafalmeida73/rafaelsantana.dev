"use client";

import Link from "next/link";

import { LinksProps } from "./types";

export const Links = ({ children, href, nextLink, rightIcon, className, ...props }: LinksProps) => {
  if (nextLink) {
    return (
      <Link href={nextLink?.page} className="h-fit" {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className="flex items-center gap-2" {...props}>
     <div className={`h-fit ${className}`}>
      {children}
    </div>
      {rightIcon}
    </a>
   
  );
};
