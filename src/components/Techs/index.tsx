"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import { ToolTip } from "../Tooltip";
import { TechsProps } from "./types";

gsap.registerPlugin(ScrollTrigger);

export const Techs = ({ techs }: TechsProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const techRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.delayedCall(0.001, () => {
      if (techRefs.current.length === 0) return;

      techRefs.current.map((el) => {
        if (el) {
          el.style.opacity = "0";
        }
      });

      gsap.to(techRefs.current, {
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap items-start justify-center gap-1.5 px-8 py-2.5 md:justify-around md:px-1"
      style={{ willChange: "opacity" }}
    >
      {techs.map((tech, index) => (
        <div
          key={tech.title}
          ref={(el) => {
            if (el) {
              techRefs.current[index] = el;
            }
          }}
          style={{ willChange: "opacity" }}
        >
          <ToolTip text={tech.title}>
            <Image
              src={tech.img}
              width="40"
              height="40"
              alt={tech.title}
              loading="lazy"
            />
          </ToolTip>
        </div>
      ))}
    </div>
  );
};
