import { IInvoice } from './invoice';

export interface IExpense {
  invoice: IInvoice,
  account: string
}
