import { CoinMap } from "./utils";

export interface KeplrCoin {
  readonly coinDenom: string;
  readonly coinMinimalDenom: string;
  readonly coinDecimals: number;
}

export interface KeplrConfig {
  readonly chainId: string;
  readonly chainName: string;
  readonly rpc: string;
  readonly rest: string;
  readonly bech32Config: {
    readonly bech32PrefixAccAddr: string;
    readonly bech32PrefixAccPub: string;
    readonly bech32PrefixValAddr: string;
    readonly bech32PrefixValPub: string;
    readonly bech32PrefixConsAddr: string;
    readonly bech32PrefixConsPub: string;
  };
  readonly currencies: readonly KeplrCoin[];
  readonly feeCurrencies: readonly KeplrCoin[];
  readonly stakeCurrency: KeplrCoin;
  readonly gasPriceStep: {
    readonly low: number;
    readonly average: number;
    readonly high: number;
  };
  readonly bip44: { readonly coinType: number };
  readonly coinType: number;
}

export interface AppConfig {
  readonly chainId: string;
  readonly addressPrefix: string;
  readonly httpUrl: string;
  readonly faucetUrl: string;
  readonly feeToken: string;
  readonly stakingToken: string;
  readonly faucetToken: string;
  readonly coinMap: CoinMap;
  readonly gasPrice: number;
  readonly keplrConfig?: KeplrConfig;
  readonly codeId?: number;
}
