export interface OrderItemModel {
  id: number | null;
  orderId: number | null;
  productId: number | null;
  listingId: number | null;
  barcode: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  expiration?: Date | null;
  totalPrice: number;
}

export const initialOrderItem: OrderItemModel = {
  id: null,
  orderId: null,
  productId: null,
  listingId: null,
  barcode: '',
  productName: '',
  quantity: 0,
  unitPrice: 0,
  expiration: null,
  totalPrice: 0
};