import { mapCoin, useAccount, useError, useSdk } from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/launchpad";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { config } from "../../../../../config";
import Stack from "../../../../../theme/layout/Stack";
import { pathTokens } from "../../../../paths";
import { TokenDetailState } from "../../../TokenDetail";
import "./TokenList.less";

const { Text } = Typography;

interface TokenListProps {
  readonly currentAddress: string;
}

function TokenList({ currentAddress }: TokenListProps): JSX.Element {
  const { getClient } = useSdk();
  const { setError } = useError();
  const [balance, setBalance] = useState<readonly Coin[]>([]);

  useEffect(() => {
    getClient()
      .getAccount(currentAddress)
      .then(({ balance }) => {
        const mappedBalance: readonly Coin[] = balance.map((coin) => mapCoin(coin, config.coinMap));
        setBalance(mappedBalance);
      })
      .catch(setError);
  }, [getClient, currentAddress, setError]);

  const { account } = useAccount();
  const amAllowed = account.address === currentAddress;

  const history = useHistory<TokenDetailState>();
  function goTokenDetail(token: Coin) {
    history.push(`${pathTokens}/${token.denom}`, { tokenAmount: token.amount });
  }

  return (
    <Stack className="TokenList">
      {balance.map((token) => (
        <div
          key={token.denom}
          className="tokenItem"
          data-state={amAllowed ? "" : "forbidden"}
          onClick={() => {
            amAllowed && goTokenDetail(token);
          }}
        >
          <div className="borderContainer">
            <Text>{token.denom}</Text>
            <Text>{token.amount !== "0" ? token.amount : "No tokens"}</Text>
          </div>
        </div>
      ))}
    </Stack>
  );
}

export default TokenList;
