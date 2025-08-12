import { OrderItemModel } from './order-item.model';
import { OrderStatus } from '../enum/order-status.enum';


export interface OrderModel {
  id: number | null;
  buyerId: number | null;
  sellerId: number | null;
  status: OrderStatus | null;
  totalAmount: number;
  shipmentCompany?: string;
  trackingNumber?: string;
  trackingLink?: string;
  note?: string;
  city: string;
  town: string;
  address: string;
  items?: OrderItemModel[];
}

export const initialOrder: OrderModel = {
  id: null,
  buyerId: null,
  sellerId: null,
  status: null,
  totalAmount: 0,
  shipmentCompany: '',
  trackingNumber: '',
  trackingLink: '',
  note: '',
  city: '',
  town: '',
  address: '',
  items: []
};
