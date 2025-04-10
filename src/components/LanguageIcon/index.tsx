import Image from "next/image";

import Links from "../Links";
import { LanguageIconProps } from "./types";

export const LanguageIcon = ({
  language,
  alt,
  currentLocale,
  useNavigation = false,
}: LanguageIconProps) => {
  return (
    <Links
      nextLink={{
        page: `${language}`,
      }}
      className={`border-b-2 border-solid ${language === currentLocale && "border-b-picton-blue"}`}
      useNavigation={useNavigation}
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
