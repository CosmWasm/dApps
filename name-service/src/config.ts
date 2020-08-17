export interface AppConfig {
  readonly httpUrl: string;
  readonly feeToken: string;
  readonly gasPrice: 0.025;
  readonly faucetUrl?: string;
  readonly faucetToken?: string;
  readonly addressPrefix: string;
  // codeId is the wasm codeId for the name service contract on the given chain
  readonly codeId: number;
}

const local: AppConfig = {
  httpUrl: "http://localhost:1317",
  feeToken: "ucosm",
  gasPrice: 0.025,
  faucetUrl: "http://localhost:8000/credit",
  faucetToken: "COSM",
  addressPrefix: "cosmos",
  codeId: 2,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const demonet: AppConfig = {
  httpUrl: "https://lcd.demo-10.cosmwasm.com",
  feeToken: "ucosm",
  gasPrice: 0.025,
  faucetUrl: "https://faucet.demo-10.cosmwasm.com/credit",
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
