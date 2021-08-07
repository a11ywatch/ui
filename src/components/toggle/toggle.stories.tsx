import React, { FunctionComponent } from "react";
import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
import { Toggle } from "./toggle";

export const Accessible = () => <Toggle label={"SOME LABEL"}></Toggle>;

export const NotActive = () => <Toggle active={false}></Toggle>;

export const Default = () => <Toggle />;

export default {
  title: "Toggle",
  decorators: [withA11y],
  component: Toggle,
};
