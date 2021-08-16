import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { FaucetClient } from "@cosmjs/faucet-client";
import { Coin } from "@cosmjs/stargate";
import { OfflineSigner } from "@cosmjs/proto-signing";
import { QueryClient, StakingExtension, DistributionExtension } from "@cosmjs/stargate";
import * as React from "react";
import { useEffect, useState } from "react";
import { AppConfig } from "../config";
import { useError } from "./error";
import { createClient, createStakingClient } from "./sdk";

interface CosmWasmContextType {
  readonly initialized: boolean;
  readonly init: (signer: OfflineSigner) => void;
  readonly clear: () => void;
  readonly config: Partial<AppConfig>;
  readonly changeConfig: (updates: Partial<AppConfig>) => void;
  readonly address: string;
  readonly balance: readonly Coin[];
  readonly refreshBalance: () => Promise<void>;
  readonly hitFaucet: () => Promise<void>;
  readonly getSigner: () => OfflineSigner;
  readonly changeSigner: (newSigner: OfflineSigner) => void;
  readonly getClient: () => SigningCosmWasmClient;
  readonly getStakingClient: () => QueryClient & StakingExtension & DistributionExtension;
}

function throwNotInitialized(): any {
  throw new Error("Not yet initialized");
}

const defaultContext: CosmWasmContextType = {
  initialized: false,
  init: throwNotInitialized,
  clear: throwNotInitialized,
  config: {},
  changeConfig: throwNotInitialized,
  address: "",
  balance: [],
  refreshBalance: throwNotInitialized,
  hitFaucet: throwNotInitialized,
  getSigner: throwNotInitialized,
  changeSigner: throwNotInitialized,
  getClient: throwNotInitialized,
  getStakingClient: throwNotInitialized,
};

const CosmWasmContext = React.createContext<CosmWasmContextType>(defaultContext);

export const useSdk = (): CosmWasmContextType => React.useContext(CosmWasmContext);

interface SdkProviderProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  readonly config: AppConfig;
}

export function SdkProvider({ config: configProp, children }: SdkProviderProps): JSX.Element {
  const { setError } = useError();

  const [config, setConfig] = useState(configProp);
  const [signer, setSigner] = useState<OfflineSigner>();
  const [client, setClient] = useState<SigningCosmWasmClient>();

  const contextWithInit = { ...defaultContext, init: setSigner };
  const [value, setValue] = useState<CosmWasmContextType>(contextWithInit);

  function clear(): void {
    setValue({ ...contextWithInit });
    setClient(undefined);
    setSigner(undefined);
    setConfig(configProp);
  }

  function changeConfig(updates: Partial<AppConfig>): void {
    setConfig((config) => ({ ...config, ...updates }));
  }

  // Get balance for each coin specified in config.coinMap
  async function refreshBalance(address: string, balance: Coin[]): Promise<void> {
    if (!client) return;

    balance.length = 0;
    for (const denom in config.coinMap) {
      const coin = await client.getBalance(address, denom);
      if (coin) balance.push(coin);
    }
  }

  // Get feeToken balance from faucet
  async function hitFaucet(address: string): Promise<void> {
    if (!config.faucetUrl || !config.feeToken) return;

    try {
      const faucet = new FaucetClient(config.faucetUrl);
      await faucet.credit(address, config.feeToken);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  }

  useEffect(() => {
    if (!signer) return;

    (async function updateClient(): Promise<void> {
      try {
        const client = await createClient(config, signer);
        setClient(client);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [signer, config]);

  useEffect(() => {
    if (!signer || !client) return;

    const balance: Coin[] = [];

    (async function updateValue(): Promise<void> {
      const address = (await signer.getAccounts())[0].address;

      await refreshBalance(address, balance);
      if (!balance.find((coin) => coin.denom === config.feeToken)) {
        await hitFaucet(address);
      }
      await refreshBalance(address, balance);

      const stakingClient = await createStakingClient(config.rpcUrl);

      setValue({
        initialized: true,
        init: () => {},
        clear,
        config,
        changeConfig,
        address,
        balance,
        refreshBalance: refreshBalance.bind(null, address, balance),
        hitFaucet: hitFaucet.bind(null, address),
        getSigner: () => signer,
        changeSigner: setSigner,
        getClient: () => client,
        getStakingClient: () => stakingClient,
      });
    })();
  }, [client]);

  return <CosmWasmContext.Provider value={value}>{children}</CosmWasmContext.Provider>;
}
