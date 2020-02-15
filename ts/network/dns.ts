export type TDnsRecordType =
  | 'A'
  | 'AAAA'
  | 'CNAME'
  | 'LOC'
  | 'PTR'
  | 'MX'
  | 'NAPTR'
  | 'NS'
  | 'SOA'
  | 'SPF'
  | 'SRV'
  | 'TXT';

export interface IDnsRecord {
  name: string;
  type: TDnsRecordType;
  value: string;
  dnsSecEnabled: boolean;
}
