"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { LinksProps } from "./types";

export const Links = ({ children, href, nextLink, ...props }: LinksProps) => {
  const { push } = useRouter();

  const handleNavigation = () => {
    push(`/${nextLink?.page}`);
  };

  if (nextLink) {
    return (
      <Link
        href={nextLink?.page}
        onClick={handleNavigation}
        className="h-fit"
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className="h-fit" {...props}>
      {children}
    </a>
  );
};
