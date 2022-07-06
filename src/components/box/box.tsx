import React, { FunctionComponent } from "react";
import { HtmlProps } from "../../common";

export const Box: FunctionComponent<HtmlProps> = ({
  children,
  className,
  style,
}) => (
  <div className="py-7">
    <div style={style} className={className}>
      {children}
    </div>
  </div>
);
