import { IAddress } from '..';

export type TContactSalutation = 'Mr' | 'Ms' | 'Mrs';

export type TContactType = 'person' | 'company';

export type TContactTitle = 'Doctor' | 'Professor';

export interface IContact {
  // =======
  // general
  // =======
  salutation?: TContactSalutation;
  type: TContactType;
  title?: TContactTitle;
  name: string;
  surname?: string;
  legalEntity?: string;
  address: IAddress;
  description: string;
  customerNumber?: string;

  email?: string;
  phone?: string;

  // =========
  // financial
  // =========
  vatId?: string;
  bankAccountNumber?: string;
}
