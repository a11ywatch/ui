import { CardProps as CommonCardProps } from "../../../common/card/types";

export interface CardImageType {
  src: string;
  alt?: string;
  name?: string;
  lastUpdated?: string;
}

export interface CardProps extends CommonCardProps {}
