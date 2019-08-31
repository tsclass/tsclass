/**
 * a constract event describes any kind of sale
 */
export interface IEvent_Contract {
  contractId: string;
  date: number;
  enddate: number;
  product: string;
  type: 'single purchase' | 'subscription' | 'canceled';
}
