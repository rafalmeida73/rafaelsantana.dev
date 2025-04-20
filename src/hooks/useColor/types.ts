import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ContextData {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}

export interface ContextProvider {
  children: ReactNode;
}
