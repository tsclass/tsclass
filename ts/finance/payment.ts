export interface ISepaConnection {
  institution?: string;
  iban: string;
  bic: string;
}

export interface IPayPalConnection {
  email: string;
}

export interface IPaymentOptionInfo {
  sepaConnection: ISepaConnection;
  payPal: IPayPalConnection;
}
