import { SigningCosmWasmClient } from "@cosmjs/cosmwasm";
import { OfflineSigner } from "@cosmjs/launchpad";
import ky from "ky";
import * as React from "react";
import { useState } from "react";
import { AppConfig } from "../config";
import { createClient, loadOrCreateWallet } from "./sdk";

export interface CosmWasmContextType {
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

export const CosmWasmContext = React.createContext<CosmWasmContextType>(defaultContext);

export const useSdk = (): CosmWasmContextType => React.useContext(CosmWasmContext);

export interface BurnerWalletProviderProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  config: AppConfig;
}

export function BurnerWalletProvider({ config, children }: BurnerWalletProviderProps): JSX.Element {
  return (
    <SdkProvider config={config} loadWallet={loadOrCreateWallet}>
      {children}
    </SdkProvider>
  );
}

export interface SdkProviderProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  config: AppConfig;
  loadWallet: (addressPrefix: string) => Promise<OfflineSigner>;
}

export function SdkProvider({ config, loadWallet, children }: SdkProviderProps): JSX.Element {
  const contextWithInit = { ...defaultContext, init: init };
  const [value, setValue] = useState(contextWithInit);

  function init() {
    loadWallet(config.addressPrefix)
      .then((signer) => createClient(config.httpUrl, signer))
      .then(async (client) => {
        const address = client.senderAddress;
        // load from faucet if needed
        if (config.faucetUrl) {
          const acct = await client.getAccount();
          if (!acct?.balance?.length) {
            await ky.post(config.faucetUrl, { json: { ticker: "COSM", address } });
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
