import { CoinMap } from "./utils";

export interface AppConfig {
  readonly addressPrefix: string;
  readonly gasPrice: number;
  readonly httpUrl: string;
  readonly feeToken: string;
  readonly stakingToken?: string;
  readonly faucetUrl: string;
  readonly faucetToken: string;
  readonly codeId?: number;
  readonly coinMap?: CoinMap;
}
