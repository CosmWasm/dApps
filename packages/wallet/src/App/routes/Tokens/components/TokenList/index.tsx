import { nativeCoinToDisplay, useAccount, useError, useSdk } from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/launchpad";
import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { config } from "../../../../../config";
import { pathTokens } from "../../../../paths";
import { TokenDetailState } from "../../../TokenDetail";
import { TokenItem, TokenStack } from "./style";

const { Text } = Typography;

interface TokenListProps {
  readonly currentAddress: string;
}

export function TokenList({ currentAddress }: TokenListProps): JSX.Element {
  const { getClient } = useSdk();
  const { setError } = useError();
  const [balance, setBalance] = useState<readonly Coin[]>([]);

  useEffect(() => {
    getClient()
      .getAccount(currentAddress)
      .then(({ balance }) => setBalance(balance))
      .catch(setError);
  }, [getClient, currentAddress, setError]);

  const { account } = useAccount();
  const amAllowed = account.address === currentAddress;

  const history = useHistory<TokenDetailState>();
  function goTokenDetail(token: Coin) {
    history.push(`${pathTokens}/${token.denom}`, { tokenAmount: token.amount });
  }

  return (
    <TokenStack>
      {balance.map((nativeToken) => {
        const { denom: denomToDisplay, amount: amountToDisplay } = nativeCoinToDisplay(
          nativeToken,
          config.coinMap,
        );

        return (
          <Button
            key={nativeToken.denom}
            disabled={!amAllowed}
            data-size="large"
            type="primary"
            onClick={() => {
              amAllowed && goTokenDetail(nativeToken);
            }}
          >
            <TokenItem>
              <Text>{denomToDisplay}</Text>
              <Text>{amountToDisplay !== "0" ? amountToDisplay : "No tokens"}</Text>
            </TokenItem>
          </Button>
        );
      })}
    </TokenStack>
  );
}
