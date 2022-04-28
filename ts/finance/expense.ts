import { business } from '../index.js';

export interface IExpenseItem {
  description: string;
  asset?: boolean;
  accountingType?: any;
  amount: number;
  taxPercentage: number;
}

export interface IVoucher {
  voucherFile?: any;
  date: Date;
  description: string;
  expenseItems: IExpenseItem[];
  contactRef: business.IContact;
}
