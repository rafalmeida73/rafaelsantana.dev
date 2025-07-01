"use client";

import { useEffect, useRef } from "react";

import Link from "next/link";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronUp } from "lucide-react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export const BackToTheTop = () => {
  const t = useTranslations("Home");
  const buttonRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      buttonRef.current,
      {
        y: 100,
        ease: "power1.inOut",
      },
      {
        display: "flex",
        y: -20,
        scrollTrigger: {
          trigger: buttonRef.current,
          scrub: true,
        },
      },
    );
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
        ref={buttonRef}
      >
        <ChevronUp />
      </button>

      <noscript>
        <Link href="#" role="button" aria-label={t("backToTheTop.title")}>
          <button
            type="button"
            id="backToTheTopNoJS"
            className="bg-primary visible fixed right-5 bottom-2.5 z-50 hidden h-12 w-12 items-center
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
