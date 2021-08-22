import { nativeCoinToDisplay, useSdk } from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/stargate";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { pathTokens } from "../../../../paths";
import { TokenDetailState } from "../../../TokenDetail";
import { BorderContainer, TokenItem, TokenStack } from "./style";

const { Text } = Typography;

interface TokenListProps {
  readonly currentAddress: string;
}

export function TokenList({ currentAddress }: TokenListProps): JSX.Element {
  const { config, getClient, address, balance: userBalance } = useSdk();
  const amAllowed = address === currentAddress;
  const [currentBalance, setCurrentBalance] = useState<readonly Coin[]>([]);

  useEffect(() => {
    if (amAllowed) {
      setCurrentBalance(userBalance);
    } else {
      setCurrentBalance([]);
      (async function updateCurrentBalance() {
        for (const denom in config.coinMap) {
          const coin = await getClient().getBalance(currentAddress, denom);
          if (coin) setCurrentBalance((prev) => [...prev, coin]);
        }
      })();
    }
  }, [amAllowed, userBalance, currentAddress, config.coinMap, getClient]);

  const history = useHistory<TokenDetailState>();
  function goTokenDetail(token: Coin) {
    history.push(`${pathTokens}/${token.denom}`, { tokenAmount: token.amount });
  }

  return (
    <TokenStack>
      {currentBalance.map((nativeToken) => {
        const { denom: denomToDisplay, amount: amountToDisplay } = nativeCoinToDisplay(
          nativeToken,
          config.coinMap,
        );

        return (
          <TokenItem
            key={nativeToken.denom}
            data-state={amAllowed ? "" : "forbidden"}
            onClick={() => {
              amAllowed && goTokenDetail(nativeToken);
            }}
          >
            <BorderContainer>
              <Text>{denomToDisplay}</Text>
              <Text>{amountToDisplay !== "0" ? amountToDisplay : "No tokens"}</Text>
            </BorderContainer>
          </TokenItem>
        );
      })}
    </TokenStack>
  );
}
