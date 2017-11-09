export type TContactSalutation = 'Mr' | 'Ms' | 'Mrs'

export type TContactType = 'person' | 'company'

export type TContactTitle =  'Doctor' | 'Professor'

export interface IContact {
  // =======
  // general
  // =======
  salutation?: TContactSalutation
  type: TContactType
  title: TContactTitle
  name: string
  streetName: string
  houseNumber: string
  postalCode: string
  city: string
  country: string
  
  // =========
  // financial
  // =========
  vatId?: string
  accountNumber?: string
}