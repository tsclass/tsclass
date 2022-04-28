import { finance } from '../index.js';

export interface ICheckingAccount {
  name: string;
  currency: finance.TCurrency;
  transactions?: finance.ITransaction[];
}
