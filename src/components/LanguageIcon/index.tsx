import Image from "next/image";

import { Links } from "../Links";
import { LanguageIconProps } from "./types";

export const LanguageIcon = ({
  language,
  alt,
  currentLocale,
}: LanguageIconProps) => {
  return (
    <Links
      nextLink={{
        page: `${language}`,
      }}
      className={`border-b-2 border-solid ${language === currentLocale && "border-b-picton-blue"}
        cursor-pointer`}
    >
      <Image
        src={
          language === "en" ? "/img/icons/usa.webp" : "/img/icons/brazil.webp"
        }
        alt={alt}
        width={22}
        height={16}
        priority
        className="mb-1"
      />
    </Links>
  );
};
