import { business } from '..';

export type TInvoiceStatus = 'draft' | 'invoice' | 'paid' | 'refunded';

export interface IInvoiceItem {
  name: string;
  unitType: string;
  unitQuantity: number;
  unitNetPrice: number;
  vatPercentage: number;
  currency: 'EUR';
}

export interface IInvoice {
  billedBy: business.IContact;
  billedTo: business.IContact;
  status: TInvoiceStatus;
  items: IInvoiceItem[];
  printResult?: {
    pdfBufferString: string;
    totalNet: number;
    totalGross: number;
    vatGroups: {
      percentage: number;
      items: IInvoiceItem[];
    }
  };
}
