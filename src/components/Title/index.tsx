import React from "react";
import { TitleProps } from "./types";

export const Title = ({ title, focusText }: TitleProps) => {
  return (
    <h2 className="mb-8 text-center text-3xl font-extralight text-white">
      {title} <span className="font-bold">{focusText}</span>
    </h2>
  );
};
