import { AppConfig, getAppConfig, NetworkConfigs } from "@cosmicdapp/logic";

const local: AppConfig = {
  chainId: "testing",
  chainName: "Testing",
  addressPrefix: "wasm",
  rpcUrl: "http://localhost:26659",
  httpUrl: "http://localhost:1317",
  faucetUrl: "http://localhost:8000",
  feeToken: "ucosm",
  stakingToken: "uatom",
  coinMap: {
    ucosm: { denom: "COSM", fractionalDigits: 6 },
    uatom: { denom: "ATOM", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
  // Replace with proper codeId from the previously uploaded name service contracts
  codeId: -1,
};

const musselnet: AppConfig = {
  chainId: "musselnet-4",
  chainName: "Musselnet",
  addressPrefix: "wasm",
  rpcUrl: "https://rpc.musselnet.cosmwasm.com",
  httpUrl: "https://lcd.musselnet.cosmwasm.com",
  faucetUrl: "https://faucet.musselnet.cosmwasm.com",
  feeToken: "umayo",
  stakingToken: "ufrites",
  coinMap: {
    umayo: { denom: "MAYO", fractionalDigits: 6 },
    ufrites: { denom: "FRITES", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
  codeId: 6,
};

const configs: NetworkConfigs = { local, musselnet };
export const config = getAppConfig(configs);
