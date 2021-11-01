import { Image, Prices } from 'types';

export type Article = {
  name: string;
  variantName: string;
  prices: Prices;
  images: Image[];
};
