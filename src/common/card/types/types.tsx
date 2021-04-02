import { ReactNode } from "react";

export interface CardImageType {
  src: string;
  alt?: string;
  name?: string;
  lastUpdated?: string;
}

export interface CardProps {
  children?: ReactNode;
  disabled?: boolean;
  horizontal?: boolean;
  className?: string;
  title?: string;
  info?: string;
  premium?: boolean;
  tags?: string[];
  hidden?: boolean;
  link?: string;
  cardImage?: CardImageType;
  author?: CardImageType;
}
