import { ComponentPropsWithoutRef } from "react";

export interface LinksProps extends ComponentPropsWithoutRef<"a"> {
  nextLink?: {
    page: string;
    locale?: string;
  };
  useNavigation?: boolean;
}
