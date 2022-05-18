import React from "react";

export type CSSColorVar = "primary" | "secondary" | "tertiary" | "white";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "primary" | "secondary" | "tertiary";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: ButtonSize;
  kind?: CSSColorVar;
  disabled?: boolean;
  iconName?: string;
  iconLeft?: React.ReactNode;
}
