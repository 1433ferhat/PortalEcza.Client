import { ProductModel } from "./product.model";

export interface BrandModel {
  id: number | null;
  name: string;
  products?: ProductModel[];
}

export const initialBrand: BrandModel = {
  id: null,
  name: '',
  products: []
};