import { finance } from '../';

export interface ICheckingAccount {
  name: string;
  currency: finance.TCurrency;
  transactions: finance.ITransaction[];
}
