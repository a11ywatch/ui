import React, { FunctionComponent } from "react"
import { action } from "@storybook/addon-actions"
import { withA11y } from "@storybook/addon-a11y"
import { Box } from "./box"

export const Accessible = () => (
  <Box className={"box-border p-5 md:box-content"}>Accessible</Box>
)

export const BoxSpacing = () => <Box style={{ margin: 33 }}>Box Spacing</Box>

export const BoxBorder = () => (
  <Box style={{ border: "1px solid black" }}>Box Margin</Box>
)

export const ColorBox = () => (
  <Box className={"bg-black p-5"}>
    <p className={"text-white"}>Color</p>
  </Box>
)

export const Default = ({ children = "Default" }) => <Box>{children}</Box>

export default {
  title: "Box",
  decorators: [withA11y],
  component: Box
}
