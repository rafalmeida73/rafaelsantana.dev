export interface ContextData {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

export interface ContextProvider {
  children: React.ReactNode;
}
