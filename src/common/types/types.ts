import { ReactNode } from "react";

export interface HtmlProps {
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  style?: {};
  onClick?(): any;
}
