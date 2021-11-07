export interface IContainer {
  registryUrl: string;
  tag: string;
  /**
   * version is usually derived from labels
   */
  version: string;
  labels: string[];
}
