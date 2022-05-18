import { SVGAttributes } from "react";
import { CSSColorVar } from "../Button/Button.types";

export type IconProps = SVGAttributes<SVGElement> & {
  size?: "sm" | "md" | "lg";
  name?: string;
  colorVar?: CSSColorVar;
};
