/*
 * Copyright (c) A11yWatch, LLC. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 **/

import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { HtmlProps } from "../../common";

export const ToggleWrapper: FunctionComponent<
  HtmlProps & {
    textActive?: string;
    onClick?(x?: any): any;
  }
> = ({ onClick, textActive = "Yearly" }) => (
  <label
    className="ml-4 text-white-700 font-medium text-center text-lg inline-flex items-center py-4"
    htmlFor="toogleA"
  >
    <input
      id="toogleA"
      type="checkbox"
      onClick={onClick}
      className={"h-5 w-5 text-gray-600 mr-2"}
    />
    {textActive}
  </label>
);

export const Toggle = styled(ToggleWrapper)``;
