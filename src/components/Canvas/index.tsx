"use client";

import { PropsWithChildren, Suspense, useEffect, useState } from "react";

import { Loader } from "@react-three/drei";
import { Canvas as ThreeCanvas } from "@react-three/fiber";

import { ImageProfileNoJs } from "../ImageProfileNojs";

export const Canvas = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading)
    return (
      <div className="!h-[100dvh]">
        <noscript>
          <Suspense fallback={null}>
            <ImageProfileNoJs />
          </Suspense>
        </noscript>
      </div>
    );

  return (
    <>
      <ThreeCanvas
        className="fixed top-0 left-0 !h-[100dvh] touch-none outline-none"
      >
        {children}
      </ThreeCanvas>
      <Loader />
    </>
  );
};
