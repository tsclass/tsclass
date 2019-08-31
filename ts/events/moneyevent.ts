export interface IEvent_Money {
  transferId: string;
  valueInEuro: number;
  channel: 'sepa' | 'creditcard' | 'paypal' | 'cardano';
  direction: 'internal' | 'outgoing' | 'incoming';
}
