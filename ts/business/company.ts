import { business, general } from '../index.js';

/**
 * describes a company's lifecycle state
 */
export type TCompanyStatus = 'planed' | 'founding' | 'active' | 'liquidation' | 'closed';

/**
 * describes a company
 */
export interface ICompany {
  name: string;
  foundedDate: general.IDate;
  closedDate: general.IDate;
  status: business.TCompanyStatus;
  contact: business.IContact;
}
