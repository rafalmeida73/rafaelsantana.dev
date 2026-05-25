"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import { Links } from "../Links";
import { ProjectCardProps } from "./types";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const ProjectCard = ({
  title,
  images,
  description,
  link,
  android,
  ios,
  techs,
  year,
}: ProjectCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !images || images.length === 0) return;

    const imageElements = containerRef.current.querySelectorAll(".reveal-image");

    imageElements.forEach((el) => {
      gsap.set(el, { opacity: 0, y: 50 });

      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%", 
          toggleActions: "play none none none", 
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [images]);

  return (
    <div ref={containerRef} className="flex flex-wrap pb-3">
      <div className="grid grid-rows-1 gap-12 p-2 md:grid-cols-3">
        <div>
          <p className="mt-5 mb-4 text-2xl font-bold">{title}</p>
          <p className="w-fit rounded-2xl border p-1 px-3 text-sm text-white">
            {year}
          </p>

          <div className="mt-5 flex flex-wrap gap-4">
            {android && (
              <div className="mt-5 flex items-center justify-center gap-2">
                <Links
                  href={android}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Play Store link"
                  className="bg-overlay rounded-3xl p-1 px-3 text-lg text-white"
                  rightIcon={
                    <Image
                      src="/img/icons/android.png"
                      width="30"
                      height="30"
                      alt="Android Logo"
                      loading="lazy"
                    />
                  }
                >
                  Play Store
                </Links>
              </div>
            )}

            {ios && (
              <div className="mt-5 flex items-center justify-center gap-2">
                <Links
                  href={ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="App Store link"
                  className="bg-overlay rounded-3xl p-1 px-3 text-lg text-white"
                  rightIcon={
                    <Image
                      src="/img/icons/ios.png"
                      width="30"
                      height="30"
                      alt="Apple logo"
                      loading="lazy"
                    />
                  }
                >
                  App Store
                </Links>
              </div>
            )}

            {link && (
              <div className="mt-5 flex items-center justify-center gap-2">
                <Links
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="App Store link"
                  className="bg-overlay rounded-3xl p-1 px-3 text-lg text-white"
                  rightIcon={
                    <ArrowUpRight
                      className="text-primary rounded-3xl bg-white"
                      size={30}
                    />
                  }
                >
                  See it live
                </Links>
              </div>
            )}
          </div>
        </div>

        <div>
          <p className="mt-5 mb-4 text-[1rem] font-bold">Challenge</p>
          <p className="text-[1rem]">{description}</p>
        </div>

        <div>
          <p className="mt-5 mb-4 text-[1rem] font-bold">Techs</p>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <p
                key={tech}
                className="w-fit rounded-2xl border p-1 px-3 text-sm text-white"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>

      {images?.map((img, i) => (
        <div
          key={img.image + i}
          className={`reveal-image ${
            i === 0 ? "w-full p-2" : "w-full p-2 md:w-1/2"
          }`}
        >
          <Image
            src={img.image}
            alt={img.text}
            width={img.width || 800}
            height={img.height || 600}
            loading="lazy"
            className="h-auto w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};