"use client";

import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useColor } from "@/hooks/useColor";

gsap.registerPlugin(ScrollTrigger);

export const ChangeColor = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const year = new Date()?.getFullYear?.();

  const { color, setColor } = useColor();

  const changeFaviconWithIcon = useCallback(async (color: string) => {
    const response = await fetch(`/api/icon/${color.replace("#", "")}`);
    const { data: icon } = await response.json();

    let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;

    if (!link) {
      link = document.createElement("link");

      link.rel = "icon";

      document.getElementsByTagName("head")[0].appendChild(link);
    }

    link.href = icon;
  }, []);

  const handleChangeColor = useCallback(
    (colorValue: string) => {
      try {
        setColor(colorValue);

        changeFaviconWithIcon(colorValue);

        document.documentElement.style.setProperty(
          "--color-primary",
          colorValue,
        );
      } catch (error) {
        console.error(error);
      }
    },
    [changeFaviconWithIcon, setColor],
  );

  useEffect(() => {
    try {
      const primaryColor = getComputedStyle(
        document.documentElement,
      ).getPropertyValue("--color-primary");

      setColor(primaryColor);
    } catch (error) {
      console.error(error);
    }
  }, [setColor]);

  useEffect(() => {
    gsap.set(containerRef.current, {
      opacity: 0,
    });

    gsap.set(inputRef.current, {
      opacity: 1,
    });

    gsap.to(containerRef.current, {
      opacity: 1,
      y: -10,
      duration: 0.8,
      delay: 1.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 100%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-8 flex flex-col items-center justify-center"
      style={{ willChange: "opacity, transform" }}
    >
      <h5 className="mb-5 text-[1rem] font-bold text-white">
        Copyright © Rafael Santana · {year}
      </h5>

      <input
        ref={inputRef}
        type="color"
        value={color}
        onChange={(e) => {
          handleChangeColor(e.target.value);
        }}
        aria-labelledby="color"
        aria-label="Change main site color"
        className="color-input-wrapper color-input-swatch h-8 w-8 cursor-pointer border-none opacity-0"
        style={{ willChange: "opacity" }}
      />
    </div>
  );
};
