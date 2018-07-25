import { TCurrency } from './currency';
import { ITransaction } from './transaction';

export interface ICheckingAccount {
  name: string;
  currency: TCurrency;
  transactions: ITransaction[];
}
