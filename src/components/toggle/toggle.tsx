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
    active?: boolean;
    textActive?: string;
    textInactive?: string;
  }
> = ({ onClick, active, textActive = "Yearly", textInactive = "Monthly" }) => (
  <div className="py-4">
    <label htmlFor="toogleA" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          id="toogleA"
          type="checkbox"
          className="sr-only"
          onClick={onClick}
        />
        <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        <div
          className={`dot absolute w-6 h-6 bg-white rounded-full shadow left-1 -top-1 transition`}
        ></div>
      </div>
      <div className="ml-4 text-white-700 font-medium">
        {active ? textActive : textInactive}
      </div>
    </label>
  </div>
);

export const Toggle = styled(ToggleWrapper)``;
