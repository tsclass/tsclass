import { IContact } from '../index'

export type TInvoiceStatus = 'draft' | 'invoice' | 'paid' | 'refunded'

export interface IInvoiceItem {
  name: string
  unitType: string
  quantity: number
  vatPercentage: number
}

export interface IInvoice {
  billedBy: IContact
  billedTo: IContact
  status: TInvoiceStatus,
  items: IInvoiceItem[]
}
