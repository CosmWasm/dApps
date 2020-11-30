import { AppConfig, getAppConfig, NetworkConfigs } from "@cosmicdapp/logic";

const local: AppConfig = {
  chainId: "testing",
  chainName: "Testing",
  addressPrefix: "cosmos",
  rpcUrl: "http://localhost:26657",
  httpUrl: "http://localhost:1317",
  faucetUrl: "http://localhost:8000",
  feeToken: "ucosm",
  stakingToken: "uatom",
  coinMap: {
    ucosm: { denom: "COSM", fractionalDigits: 6 },
    uatom: { denom: "ATOM", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const heldernet: AppConfig = {
  chainId: "hackatom-wasm",
  chainName: "Heldernet",
  addressPrefix: "cosmos",
  rpcUrl: "https://rpc.heldernet.cosmwasm.com",
  httpUrl: "https://lcd.heldernet.cosmwasm.com",
  faucetUrl: "https://faucet.heldernet.cosmwasm.com",
  feeToken: "ucosm",
  stakingToken: "ustake",
  coinMap: {
    ucosm: { denom: "COSM", fractionalDigits: 6 },
    ustake: { denom: "STAKE", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const configs: NetworkConfigs = { local, heldernet };
export const config = getAppConfig(configs);
