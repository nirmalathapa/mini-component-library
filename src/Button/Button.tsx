import React from "react";
import cx from "classnames";
import { ButtonProps } from "./Button.types";

import "./Button.scss";

const Button: React.FC<ButtonProps> = ({
  size = "sm",
  kind = "primary",
  disabled = false,
  children,
  iconLeft,
}) => (
  <button
    type="button"
    data-testid="button"
    disabled={disabled}
    className={cx("button", `btn--${kind}`, `btn--${size}`)}
  >
    {iconLeft}
    {children}
  </button>
);

export default Button;
