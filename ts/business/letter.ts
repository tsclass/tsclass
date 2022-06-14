import * as business from './index.js';
import * as finance from '../finance/index.js';
import { TypedArray } from 'type-fest';
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
  pdfBuffer?: TypedArray;
  pdfAttachmentBuffers: TypedArray[];
  legalContact: business.IContact;
  language: string;
}
