import { AppConfig } from "@cosmicdapp/logic";

const local: AppConfig = {
  chainId: "cosmwasm-cosmos",
  addressPrefix: "cosmos",
  httpUrl: "http://localhost:1317",
  faucetUrl: "http://localhost:8000/credit",
  feeToken: "ucosm",
  stakingToken: "uatom",
  faucetToken: "COSM",
  coinMap: {
    ucosm: { denom: "COSM", fractionalDigits: 6 },
    uatom: { denom: "ATOM", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
  codeId: 40,
};

const coralnet: AppConfig = {
  chainId: "cosmwasm-coral",
  addressPrefix: "coral",
  httpUrl: "https://lcd.coralnet.cosmwasm.com",
  faucetUrl: "https://faucet.coralnet.cosmwasm.com/credit",
  feeToken: "ushell",
  stakingToken: "ureef",
  faucetToken: "SHELL",
  coinMap: {
    ushell: { denom: "SHELL", fractionalDigits: 6 },
    ureef: { denom: "REEF", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
  keplrConfig: {
    chainId: "cosmwasm-coral",
    chainName: "Coral",
    rpc: "https://rpc.coralnet.cosmwasm.com/",
    rest: "https://lcd.coralnet.cosmwasm.com/",
    bech32Config: {
      bech32PrefixAccAddr: `coral`,
      bech32PrefixAccPub: `coralpub`,
      bech32PrefixValAddr: `coralvaloper`,
      bech32PrefixValPub: `coralvaloperpub`,
      bech32PrefixConsAddr: `coralvalcons`,
      bech32PrefixConsPub: `coralvalconspub`,
    },
    currencies: [
      {
        coinDenom: "SHELL",
        coinMinimalDenom: "ushell",
        coinDecimals: 6,
      },
      {
        coinDenom: "REEF",
        coinMinimalDenom: "ureef",
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "SHELL",
        coinMinimalDenom: "ushell",
        coinDecimals: 6,
      },
    ],
    stakeCurrency: {
      coinDenom: "REEF",
      coinMinimalDenom: "ureef",
      coinDecimals: 6,
    },
    gasPriceStep: {
      low: 0.0125,
      average: 0.025,
      high: 0.05,
    },
    bip44: { coinType: 118 },
    coinType: 118,
  },
  codeId: 40,
};

// REACT_APP_LOCAL is set via `yarn start:local`
const isLocal = process.env.NODE_ENV !== "production" && !!process.env.REACT_APP_LOCAL;

export const config = isLocal ? local : coralnet;
