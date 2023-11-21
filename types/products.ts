import { Category } from 'types/categories';

type Specifications = {
  batteryCount?: string;
  model?: string;
  power?: string;
  display?: string;
  manufacturer?: string;
  powerAdjustment?: string;
  batteryType?: string;
  connectorType?: string;
  deviceType?: string;
};

type Color = {
  name: string;
  images: string[];
};

export type Product = {
  _id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  inStock?: boolean;
  images: string[];
  specifications?: Specifications;
  colors?: Color[];
};
