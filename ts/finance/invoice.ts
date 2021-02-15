import { business } from '..';

export type TInvoiceStatus = 'draft' | 'invoice' | 'paid' | 'refunded';

export interface IInvoiceItem {
  name: string;
  unitType: string;
  quantity: number;
  vatPercentage: number;
  netUnitPrice: number;
  currency: 'EUR';
}

export interface IInvoice {
  billedBy: business.IContact;
  billedTo: business.IContact;
  status: TInvoiceStatus;
  items: IInvoiceItem[];
}
