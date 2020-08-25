import { useError, useSdk } from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/launchpad";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import YourAccount from "../../components/YourAccount";
import { pathTokens } from "../../paths";
import { TokenDetailState } from "../TokenDetail";
import "./TokenList.less";

const { Title, Text } = Typography;

function TokenList(): JSX.Element {
  const { getClient } = useSdk();
  const { setError } = useError();

  const [balance, setBalance] = useState<readonly Coin[]>([]);

  useEffect(() => {
    getClient()
      .getAccount()
      .then(({ balance }) => setBalance(balance))
      .catch(setError);
  }, [getClient, setError]);

  const history = useHistory<TokenDetailState>();

  function goTokenDetail(token: Coin) {
    history.push(`${pathTokens}/${token.denom}`, { tokenAmount: token.amount });
  }

  return (
    <Center tag="main" className="TokenList">
      <Stack className="MainStack">
        <Title>Tokens</Title>
        <Stack className="TokenStack">
          {balance.map((token) => (
            <div
              key={token.denom}
              className="tokenItem"
              onClick={() => {
                goTokenDetail(token);
              }}
            >
              <div className="borderContainer">
                <Text>{token.denom}</Text>
                <Text>{token.amount !== "0" ? token.amount : "No tokens"}</Text>
              </div>
            </div>
          ))}
        </Stack>
        <YourAccount />
      </Stack>
    </Center>
  );
}

export default TokenList;
