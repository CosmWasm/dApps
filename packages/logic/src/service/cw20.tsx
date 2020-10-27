import { SigningCosmWasmClient } from "@cosmjs/cosmwasm";
import { Coin } from "@cosmjs/launchpad";

export type Expiration =
  | { readonly at_height: number }
  | { readonly at_time: number }
  | { readonly never: unknown };

export interface AllowanceResponse {
  readonly allowance: string; // integer as string
  readonly expires: Expiration;
}

export interface AllowanceInfo {
  readonly allowance: string; // integer as string
  readonly spender: string; // bech32 address
  readonly expires: Expiration;
}

export interface AllAllowancesResponse {
  readonly allowances: readonly AllowanceInfo[];
}

export interface TokenInfo {
  readonly name: string;
  readonly symbol: string;
  readonly decimals: number;
  readonly total_supply: string;
}

export interface Investment {
  readonly exit_tax: string;
  readonly min_withdrawal: string;
  readonly nominal_value: string;
  readonly owner: string;
  readonly staked_tokens: Coin;
  readonly token_supply: string;
  readonly validator: string;
}

export interface Claim {
  readonly amount: string;
  readonly released: { readonly at_time: number };
}

export interface Claims {
  readonly claims: readonly Claim[];
}

export interface AllAccountsResponse {
  // list of bech32 address that have a balance
  readonly accounts: readonly string[];
}

export interface CW20Instance {
  readonly contractAddress: string;

  // queries
  balance: (address?: string) => Promise<string>;
  allowance: (owner: string, spender: string) => Promise<AllowanceResponse>;
  allAllowances: (owner: string, startAfter?: string, limit?: number) => Promise<AllAllowancesResponse>;
  allAccounts: (startAfter?: string, limit?: number) => Promise<readonly string[]>;
  tokenInfo: () => Promise<TokenInfo>;
  investment: () => Promise<Investment>;
  claims: (address: string) => Promise<Claims>;
  minter: () => Promise<any>;

  // actions
  mint: (recipient: string, amount: string) => Promise<string>;
  transfer: (recipient: string, amount: string) => Promise<string>;
  burn: (amount: string) => Promise<string>;
  increaseAllowance: (recipient: string, amount: string) => Promise<string>;
  decreaseAllowance: (recipient: string, amount: string) => Promise<string>;
  transferFrom: (owner: string, recipient: string, amount: string) => Promise<string>;
  bond: (coin: Coin) => Promise<string>;
  unbond: (amount: string) => Promise<string>;
  claim: () => Promise<string>;
}

export interface CW20Contract {
  use: (contractAddress: string) => CW20Instance;
}

export const CW20 = (client: SigningCosmWasmClient): CW20Contract => {
  const use = (contractAddress: string): CW20Instance => {
    const balance = async (account?: string): Promise<string> => {
      const address = account || client.senderAddress;
      const result = await client.queryContractSmart(contractAddress, { balance: { address } });
      return result.balance;
    };

    const allowance = async (owner: string, spender: string): Promise<AllowanceResponse> => {
      return client.queryContractSmart(contractAddress, { allowance: { owner, spender } });
    };

    const allAllowances = async (
      owner: string,
      startAfter?: string,
      limit?: number,
    ): Promise<AllAllowancesResponse> => {
      return client.queryContractSmart(contractAddress, {
        all_allowances: { owner, start_after: startAfter, limit },
      });
    };

    const allAccounts = async (startAfter?: string, limit?: number): Promise<readonly string[]> => {
      const accounts: AllAccountsResponse = await client.queryContractSmart(contractAddress, {
        all_accounts: { start_after: startAfter, limit },
      });
      return accounts.accounts;
    };

    const tokenInfo = async (): Promise<TokenInfo> => {
      return client.queryContractSmart(contractAddress, { token_info: {} });
    };

    const investment = async (): Promise<Investment> => {
      return client.queryContractSmart(contractAddress, { investment: {} });
    };

    const claims = async (address: string): Promise<Claims> => {
      return client.queryContractSmart(contractAddress, { claims: { address } });
    };

    const minter = async (): Promise<any> => {
      return client.queryContractSmart(contractAddress, { minter: {} });
    };

    // mints tokens, returns transactionHash
    const mint = async (recipient: string, amount: string): Promise<string> => {
      const result = await client.execute(contractAddress, { mint: { recipient, amount } });
      return result.transactionHash;
    };

    // transfers tokens, returns transactionHash
    const transfer = async (recipient: string, amount: string): Promise<string> => {
      const result = await client.execute(contractAddress, { transfer: { recipient, amount } });
      return result.transactionHash;
    };

    // burns tokens, returns transactionHash
    const burn = async (amount: string): Promise<string> => {
      const result = await client.execute(contractAddress, { burn: { amount } });
      return result.transactionHash;
    };

    const increaseAllowance = async (spender: string, amount: string): Promise<string> => {
      const result = await client.execute(contractAddress, { increase_allowance: { spender, amount } });
      return result.transactionHash;
    };

    const decreaseAllowance = async (spender: string, amount: string): Promise<string> => {
      const result = await client.execute(contractAddress, { decrease_allowance: { spender, amount } });
      return result.transactionHash;
    };

    const transferFrom = async (owner: string, recipient: string, amount: string): Promise<string> => {
      const result = await client.execute(contractAddress, { transfer_from: { owner, recipient, amount } });
      return result.transactionHash;
    };

    const bond = async (coin: Coin): Promise<string> => {
      const result = await client.execute(contractAddress, { bond: {} }, undefined, [coin]);
      return result.transactionHash;
    };

    const unbond = async (amount: string): Promise<string> => {
      const result = await client.execute(contractAddress, { unbond: { amount } });
      return result.transactionHash;
    };

    const claim = async (): Promise<string> => {
      const result = await client.execute(contractAddress, { claim: {} });
      return result.transactionHash;
    };

    return {
      contractAddress,
      balance,
      allowance,
      allAllowances,
      allAccounts,
      tokenInfo,
      investment,
      claims,
      minter,
      mint,
      transfer,
      burn,
      increaseAllowance,
      decreaseAllowance,
      transferFrom,
      bond,
      unbond,
      claim,
    };
  };
  return { use };
};
