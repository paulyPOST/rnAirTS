import { TCoordinate } from "@src/types";

export type TPost = {
  id: number;
  bedrooms: number;
  beds: number;
  coordinate: TCoordinate;
  description: string;
  imageURL: string;
  priceNew: number;
  priceOld: number;
  priceTotal: number;
};
