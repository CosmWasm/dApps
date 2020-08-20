import { SigningCosmWasmClient } from "@cosmjs/cosmwasm";
import { OfflineSigner } from "@cosmjs/launchpad";
import * as React from "react";
import { useState } from "react";
import { AppConfig } from "../config";
import { createClient, loadOrCreateWallet } from "./sdk";

interface CosmWasmContextType {
  readonly initialized: boolean;
  readonly address: string;
  readonly init: () => void;
  readonly getClient: () => SigningCosmWasmClient;
}

const defaultContext: CosmWasmContextType = {
  initialized: false,
  address: "",
  init: () => {
    return;
  },
  getClient: (): SigningCosmWasmClient => {
    throw new Error("not yet initialized");
  },
};

const CosmWasmContext = React.createContext<CosmWasmContextType>(defaultContext);

const useSdk = (): CosmWasmContextType => React.useContext(CosmWasmContext);

interface ConfigWalletProps extends ConfigProp {
  readonly loadWallet: (addressPrefix: string) => Promise<OfflineSigner>;
}

type SdkProviderProps = ConfigWalletProps & React.HTMLAttributes<HTMLOrSVGElement>;

function SdkProvider({ config, loadWallet, children }: SdkProviderProps): JSX.Element {
  const contextWithInit = { ...defaultContext, init: init };
  const [value, setValue] = useState(contextWithInit);

  function init() {
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
          address: address,
          init: () => {
            return;
          },
          getClient: () => client,
        });
      });
  }

  return <CosmWasmContext.Provider value={value}>{children}</CosmWasmContext.Provider>;
}

interface ConfigProp {
  readonly config: AppConfig;
}

type BurnerWalletProviderProps = ConfigProp & React.HTMLAttributes<HTMLOrSVGElement>;

function BurnerWalletProvider({ config, children }: BurnerWalletProviderProps): JSX.Element {
  return (
    <SdkProvider config={config} loadWallet={loadOrCreateWallet}>
      {children}
    </SdkProvider>
  );
}

export { useSdk, SdkProvider, BurnerWalletProvider };
