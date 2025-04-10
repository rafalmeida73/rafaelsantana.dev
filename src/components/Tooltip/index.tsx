import { TooltipProps } from "./types";

export const ToolTip = ({ children, text }: TooltipProps) => {
  return (
    <div className="group relative inline-block">
      {children}

      <div className="bg-jet pointer-events-none absolute top-full left-1/2 z-10 mt-3 hidden -translate-x-1/2 rounded px-2 py-1 text-[1.1rem] whitespace-nowrap text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
        {text}
        <div className="bg-jet absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45"></div>
      </div>
    </div>
  );
};
