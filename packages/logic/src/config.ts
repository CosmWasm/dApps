export interface AppConfig {
  readonly httpUrl: string;
  readonly feeToken: string;
  readonly gasPrice: number;
  readonly faucetUrl?: string;
  readonly faucetToken?: string;
  readonly addressPrefix: string;
  // codeId is the wasm codeId for the name service contract on the given chain
  readonly codeId: number;
}
