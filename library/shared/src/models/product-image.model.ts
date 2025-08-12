export interface ProductImageModel {
  id: number | null;
  productId: number | null;
  src: string;
  sortOrder: number;
  isActive: boolean;
}

export const initialProductImage: ProductImageModel = {
  id: null,
  productId: null,
  src: '',
  sortOrder: 0,
  isActive: true
};