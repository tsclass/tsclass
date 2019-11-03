export interface IReverseProxyConfig {
  destinationIp: string;
  destinationPort: string;
  hostName: string;
  privateKey: string;
  publicKey: string;
  authentication?: {
    type: 'Basic';
    user: string;
    pass: string;
  };
}
