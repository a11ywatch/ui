/*
 * Copyright (c) A11yWatch, LLC. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 **/

import React from "react";
import ReactDOM from "react-dom";
import { Card } from "./card";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});
