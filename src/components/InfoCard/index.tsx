import { PropsWithChildren } from "react";

export const InfoCard = ({ children }: PropsWithChildren) => {
  return <div className="bg-jet rounded-2xl p-7">{children}</div>;
};
