"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { LinksProps } from "./types";

const Links = ({
  children,
  href,
  nextLink,
  useNavigation = false,
  ...props
}: LinksProps) => {
  const { push } = useRouter();

  const handleNavigation = () => {
    push(`/${nextLink?.page}`);
  };

  if (nextLink && useNavigation) {
    return (
      <a onClick={handleNavigation} className="h-fit" {...props}>
        {children}
      </a>
    );
  }

  if (nextLink) {
    return (
      <Link href={nextLink?.page} className="h-fit" {...props}>
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

export default Links;
