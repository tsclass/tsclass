import { business, finance } from '../index.js';

export type TInvoiceStatus = 'draft' | 'invoice' | 'paid' | 'refunded';

export interface IInvoiceItem {
  name: string;
  articleNumber?: string;
  unitType: string;
  unitQuantity: number;
  unitNetPrice: number;
  vatPercentage: number;
  currency: 'EUR';
}

export interface IInvoice {
  id: string;
  billedBy: business.IContact;
  billedTo: business.IContact;
  status: TInvoiceStatus;
  items: IInvoiceItem[];
  periodOfPerformance?: {
    from: number;
    to: number;
  };
  deliveryDate?: number;
  dueInDays: number;
  reverseCharge: boolean;
  printResult?: {
    pdfBufferString: string;
    totalNet: number;
    totalGross: number;
    vatGroups: {
      percentage: number;
      items: IInvoiceItem[];
    };
  };
  paymentOptions?: finance.IPaymentOptionInfo;
}
