import { SigningCosmWasmClient } from "@cosmjs/cosmwasm";
import { FaucetClient } from "@cosmjs/faucet-client";
import { LcdClient, OfflineSigner, StakingExtension } from "@cosmjs/launchpad";
import * as React from "react";
import { useState } from "react";
import { AppConfig } from "../config";
import { createClient, createStakingClient } from "./sdk";
import { useEffect } from "react";

interface CosmWasmContextType {
  readonly initialized: boolean;
  readonly address: string;
  readonly init: (signer: OfflineSigner) => Promise<void>;
  readonly clear: () => void;
  readonly getClient: () => SigningCosmWasmClient;
  readonly resetClient: (newConfig: AppConfig, newSigner: OfflineSigner) => Promise<void>;
  readonly getStakingClient: () => LcdClient & StakingExtension;
}

const defaultContext: CosmWasmContextType = {
  initialized: false,
  address: "",
  init: async () => {},
  clear: () => {},
  getClient: (): SigningCosmWasmClient => {
    throw new Error("not yet initialized");
  },
  resetClient: async () => {
    throw new Error("not yet initialized");
  },
  getStakingClient: (): LcdClient & StakingExtension => {
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
  const [client, setClient] = useState<SigningCosmWasmClient>();

  async function init(signer: OfflineSigner) {
    const client = await createClient(config, signer);
    setClient(client);
  }

  async function resetClient(newConfig: AppConfig, newSigner: OfflineSigner) {
    const newClient = await createClient(newConfig, newSigner);
    setClient(newClient);
  }

  function clear() {
    setValue({ ...contextWithInit });
  }

  useEffect(() => {
    if (!client) return;
    (async function updateValue() {
      const address = client.senderAddress;

      // load from faucet if needed
      if (config.faucetUrl) {
        const acct = await client.getAccount();
        if (!acct?.balance?.length) {
          const faucet = new FaucetClient(config.faucetUrl);
          await faucet.credit(address, config.feeToken);
        }
      }

      const stakingClient = createStakingClient(config.httpUrl);

      setValue({
        initialized: true,
        address,
        init: async () => {},
        clear,
        getClient: () => client,
        resetClient,
        getStakingClient: () => stakingClient,
      });
    })();
  }, [client]);

  return <CosmWasmContext.Provider value={value}>{children}</CosmWasmContext.Provider>;
}
