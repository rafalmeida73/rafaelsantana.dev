"use client";

import { PropsWithChildren, useRef } from "react";

export const InfoCard = ({ children }: PropsWithChildren) => {
  const cardRef = useRef(null);

  return (
    <div className="flex justify-center">
      <div className="bg-secondary rounded-[10px] max-w-[2000]" ref={cardRef}>
        {children}
      </div>
    </div>
  );
};
