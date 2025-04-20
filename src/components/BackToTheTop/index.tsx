"use client";

import { useEffect } from "react";

import Link from "next/link";

import { ChevronUp } from "lucide-react";
import { useTranslations } from "next-intl";

export const BackToTheTop = () => {
  const t = useTranslations("Home");

  useEffect(() => {
    const handleScroll = () => {
      try {
        const mybutton = document?.getElementById?.("backToTheTop");

        if (
          document.body.scrollTop > 25 ||
          document.documentElement.scrollTop > 25
        ) {
          mybutton ? (mybutton.style.display = "flex") : null;
        } else {
          mybutton ? (mybutton.style.display = "none") : null;
        }
      } catch (error) {
        console.error(error);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={t("backToTheTop.title")}
        color="primary"
        id="backToTheTop"
        className="bg-primary visible fixed right-5 bottom-5 z-50 hidden h-12 w-12 cursor-pointer
          items-center justify-center rounded-[50%] border-[none] text-center
          [box-shadow:none] hover:opacity-80"
      >
        <ChevronUp />
      </button>

      <noscript>
        <Link href="#" role="button" aria-label={t("backToTheTop.title")}>
          <button
            type="button"
            id="backToTheTopNoJS"
            className="bg-primary visible fixed right-5 bottom-2.5 z-50 flex h-12 w-12 items-center
              justify-center rounded-[50%] border-[none] text-center [box-shadow:none]
              hover:opacity-80"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label={t("backToTheTop.title")}
            color="primary"
          >
            <ChevronUp />
          </button>
        </Link>
      </noscript>
    </>
  );
};
