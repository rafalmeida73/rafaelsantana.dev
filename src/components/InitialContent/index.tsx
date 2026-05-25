"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ProfileIcons } from "@/components/ProfileIcons";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export const InitialContent = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const imageRef = useRef(null);
  const linksRef = useRef(null);

useEffect(() => {
  gsap.set([titleRef.current, imageRef.current, subTitleRef.current], {
    display: "block",
  });
  gsap.set(linksRef.current, {
    display: "flex",
  });

  const split = SplitText.create(titleRef.current, { type: "words,chars" });

  const tl = gsap.timeline();

  tl.to(titleRef.current, {
    top: "0",
    opacity: 1,
    duration: 0.5,
    ease: "power3.out",
  })
  .from(split.chars, {
    y: 40,
    color: "var(--color-primary)",
    opacity: 0,
    stagger: { each: 0.05, from: "start" },
    duration: 0.8,
    ease: "sine.out",
  }, "-=0.2") 
  
  .to(subTitleRef.current, {
    opacity: 1,
    top: "0",
    duration: 0.8,
    ease: "power3.out",
  }, "-=0.6")

  .from(imageRef.current, {
    opacity: 0,
    y: 1000,
    rotate: -10,
    duration: 1,
    ease: "power3.out",
  }, "-=0.8")

  .from(linksRef.current, {
    opacity: 0,
    bottom: "-5%",
    duration: 1,
    ease: "power3.out",
  }, "-=0.8");

  return () => {
    split.revert();
  };
}, []);

  return (
    <>
      <section className="h-screen w-screen overflow-hidden">
        <div
          ref={imageRef}
          className="from-primary to-primary/20 relative top-2/4 left-4/5 z-0 hidden h-125 w-87.5 -translate-x-1/2 -translate-y-1/2 rotate-[5deg] bg-linear-to-t"
          style={{ willChange: "transform" }}
        >
          <Image
            src="/img/profile.png"
            alt="Foto Rafael Santana"
            width={1920}
            height={2560}
            className="h-full w-full object-cover"
          />
        </div>

        <noscript>
          <div
            ref={imageRef}
            className="from-primary to-primary/20 relative top-2/4 left-4/5 z-0 h-125 w-87.5 -translate-x-1/2 -translate-y-1/2 rotate-[5deg] bg-linear-to-t"
            style={{ willChange: "transform" }}
          >
            <Image
              src="/img/profile.png"
              alt="Foto Rafael Santana"
              width={350}
              height={500}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </noscript>

        <div className="absolute top-[70%] left-2/4 z-0 -translate-x-1/2 -translate-y-1/2 text-center md:top-2/4">
          <div className="clip-path mx-0 my-[0.5em]">
            <h1
              ref={titleRef}
              className="relative top-75 hidden text-[5rem] whitespace-nowrap md:text-[7rem] lg:text-[12rem]"
              style={{ willChange: "opacity, top" }}
            >
              Rafael
            </h1>
            <h2
              ref={subTitleRef}
              className="relative top-75 hidden text-[1.3rem] md:text-[2rem] lg:text-[2rem]"
              style={{ willChange: "opacity, top" }}
            >
              Full-Stack Developer
            </h2>

            <noscript>
              <h1
                ref={titleRef}
                className="top-75 text-[5rem] md:text-[7rem] lg:text-[12rem]"
                style={{ willChange: "opacity, top" }}
              >
                Rafael
              </h1>
              <h2
                ref={subTitleRef}
                className="relative top-75 hidden text-[1.3rem] md:text-[2rem] lg:text-[2rem]"
                style={{ willChange: "opacity, top" }}
              >
                Full-Stack Developer
              </h2>
            </noscript>
          </div>
        </div>

        <div
          ref={linksRef}
          className="absolute bottom-[10%] left-2/4 hidden w-full -translate-x-1/2 translate-y-[0%] items-center justify-center gap-8 text-center"
        >
          <ProfileIcons type="email" />
          <ProfileIcons type="github" />
          <ProfileIcons type="linkedin" />
          <ProfileIcons type="whatsapp" />
        </div>

        <noscript>
          <div
            ref={linksRef}
            className="absolute bottom-[10%] left-2/4 flex w-full -translate-x-1/2 translate-y-[0%] items-center justify-center gap-8 text-center"
          >
            <ProfileIcons type="email" />
            <ProfileIcons type="github" />
            <ProfileIcons type="linkedin" />
            <ProfileIcons type="whatsapp" />
          </div>
        </noscript>
      </section>
    </>
  );
};

export default InitialContent;
