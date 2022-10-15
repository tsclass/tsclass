import * as business from './index.js';
import * as finance from '../finance/index.js';
import * as database from '../database/index.js';
import type { TypedArray } from 'type-fest';
export interface ILetter {
  incidenceId: string;
  type: 'invoice' | 'notice' | 'warning' | 'verification' | 'contract';
  date: number;
  from: business.IContact;
  to: business.IContact;
  legalContact: business.IContact;
  logoUrl: string;
  subject: string;
  text: string[];
  accentColor?: string;
  needsCoverSheet: boolean;
  invoiceData?: finance.IInvoice;
  contractData?: {
    id: string;
    contractDate: number;
  };
  timesheetData: string;
  pdf?: business.IPdf;
  pdfAttachments: business.IPdf[];
  language: string;
  objectActions: database.IObjectAction[];
}
