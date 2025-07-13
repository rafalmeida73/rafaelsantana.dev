"use client";

import { PropsWithChildren, useRef } from "react";

export const InfoCard = ({ children }: PropsWithChildren) => {
  const cardRef = useRef(null);

  return (
    <div>
      <div className="bg-secondary rounded-[10px]" ref={cardRef}>
        {children}
      </div>
    </div>
  );
};
