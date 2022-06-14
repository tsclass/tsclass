import * as business from './index.js';
import * as finance from '../finance/index.js';
import * as database from '../database/index.js';
import type { TypedArray } from 'type-fest';
export interface ILetter {
  incidenceId: string;
  date: number;
  from: business.IContact;
  to: business.IContact;
  legalContact: business.IContact;
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
  language: string;
  objectActions: database.IObjectAction[];
}
