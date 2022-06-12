import * as business from './index.js';
import * as finance from '../finance/index.js';
export interface ILetter {
  incidenceId: string;
  date: number;
  from: business.IContact;
  to: business.IContact;
  logoUrl: string;
  subject: string;
  text: string[];
  accentColor?: string;
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
