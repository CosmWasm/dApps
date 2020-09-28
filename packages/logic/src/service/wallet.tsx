import { SigningCosmWasmClient } from "@cosmjs/cosmwasm";
import * as React from "react";
import { useState } from "react";
import { AppConfig } from "../config";
import { createClient, WalletLoader } from "./sdk";

interface CosmWasmContextType {
  readonly initialized: boolean;
  readonly address: string;
  readonly init: (loadWallet: WalletLoader) => void;
  readonly clear: () => void;
  readonly getClient: () => SigningCosmWasmClient;
}

const defaultContext: CosmWasmContextType = {
  initialized: false,
  address: "",
  init: () => {
    return;
  },
  clear: () => {
    return;
  },
  getClient: (): SigningCosmWasmClient => {
    throw new Error("not yet initialized");
  },
};

const CosmWasmContext = React.createContext<CosmWasmContextType>(defaultContext);

export const useSdk = (): CosmWasmContextType => React.useContext(CosmWasmContext);

interface SdkProviderProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  readonly config: AppConfig;
}

export function SdkProvider({ config, children }: SdkProviderProps): JSX.Element {
  const contextWithInit = { ...defaultContext, init };
  const [value, setValue] = useState<CosmWasmContextType>(contextWithInit);

  function clear() {
    setValue({ ...contextWithInit });
  }

  function init(loadWallet: WalletLoader) {
    loadWallet(config.addressPrefix)
      .then((signer) => createClient(config, signer))
      .then(async (client) => {
        const address = client.senderAddress;
        // load from faucet if needed
        if (config.faucetUrl) {
          const acct = await client.getAccount();
          if (!acct?.balance?.length) {
            await fetch(config.faucetUrl, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ticker: config.faucetToken, address }),
            });
          }
        }

        setValue({
          initialized: true,
          address,
          init: () => {
            return;
          },
          clear,
          getClient: () => client,
        });
      });
  }

  return <CosmWasmContext.Provider value={value}>{children}</CosmWasmContext.Provider>;
}
