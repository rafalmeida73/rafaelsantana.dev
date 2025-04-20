"use client";

import React, { createContext, useContext, useState } from "react";

import { ContextData, ContextProvider } from "./types";

const ConnectionContext = createContext<ContextData>({} as ContextData);

const ColorProvider = ({ children }: ContextProvider) => {
  const [color, setColor] = useState("#3bbbe8");

  return (
    <ConnectionContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
};

function useColor(): ContextData {
  const context = useContext(ConnectionContext);

  if (!context) {
    throw new Error("useColor must be used within an ColorProvider.");
  }

  return context;
}

export { ColorProvider, useColor };
