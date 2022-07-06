import React, { FunctionComponent } from "react";
import { Shape as ShapeCommon, ShapeProps } from "../../common";

export const Shape: FunctionComponent<ShapeProps> = ({
  children,
  onClick,
  className,
  ariaLabel,
  type,
}) => (
  <ShapeCommon
    onClick={onClick}
    className={className}
    ariaLabel={ariaLabel}
    type={type}
  >
    {children}
  </ShapeCommon>
);
