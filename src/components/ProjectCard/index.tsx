"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import { Links } from "../Links";
import { ProjectCardProps } from "./types";

gsap.registerPlugin(ScrollTrigger);

export const ProjectCard = ({
  title,
  images,
  description,
  link,
  android,
  ios,
  hasMockup,
  techs,
}: ProjectCardProps) => {
  const containerRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  const imageContainerHeight = useMemo(() => {
    if (hasMockup) {
      return "h-[600px]";
    }

    if (!images[1]?.image) {
      return "h-[250px]";
    }

    return "h-[450px]";
  }, [hasMockup, images]);

  useEffect(() => {
    if (!image2Ref.current) return;

    gsap.set([image1Ref.current, image2Ref.current, image3Ref.current], {
      left: "50%",
      scale: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(image1Ref.current, {
      x: -100,
      y: -50,
      rotation: -15,
      duration: 1,
    })
      .to(
        image2Ref.current,
        {
          scale: 1.2,
          duration: 1,
        },
        0,
      )
      .to(
        image3Ref.current,
        {
          x: 100,
          y: 50,
          rotation: 15,
          duration: 1,
        },
        0,
      );

    return () => {
      ScrollTrigger.refresh();

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative my-[6rem] w-[80dvw] py-10 text-white md:p-7">
      <div
        ref={containerRef}
        className={`relative flex w-full items-center justify-center overflow-hidden rounded-lg ${
          imageContainerHeight
        }`}
        style={{ willChange: "transform" }}
      >
        <Image
          ref={image1Ref}
          src={images[0]?.image}
          alt={images[0]?.text}
          width={200}
          height={hasMockup ? 406 : 200}
          loading="lazy"
          className="absolute top-1/2 left-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 scale-110"
          style={{ willChange: "transform" }}
        />

        {images[1]?.image && (
          <Image
            ref={image2Ref}
            src={images[1]?.image || images[0]?.image}
            alt={images[1]?.text || images[0]?.text}
            width={200}
            height={200}
            loading="lazy"
            className="absolute top-1/2 left-[35%] z-[2] -translate-x-1/2 -translate-y-1/2"
            style={{ willChange: "transform" }}
          />
        )}

        {images[2]?.image && (
          <Image
            ref={image3Ref}
            src={images[2]?.image || images[0]?.image}
            alt={images[2]?.text || images[0]?.text}
            width={200}
            height={200}
            loading="lazy"
            className="absolute top-1/2 left-[65%] z-[1] -translate-x-1/2 -translate-y-1/2"
            style={{ willChange: "transform" }}
          />
        )}
      </div>

      <p className="mb-5 w-full text-center text-2xl font-bold">{title}</p>

      <p className="px-5 text-center text-[1rem] md:text-[1.2rem]">
        {description}
        {link && (
          <span>
            {" "}
            <Links
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={title}
              className="text-primary text-[1rem] md:text-[1.2rem]"
            >
              {title}
            </Links>
          </span>
        )}
      </p>

      {techs && (
        <ul className="mt-12 flex list-['|'] flex-wrap items-center justify-around px-5 md:list-none [&>*:nth-child(1)]:list-none">
          {techs?.map((tech) => (
            <li
              className="text-primary p-2 text-[1rem] font-[var(--font-Inconsolata)] md:p-0"
              key={tech}
            >
              {tech}
            </li>
          ))}
        </ul>
      )}

      {(android || ios) && (
        <section className="mt-12 flex flex-col items-center justify-center gap-5">
          <div className="flex items-center justify-center">
            <Image
              src="/img/icons/android.png"
              width="45"
              height="45"
              alt="Android Logo"
              loading="lazy"
            />
            <Links
              href={android}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Play Store link"
              className="text-primary ml-5 text-[1rem] md:text-[1.2rem]"
            >
              Play Store
            </Links>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/img/icons/ios.png"
              width="45"
              height="45"
              alt="Apple logo"
              loading="lazy"
            />
            <Links
              href={ios}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="App Store link"
              className="text-primary ml-5 text-[1rem] md:text-[1.2rem]"
            >
              App Store
            </Links>
          </div>
        </section>
      )}
    </div>
  );
};
