import { IDate } from './index';
/**
 * describes a company's lifecycle state
 */
export declare type TCompanyStatus = 'planed' | 'founding' | 'active' | 'liquidation' | 'closed';
/**
 * describes a company
 */
export interface ICompany {
    name: string;
    foundedDate: IDate;
    closedDate: IDate;
    status: TCompanyStatus;
}
