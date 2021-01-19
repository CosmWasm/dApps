import { nativeCoinToDisplay, useSdk } from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/launchpad";
import { Typography } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { config } from "../../../../../config";
import { pathTokens } from "../../../../paths";
import { TokenDetailState } from "../../../TokenDetail";
import { BorderContainer, TokenItem, TokenStack } from "./style";

const { Text } = Typography;

interface TokenListProps {
  readonly currentAddress: string;
}

export function TokenList({ currentAddress }: TokenListProps): JSX.Element {
  const { address, balance } = useSdk();
  const amAllowed = address === currentAddress;

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
