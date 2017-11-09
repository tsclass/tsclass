import { IContact } from '../index';
export declare type TInvoiceStatus = 'draft' | 'invoice' | 'paid' | 'refunded';
export interface IInvoiceItem {
    name: string;
    billedBy: IContact;
    billedTo: IContact;
    unitType: string;
    quantity: number;
    vatPercentage: number;
}
export interface IInvoice {
    status: TInvoiceStatus;
}
