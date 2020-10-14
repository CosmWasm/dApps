import { SigningCosmWasmClient } from "@cosmjs/cosmwasm";
import { LcdClient, OfflineSigner, StakingExtension } from "@cosmjs/launchpad";
import * as React from "react";
import { useState } from "react";
import { AppConfig } from "../config";
import { createClient, createStakingClient } from "./sdk";

interface CosmWasmContextType {
  readonly initialized: boolean;
  readonly address: string;
  readonly init: (signer: OfflineSigner) => Promise<void>;
  readonly clear: () => void;
  readonly getClient: () => SigningCosmWasmClient;
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

  function clear() {
    setValue({ ...contextWithInit });
  }

  async function init(signer: OfflineSigner) {
    const client = await createClient(config, signer);
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

    const stakingClient = createStakingClient(config.httpUrl);

    setValue({
      initialized: true,
      address,
      init: async () => {},
      clear,
      getClient: () => client,
      getStakingClient: () => stakingClient,
    });
  }

  return <CosmWasmContext.Provider value={value}>{children}</CosmWasmContext.Provider>;
}
