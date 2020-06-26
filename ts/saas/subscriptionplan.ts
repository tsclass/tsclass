import { IProduct } from './product';

export interface ISubscriptionPlan {
  name: string;
  unit: 'device' | 'user';
  quantity: boolean;
  availableTerms: {
    period: 'daily' | 'weekly' | 'monthly' | 'yearly';
    price: number;
    currency: 'EUR' | 'USD';
  }[];
  containedProducts: IProduct[];
  limits: any;
}
