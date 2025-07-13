"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronUp } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export const BackToTheTop = () => {
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
        aria-label="Back to the top"
        id="backToTheTop"
        className="bg-primary visible fixed right-5 bottom-5 z-50 hidden h-12 w-12 cursor-pointer items-center justify-center rounded-[50%] border-[none] text-center [box-shadow:none] hover:opacity-80"
        ref={buttonRef}
        style={{ willChange: "transform" }}
      >
        <ChevronUp className="text-background" />
      </button>

      <noscript>
        <Link href="#" role="button" aria-label="Back to the top">
          <button
            type="button"
            id="backToTheTopNoJS"
            className="bg-primary font-background visible fixed right-5 bottom-2.5 z-50 hidden h-12 w-12 items-center justify-center rounded-[50%] border-[none] text-center [box-shadow:none] hover:opacity-80"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to the top"
            color="background"
          >
            <ChevronUp className="text-background" />
          </button>
        </Link>
      </noscript>
    </>
  );
};
