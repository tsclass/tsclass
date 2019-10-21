export interface INetworkNode {
  name: string;
  ipv4: string;
  ipv6: string;
  securityLevel: 'private' | 'public' | 'confidential';
}
