import * as business from './';
import * as finance from '../finance';
export interface ILetter {
  incidenceId: string;
  date: number;
  from: business.IContact;
  to: business.IContact;
  logoUrl: string;
  accentColor: string;
  subject: string;
  text: string[];
  invoiceData?: finance.IInvoice;
  contractData?: {
    id: string;
    contractDate: number;
  };
  timesheetData: string;
  pdfAttachments: Uint8Array[];
  legalContact: business.IContact;
  language: string;
}