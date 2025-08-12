import { ProductModel } from "./product.model";

export interface CategoryModel {
  id: number | null;
  name: string;
  parentCategoryId?: number | null;
  parentCategory?: CategoryModel | null;
  subCategories?: CategoryModel[];
  products?: ProductModel[];
}

export const initialCategory: CategoryModel = {
  id: null,
  name: '',
  parentCategoryId: null,
  parentCategory: null,
  subCategories: [],
  products: []
};
