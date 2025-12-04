import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="px-[10vw] py-0 md:py-0">{children}</div>;
};
