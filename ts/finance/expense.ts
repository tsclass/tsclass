import { IInvoice } from './invoice';
import { IContact } from '../business/contact';

export interface IExpenseItem {
  amount: number;
  taxPercentage: number;
}

export interface IExpense {
  voucherFile?: any;
  date: Date;
  description: string;
  expenseItems: IExpenseItem[];
  contactRef: string;
  accountRef: string;
}
