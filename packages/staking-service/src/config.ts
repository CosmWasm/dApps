import { AppConfig, CoinMap } from "@cosmicdapp/logic";

const local: AppConfig = {
  addressPrefix: "cosmos",
  gasPrice: 0.025,
  httpUrl: "http://localhost:1317",
  feeToken: "ucosm",
  faucetUrl: "http://localhost:8000/credit",
  faucetToken: "COSM",
};

const coinMap: CoinMap = {
  ushell: { denom: "SHELL", fractionalDigits: 6 },
  ureef: { denom: "REEF", fractionalDigits: 6 },
};

const coralnet: AppConfig = {
  addressPrefix: "coral",
  gasPrice: 0.025,
  httpUrl: "https://lcd.coralnet.cosmwasm.com",
  feeToken: "ushell",
  stakingToken: "ureef",
  faucetUrl: "https://faucet.coralnet.cosmwasm.com/credit",
  faucetToken: "SHELL",
  codeId: 107,
  coinMap,
};

// REACT_APP_LOCAL is set via `yarn start:local`
const isLocal = process.env.NODE_ENV !== "production" && !!process.env.REACT_APP_LOCAL;

export const config = isLocal ? local : coralnet;
