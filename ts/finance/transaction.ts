export interface ITransaction {
  id?: string;
  accountId?: string;
  amount: number;
  date: Date;
  description: string;
  name: string;
}
