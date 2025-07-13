"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ProfileIcons } from "@/components/ProfileIcons";

export const InitialContent = () => {
  const transitionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    gsap.set(titleRef.current, {
      display: "block",
    });

    gsap.set(transitionRef.current, {
      height: "100vh",
      duration: 0,
    });

    gsap.to(transitionRef.current, {
      height: "0vh",
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });

    gsap.to(titleRef.current, {
      opacity: 1,
      top: "0",
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      y: "1000",
      rotate: -10,
      duration: 1,
      ease: "power3.out",
      delay: 0.75,
    });

    gsap.from(linksRef.current, {
      opacity: 0,
      bottom: "-5%",
      duration: 1,
      ease: "power3.out",
      delay: 1,
    });
  }, []);

  return (
    <>
      <div
        ref={transitionRef}
        className="bg-primary absolute z-10 w-screen overflow-hidden"
        style={{ willChange: "height" }}
      />

      <section className="h-screen w-screen overflow-hidden">
        <div
          ref={imageRef}
          className="from-primary to-primary/20 relative top-2/4 left-4/5 z-0 h-[500px] w-[350px] -translate-x-1/2 -translate-y-1/2 rotate-[5deg] bg-gradient-to-t"
          style={{ willChange: "transform" }}
        >
          <Image
            src="/img/profile.png"
            alt="Foto Rafael Santana"
            width={350}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute top-[70%] left-2/4 z-0 -translate-x-1/2 -translate-y-1/2 text-center md:top-2/4">
          <div className="clip-path mx-[0] my-[0.5em]">
            <h1
              ref={titleRef}
              className="relative top-[300px] hidden text-[5rem] md:text-[7rem] lg:text-[12rem]"
              style={{ willChange: "opacity, top" }}
            >
              Rafael
            </h1>

            <noscript>
              <h1
                ref={titleRef}
                className="top-[300px] text-[5rem] md:text-[7rem] lg:text-[12rem]"
                style={{ willChange: "opacity, top" }}
              >
                Rafael
              </h1>
            </noscript>
          </div>
        </div>

        <div
          ref={linksRef}
          className="absolute bottom-[10%] left-2/4 flex w-full -translate-x-1/2 translate-y-[0%] justify-center gap-8 text-center"
        >
          <ProfileIcons type="github" />
          <ProfileIcons type="linkedin" />
          <ProfileIcons type="whatsapp" />
        </div>
      </section>
    </>
  );
};

export default InitialContent;
