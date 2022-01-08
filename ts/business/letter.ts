import * as business from './';
import * as finance from '../finance';
export interface ILetter {
  incidenceId: string;
  from: business.IAddress;
  to: business.IAddress;
  subject: string;
  text: string[];
  invoice?: finance.IInvoice;
  contractRef: string;
  timesheetRef: string;
  pdfAttachments: Uint8Array[];
  legalContact: business.IContact;
  language: string;

}