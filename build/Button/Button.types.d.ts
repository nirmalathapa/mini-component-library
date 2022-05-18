import React from "react";
export declare type CSSColorVar = "primary" | "secondary" | "tertiary" | "white";
export declare type ButtonSize = "sm" | "md" | "lg";
export declare type ButtonVariant = "primary" | "secondary" | "tertiary";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    size?: ButtonSize;
    kind?: CSSColorVar;
    disabled?: boolean;
    iconName?: string;
    iconLeft?: React.ReactNode;
}
//# sourceMappingURL=Button.types.d.ts.map