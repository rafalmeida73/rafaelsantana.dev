import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-[4vw] py-[0] md:px-[10vw] md:py-[0]">{children}</div>
  );
};
