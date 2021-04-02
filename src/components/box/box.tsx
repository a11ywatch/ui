/*
 * Copyright (c) A11yWatch, LLC. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 **/

import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { HtmlProps } from "../../common"

export const BoxWrapper: FunctionComponent<HtmlProps> = ({
  children,
  className,
  style
}) => (
  <div style={style} className={className}>
    {children}
  </div>
)

export const Box = styled(BoxWrapper)`
  margin-top: 32px;
  margin-bottom: 32px;
`
