import { AppConfig } from "@cosmicdapp/logic";

const local: AppConfig = {
  httpUrl: "http://localhost:1317",
  feeToken: "ucosm",
  gasPrice: 0.025,
  faucetUrl: "http://localhost:8000/credit",
  faucetToken: "COSM",
  addressPrefix: "cosmos",
  codeId: 2,
};

const coralnet: AppConfig = {
  httpUrl: "https://lcd.coralnet.cosmwasm.com",
  feeToken: "ushell",
  gasPrice: 0.025,
  faucetUrl: "https://faucet.coralnet.cosmwasm.com/credit",
  faucetToken: "SHELL",
  addressPrefix: "coral",
  codeId: 5,
};

// REACT_APP_LOCAL is set via `yarn start:local`
const isLocal = process.env.NODE_ENV !== "production" && !!process.env.REACT_APP_LOCAL;

export const config = isLocal ? local : coralnet;
