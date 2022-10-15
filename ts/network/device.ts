export interface IDevice {
  id: string;
  resolutionWidth?: number;
  resolutionHeight?: number;
  dpi?: number;
  manufacturer?: string;
  name?: string;
  ipv4?: string;
  ipv6?: string;
}