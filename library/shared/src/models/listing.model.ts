import { ProductModel } from "./product.model";


export interface ListingModel {
  id: number | null;
  productId: number | null;
  customerId: number | null;
  sku?: string;
  price: number;
  quantity: number;
  expiration?: Date | null;
  maxCount: number;
  isFeatured: boolean;
  isActive: boolean;
  selectedBarcodeId: number | null;
  product?: ProductModel | null;
}

export const initialListing: ListingModel = {
  id: null,
  productId: null,
  customerId: null,
  sku: '',
  price: 0,
  quantity: 0,
  expiration: null,
  maxCount: 0,
  isFeatured: false,
  isActive: false,
  selectedBarcodeId: null,
  product: null
};