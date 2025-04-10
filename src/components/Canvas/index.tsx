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
      <div className="!h-[100vh]">
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
        className="!max-h[100vh] fixed top-0 left-0 !h-[100vh] touch-none outline-none"
        camera={{
          fov: 70,
          near: 0.1,
          far: 2000,
          position: [-2, 0.5, 4],
        }}
      >
        {children}
      </ThreeCanvas>
      <Loader />
    </>
  );
};
