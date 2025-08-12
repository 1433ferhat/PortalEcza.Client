import { CustomerType } from '../enum/customer-type.enum';
import { ListingModel } from './listing.model';

export interface CustomerModel {
  id: number | null;
  username: string;
  email: string;
  companyName: string;
  glnCode: string;
  type: CustomerType | null;
  taxNumber?: string;
  taxOffice?: string;
  invoiceAddress?: string;
  invoiceCity?: string;
  invoiceTown?: string;
  deliveryAddress: string;
  deliveryCity: string;
  deliveryTown: string;
  rating: number;
  ratingCount: number;
  listings?: ListingModel[];
}

export const initialCustomer: CustomerModel = {
  id: null,
  username: '',
  email: '',
  companyName: '',
  glnCode: '',
  type: null,
  taxNumber: '',
  taxOffice: '',
  invoiceAddress: '',
  invoiceCity: '',
  invoiceTown: '',
  deliveryAddress: '',
  deliveryCity: '',
  deliveryTown: '',
  rating: 0,
  ratingCount: 0,
  listings: []
};