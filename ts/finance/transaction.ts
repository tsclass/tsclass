export interface ITransaction {
  id?: string;
  accountId?: string;
  description: string;
  amount: number;
  date: Date;
}
