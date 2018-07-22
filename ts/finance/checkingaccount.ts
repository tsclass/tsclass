import { TCurrency } from './currency';
import { IPayment } from './payment';

export interface ICheckingAccount {
  name: string;
  currency: TCurrency;
  payments: IPayment[];
}
