export declare type TInvoiceStatus = 'draft' | 'invoice' | 'paid' | 'refunded';
export interface IInvoiceItem {
    name: string;
    unitType: string;
    quantity: number;
    vatPercentage: number;
}
export interface IInvoice {
    status: TInvoiceStatus;
}
