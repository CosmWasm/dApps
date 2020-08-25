import { Button, Typography } from "antd";
import Search from "antd/lib/input/Search";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import BackButton from "../../components/BackButton";
import YourAccount from "../../components/YourAccount";
import { pathSend, pathTokens } from "../../paths";
import { TokenSendState } from "../TokenSend";
import "./TokenDetail.less";

const { Title, Text } = Typography;

interface TokenDetailParams {
  readonly tokenName: string;
}

export interface TokenDetailState {
  readonly tokenAmount: string;
}

function TokenDetail(): JSX.Element {
  const history = useHistory<TokenDetailState>();

  const { tokenName }: TokenDetailParams = useParams();
  const { tokenAmount }: TokenDetailState = history.location.state;

  const [amountInteger, amountDecimal] = tokenAmount.split(".");

  function goTokenSend() {
    history.push(`${pathTokens}/${tokenName}${pathSend}`, { tokenAmount } as TokenSendState);
  }

  return (
    <Center tag="main" className="TokenDetail">
      <Stack className="MainStack">
        <BackButton path={pathTokens} />
        <Stack className="AccountStack">
          <Title>{tokenName}</Title>
          <YourAccount showTitle={false} />
        </Stack>
        <Stack className="AmountStack">
          <div className="Amount">
            <Text>{`${amountInteger}${amountDecimal ? "." : ""}`}</Text>
            {amountDecimal && <Text>{amountDecimal}</Text>}
            <Text>{" tokens"}</Text>
          </div>
          <Search placeholder="Search" enterButton />
          <Button type="primary" onClick={goTokenSend}>
            Send
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
}

export default TokenDetail;
