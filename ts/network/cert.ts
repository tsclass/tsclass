export interface ICert {
  id: string;
  domainName: string;
  created: number;
  validUntil: number;
  privateKey: string;
  publicKey: string;
  csr: string;
}
