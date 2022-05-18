import React, { SVGProps } from "react";
import { CSSColorVar } from "../Button/Button.types";
import { SIZES } from "../constant";
import "./Icons.scss";
import { IconProps } from "./Icons.types";

const Icons = {
  FormIcon: (colorVar: string) => (
    <>
      <path
        clipRule="evenodd"
        d="M8 1.75v1a.25.25 0 0 1-.25.25h-3.5A.25.25 0 0 1 4 2.75v-1a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25Z"
        stroke={`var(--${colorVar})`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 2h1.483a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1H2.5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1H4v0m.5 3.5h3m-3 2H6"
        stroke={`var(--${colorVar})`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
};

const switchColor = (colorVar: CSSColorVar) => {
  switch (colorVar) {
    case "primary":
      return "white";
    case "secondary":
      return "primary";
    case "tertiary":
      return "primary";
    default:
      return "white";
  }
};

export type IconNames = keyof typeof Icons;

export const Icon = ({ size, name, colorVar, ...props }: IconProps) => {
  return (
    <svg
      width={`${SIZES[size]["--size"]}`}
      height={`${SIZES[size]["--size"]}`}
      viewBox={"0 0 12 12"}
      fill="none"
      className="icon"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {Icons[name](switchColor(colorVar))}
    </svg>
  );
};
