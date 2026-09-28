/** M02 boundary only. M05 owns environment loading, secrets and validation. */
export interface ConfigurationReader {
  get<T = string>(key: string): T | undefined;
  require<T = string>(key: string): T;
}
