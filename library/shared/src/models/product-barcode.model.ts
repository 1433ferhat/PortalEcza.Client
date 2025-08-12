export interface ProductBarcodeModel {
  id: number | null;
  productId: number | null;
  barcode: string;
  isSelected: boolean;
}

export const initialProductBarcode: ProductBarcodeModel = {
  id: null,
  productId: null,
  barcode: '',
  isSelected: false
};
