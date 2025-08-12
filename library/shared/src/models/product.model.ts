import { CategoryModel, initialCategory } from './category.model';
import { ProductBarcodeModel } from './product-barcode.model';
import { BrandModel } from './brand.model';
import { ProductImageModel } from './product-image.model';
import { ListingModel } from './listing.model';
import { OrderItemModel } from './order-item.model';

export interface ProductModel {
  id: number | null;
  name: string;
  vat: number;
  psf?: number | null;
  description?: string;
  brandId?: number | null;
  brand?: BrandModel | null;
  categoryId?: number | null;
  category?: CategoryModel | null;
  images?: ProductImageModel[];
  listings?: ListingModel[];
  orderItems?: OrderItemModel[];
  barcodes?: ProductBarcodeModel[];
}

export const initialProduct: ProductModel = {
  id: null,
  name: '',
  vat: 0,
  psf: null,
  description: '',
  brandId: null,
  brand: null,
  categoryId: null,
  category: null,
  images: [],
  listings: [],
  orderItems: [],
  barcodes: []
};