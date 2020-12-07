import { SigningCosmWasmClient } from "@cosmjs/cosmwasm";
import { FaucetClient } from "@cosmjs/faucet-client";
import { LcdClient, OfflineSigner, StakingExtension } from "@cosmjs/launchpad";
import * as React from "react";
import { useEffect, useState } from "react";
import { AppConfig } from "../config";
import { createClient, createStakingClient } from "./sdk";

interface CosmWasmContextType {
  readonly initialized: boolean;
  readonly address: string;
  readonly config: Partial<AppConfig>;
  readonly init: (signer: OfflineSigner) => void;
  readonly clear: () => void;
  readonly getSigner: () => OfflineSigner;
  readonly getClient: () => SigningCosmWasmClient;
  readonly getStakingClient: () => LcdClient & StakingExtension;
  readonly changeConfig: (updates: Partial<AppConfig>) => void;
  readonly changeSigner: (newSigner: OfflineSigner) => void;
}

function throwNotInitialized(): any {
  throw new Error("Not yet initialized");
}

const defaultContext: CosmWasmContextType = {
  initialized: false,
  address: "",
  config: {},
  init: throwNotInitialized,
  clear: throwNotInitialized,
  getSigner: throwNotInitialized,
  getClient: throwNotInitialized,
  getStakingClient: throwNotInitialized,
  changeConfig: throwNotInitialized,
  changeSigner: throwNotInitialized,
};

const CosmWasmContext = React.createContext<CosmWasmContextType>(defaultContext);

export const useSdk = (): CosmWasmContextType => React.useContext(CosmWasmContext);

interface SdkProviderProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  readonly config: AppConfig;
}

export function SdkProvider({ config: configProp, children }: SdkProviderProps): JSX.Element {
  const [config, setConfig] = useState(configProp);
  const [signer, setSigner] = useState<OfflineSigner>();
  const [client, setClient] = useState<SigningCosmWasmClient>();

  const contextWithInit = { ...defaultContext, init: setSigner };
  const [value, setValue] = useState<CosmWasmContextType>(contextWithInit);

  function clear() {
    setValue({ ...contextWithInit });
  }

  function changeConfig(updates: Partial<AppConfig>) {
    setConfig((config) => ({ ...config, ...updates }));
  }

  useEffect(() => {
    if (!signer) return;

    (async function updateClient() {
      const client = await createClient(config, signer);
      setClient(client);
    })();
  }, [signer, config]);

  useEffect(() => {
    if (!signer || !client) return;

    const address = client.senderAddress;
    const stakingClient = createStakingClient(config.httpUrl);

    (async function updateValue() {
      // load from faucet if needed
      if (config.faucetUrl) {
        const acct = await client.getAccount();

        if (!acct?.balance?.length) {
          const faucet = new FaucetClient(config.faucetUrl);
          await faucet.credit(address, config.feeToken);
        }
      }

      setValue({
        initialized: true,
        address,
        config,
        init: () => {},
        clear,
        getSigner: () => signer,
        getClient: () => client,
        getStakingClient: () => stakingClient,
        changeConfig,
        changeSigner: setSigner,
      });
    })();
  }, [client]);

  return <CosmWasmContext.Provider value={value}>{children}</CosmWasmContext.Provider>;
}
