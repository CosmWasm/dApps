import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Coin } from "@cosmjs/launchpad";

export interface Recipient {
  readonly address: string;
  readonly amount: Coin[];
}

export interface NativeMultiSendInstance {
  readonly contractAddress: string;

  // queries

  // actions
  transfer: (sender: string, recipient: Recipient[], transferAmount: Coin[]) => Promise<string>;
}

export interface NativeMultiSendContract {
  use: (contractAddress: string) => NativeMultiSendInstance;
}

export const NativeMultiSend = (client: SigningCosmWasmClient): NativeMultiSendContract => {
  const use = (contractAddress: string): NativeMultiSendInstance => {

    // transfers tokens, returns transactionHash
    const transfer = async (
      sender: string,
      recipients: Recipient[],
      transferAmount: Coin[],
    ): Promise<string> => {
      const result = await client.execute(
        sender,
        contractAddress,
        { send: { recipients } },
        "multisend",
        transferAmount,
      );
      return result.transactionHash;
    };

    return {
      contractAddress,
      transfer,
    };
  };
  return { use };
};
