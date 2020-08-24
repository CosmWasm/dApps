import { Typography } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import YourAccount from "../../components/YourAccount";
import { pathTokens } from "../../paths";
import { TokenDetailState } from "../TokenDetail";
import "./TokenList.less";

const { Title, Text } = Typography;

interface TokenItem {
  readonly name: string;
  readonly amount: number;
}

const tokens: readonly TokenItem[] = [
  { name: "ASH", amount: 123.887 },
  { name: "JADE", amount: 23.87 },
  { name: "WETH", amount: 0 },
];

function TokenList(): JSX.Element {
  const history = useHistory<TokenDetailState>();

  function goTokenDetail(token: TokenItem) {
    history.push(`${pathTokens}/${token.name}`, { tokenAmount: token.amount });
  }

  return (
    <Center tag="main" className="TokenList">
      <Stack className="MainStack">
        <Title>Tokens</Title>
        <Stack className="TokenStack">
          {tokens.map((token) => (
            <div
              key={token.name}
              className="tokenItem"
              onClick={() => {
                goTokenDetail(token);
              }}
            >
              <div className="borderContainer">
                <Text>{token.name}</Text>
                <Text>{token.amount > 0 ? token.amount.toLocaleString("en") : "No tokens"}</Text>
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
