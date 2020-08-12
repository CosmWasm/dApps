export interface AppConfig {
  readonly httpUrl: string;
  readonly faucetUrl?: string;
  readonly addressPrefix: string;
  // codeId is the wasm codeId for the name service contract on the given chain
  readonly codeId: number;
}

const local: AppConfig = {
  httpUrl: "http://localhost:1317",
  faucetUrl: "http://localhost:8000/credit",
  addressPrefix: "cosmos",
  codeId: 2,
};

const demonet: AppConfig = {
  httpUrl: "https://lcd.demo-10.cosmwasm.com",
  faucetUrl: "https://faucet.demo-10.cosmwasm.com/credit",
  addressPrefix: "cosmos",
  codeId: 2,
};

// REACT_APP_LOCAL is set via `yarn start:local`
const isLocal = process.env.NODE_ENV !== "production" && !!process.env.REACT_APP_LOCAL;

export const config = isLocal ? local : demonet;
