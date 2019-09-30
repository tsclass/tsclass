import { IContact } from '..';
import { IDate } from '..';

/**
 * describes a company's lifecycle state
 */
export type TCompanyStatus = 'planed' | 'founding' | 'active' | 'liquidation' | 'closed';

/**
 * describes a company
 */
export interface ICompany {
  name: string;
  foundedDate: IDate;
  closedDate: IDate;
  status: TCompanyStatus;
  contact: IContact;
}
