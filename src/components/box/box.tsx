/*
 * Copyright (c) A11yWatch, LLC. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 **/

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
