import React, { FunctionComponent } from "react";
import { ButtonProps } from "./types";

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  className,
  ariaLabel,
}) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className={`hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-inherit border-current ${className}`}
  >
    {children}
  </button>
);
