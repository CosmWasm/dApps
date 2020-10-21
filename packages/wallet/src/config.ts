import { AppConfig } from "@cosmicdapp/logic";

const local: AppConfig = {
  chainId: "testing",
  chainName: "Testing",
  addressPrefix: "cosmos",
  rpcUrl: "http://localhost:26657",
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
};

const coralnet: AppConfig = {
  chainId: "cosmwasm-coral",
  chainName: "Coral",
  addressPrefix: "coral",
  rpcUrl: "https://rpc.coralnet.cosmwasm.com",
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
};

// REACT_APP_LOCAL is set via `yarn start:local`
const isLocal = process.env.NODE_ENV !== "production" && !!process.env.REACT_APP_LOCAL;

export const config = isLocal ? local : coralnet;
