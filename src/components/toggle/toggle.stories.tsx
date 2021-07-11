import React, { FunctionComponent } from "react";
import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
import { Toggle } from "./toggle";

export const Accessible = () => (
  <Toggle className={"box-border p-5 md:box-content"}></Toggle>
);

export const BoxSpacing = () => <Toggle style={{ margin: 33 }}></Toggle>;

export const BoxBorder = () => (
  <Toggle style={{ border: "1px solid black" }}></Toggle>
);

export const ColorBox = () => <Toggle className={"bg-black p-5"}></Toggle>;

export const Default = ({ children = "Default" }) => <Toggle />;

export default {
  title: "Toggle",
  decorators: [withA11y],
  component: Toggle,
};
