"use client";

import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useColor } from "@/hooks/useColor";
import { Palette } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const ChangeColor = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const year = new Date()?.getFullYear?.() || 2026;

  const { color, setColor } = useColor();

  const changeFaviconWithIcon = useCallback(async (colorValue: string) => {
    try {
      const response = await fetch(`/api/icon/${colorValue.replace("#", "")}`);
      const { data: icon } = await response.json();

      let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;

      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.getElementsByTagName("head")[0].appendChild(link);
      }

      link.href = icon;
    } catch (error) {
      console.error(error);
    }
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
      const primaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--color-primary")
        ?.trim();

      if (primaryColor) {
        setColor(primaryColor);
      }
    } catch (error) {
      console.error(error);
    }
  }, [setColor]);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-8 flex flex-col items-center justify-center select-none"
      style={{ willChange: "opacity, transform" }}
    >
      <h5 className="mb-12 text-[1rem] font-bold text-white">
        Copyright © Rafael Santana · {year}
      </h5>
      <div className="flex flex-col items-center gap-2.5">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            aria-label="Change theme color"
            className="group hover:border-primary/50 flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-zinc-300 shadow-sm backdrop-blur-md transition-all hover:bg-white/10 hover:text-white"
          >
            <span
              className="h-3.5 w-3.5 rounded-full shadow-sm ring-1 ring-white/30 transition-transform group-hover:scale-110"
              style={{ backgroundColor: color }}
            />
            <Palette className="text-primary h-3.5 w-3.5" />
            <span>Change theme color</span>
          </button>
        </div>

        <input
          ref={inputRef}
          type="color"
          value={color}
          onChange={(e) => handleChangeColor(e.target.value)}
          aria-label="Choose custom color"
          className="sr-only"
        />
      </div>
    </div>
  );
};
