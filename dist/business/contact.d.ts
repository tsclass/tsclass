import { IAddress } from '../index';
export declare type TContactSalutation = 'Mr' | 'Ms' | 'Mrs';
export declare type TContactType = 'person' | 'company';
export declare type TContactTitle = 'Doctor' | 'Professor';
export interface IContact {
    salutation?: TContactSalutation;
    type: TContactType;
    title: TContactTitle;
    name: string;
    address: IAddress;
    vatId?: string;
    accountNumber?: string;
}
