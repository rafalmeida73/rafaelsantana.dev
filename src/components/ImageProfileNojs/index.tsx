import Image from "next/image";

import { useTranslations } from "next-intl";

export const ImageProfileNoJs = () => {
  const t = useTranslations("Home");

  return (
    <div className="relative flex h-full items-center">
      <p
        data-text="Rafael"
        className="text-vertical text-background absolute left-1.5 text-4xl
          font-[var(--font-montserrat)] md:text-8xl"
      >
        Rafael
      </p>
      <Image
        width={650}
        height={650}
        className="bg-primary rounded-full object-cover"
        src="/img/profileImage.png"
        alt={t("mainContent.profileImageAlt")}
        draggable={false}
        priority
      />
    </div>
  );
};
