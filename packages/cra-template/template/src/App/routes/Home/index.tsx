import { Center, Stack } from "@cosmicdapp/design";
import { useSdk } from "@cosmicdapp/logic";
import React, { useState } from "react";
import { BalanceResponse, QueryMsg } from "../../../contracts/types/cw20-base";

export function Home(): JSX.Element {
  const { getClient } = useSdk();

  const [contract, setContract] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("0");

  function updateContract(event: React.ChangeEvent<HTMLInputElement>) {
    const contract = event.target.value;
    setContract(contract);
  }

  function updateAddress(event: React.ChangeEvent<HTMLInputElement>) {
    const address = event.target.value;
    setAddress(address);
  }

  async function queryBalance() {
    if (!contract || !address) return;

    const queryBalance: QueryMsg = { balance: { address } };

    try {
      const result: BalanceResponse = await getClient().queryContractSmart(contract, queryBalance);
      setBalance(result.balance);
    } catch {
      setBalance("0");
    }
  }

  return (
    <Center>
      <Stack>
        <div>
          <span>Enter CW20 contract address: </span>
          <input value={contract} onChange={updateContract} />
        </div>
        <div>
          <span>Enter address: </span>
          <input value={address} onChange={updateAddress} />
        </div>
        <button onClick={queryBalance} disabled={!contract || !address}>
          Submit
        </button>
        <div>Balance: {balance}</div>
      </Stack>
    </Center>
  );
}
