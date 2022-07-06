import React, { FunctionComponent } from "react";
import { Button as ButtonCommon, ButtonProps } from "../../common";

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  className,
  ariaLabel,
}) => (
  <ButtonCommon onClick={onClick} className={className} ariaLabel={ariaLabel}>
    {children}
  </ButtonCommon>
);
