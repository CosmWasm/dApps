import { AppConfig } from "@cosmicdapp/logic";

interface NetworkConfigs {
  readonly [key: string]: AppConfig;
}

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

const heldernet: AppConfig = {
  chainId: "hackatom-wasm",
  chainName: "Helder",
  addressPrefix: "cosmos",
  rpcUrl: "https://rpc.heldernet.cosmwasm.com/",
  httpUrl: "https://lcd.heldernet.cosmwasm.com/",
  faucetUrl: "https://faucet.heldernet.cosmwasm.com/credit",
  feeToken: "ucosm",
  stakingToken: "stake",
  faucetToken: "COSM",
  coinMap: {
    ucosm: { denom: "COSM", fractionalDigits: 6 },
    stake: { denom: "STAKE", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const configs: NetworkConfigs = { local, coralnet, heldernet };

function getAppConfig(): AppConfig {
  const network = process.env.REACT_APP_NETWORK;
  if (!network) return local;

  const config = configs[network];
  if (!config) {
    throw new Error(`No configuration found for network ${network}`);
  }

  return config;
}

export const config = getAppConfig();
