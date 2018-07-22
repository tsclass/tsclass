import { TCurrency } from './currency';
import { ITransaction } from './payment';

export interface ICheckingAccount {
  name: string;
  currency: TCurrency;
  payments: ITransaction[];
}
