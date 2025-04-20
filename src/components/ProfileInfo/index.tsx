import { Suspense } from "react";

import { Links } from "../Links";
import { ProfileIcons } from "../ProfileIcons";
import { Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const ProfileInfo = async () => {
  const t = await getTranslations("Home");

  return (
    <div className="grid h-full content-center justify-center">
      <h1 className="mb-4 text-2xl font-bold text-white md:text-4xl">
        Rafael Santana
      </h1>
      <p className="mb-4 text-[1rem] text-white md:text-2xl">
        {t("mainContent.city")}
      </p>
      <p className="mb-8 text-[1rem] text-white md:text-justify md:text-2xl">
        {t("mainContent.description")}
      </p>
      <div className="mb-10 flex w-full justify-around">
        <Suspense fallback={null}>
          <ProfileIcons type="github" />
        </Suspense>
        <Suspense fallback={null}>
          <ProfileIcons type="whatsapp" />
        </Suspense>
        <Suspense fallback={null}>
          <ProfileIcons type="linkedin" />
        </Suspense>
      </div>

      <Links
        className="bg-primary flex items-center justify-center rounded-[0.5rem] px-4 py-4
          text-[.7rem] font-semibold text-white uppercase no-underline lg:text-[1rem]"
        href={`mailto:${t("mainContent.contact")}@rafaelsantana.dev`}
      >
        <Mail className="mr-2 text-2xl text-white" />
        {t("mainContent.email")}
      </Links>
    </div>
  );
};
