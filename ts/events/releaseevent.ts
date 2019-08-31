export interface IEvent_Release {
  releaseType: 'Apple App Store' | 'Google Play' | 'npm package' | 'dockerimage';
  dockerImageUrl: string;
  npmPackageUrl: string;
  appleAppStoreIdentifier: string;
}
