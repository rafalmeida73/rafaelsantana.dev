import { Links } from "../Links";
import { InfoProps } from "./types";

export const Info = ({ title, description, time }: InfoProps) => {
  return (
    <div className="my-10 text-center">
      {!title?.link ? (
        <p className="text-picton-blue mb-1 text-[1.2rem] font-bold">
          {title?.text}
        </p>
      ) : (
        <Links
          href={title?.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={title?.ariaLabel}
          className="text-picton-blue !block"
        >
          {title?.text}
        </Links>
      )}
      <p className="text-1 mt-2 leading-8 font-[var(--font-Inconsolata)] text-white">
        {time}
      </p>
      {!description?.link ? (
        <p className="text-1xl text-white">{description?.text}</p>
      ) : (
        <Links
          href={description?.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={description?.ariaLabel}
          className="text-1xl text-white"
        >
          {description?.text}
        </Links>
      )}
    </div>
  );
};
