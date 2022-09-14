import { finance } from '../index.js'
import { business } from '../index.js';

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
  address: business.IAddress;
  description: string;
  customerNumber?: string;
  email?: string;

  logoUrl?: string;
  website?: string;
  facebookUrl?: string;
  twitterUrl?: string;

  phone?: string;
  fax?: string;

  // =========
  // financial
  // =========
  vatId?: string;
  sepaConnection?: finance.ISepaConnection;
}
