"use client";

import { PropsWithChildren, useRef } from "react";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const InfoCard = ({ children }: PropsWithChildren) => {
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, x: 700, y: 10, marginLeft: 0, marginRight: 0, delay: 0.5 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        marginLeft: "10vw",
        marginRight: "10vw",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
        
      },
    );
  }, []);

  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden ">
      <div
        className="bg-secondary rounded-2xl p-7 ml-[10vw] mr-[10vw]"
        ref={cardRef}
        style={{ willChange: "transform" }}
      >
        {children}
      </div>
    </div>
  );
};
