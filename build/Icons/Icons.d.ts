/// <reference types="react" />
import "./Icons.scss";
import { IconProps } from "./Icons.types";
declare const Icons: {
    FormIcon: (colorVar: string) => JSX.Element;
};
export declare type IconNames = keyof typeof Icons;
export declare const Icon: ({ size, name, colorVar, ...props }: IconProps) => JSX.Element;
export {};
//# sourceMappingURL=Icons.d.ts.map