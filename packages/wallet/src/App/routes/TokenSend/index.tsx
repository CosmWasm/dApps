import { Button, Input, Typography } from "antd";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import BackButton from "../../components/BackButton";
import YourAccount from "../../components/YourAccount";
import { pathTokens } from "../../paths";
import { TokenDetailState } from "../TokenDetail";
import "./TokenSend.less";

const { Title, Text } = Typography;

interface TokenSendParams {
  readonly tokenName: string;
}

export interface TokenSendState {
  readonly tokenAmount: string;
}

function TokenSend(): JSX.Element {
  const history = useHistory<TokenSendState>();

  const { tokenName }: TokenSendParams = useParams();
  const { tokenAmount }: TokenSendState = history.location.state;

  const tokenDetailState: TokenDetailState = { tokenAmount };

  const allowSend = tokenAmount && tokenAmount !== "0";

  return (
    <Center tag="main" className="TokenSend">
      <Stack className="MainStack">
        <BackButton path={`${pathTokens}/${tokenName}`} state={tokenDetailState} />
        <Stack className="AccountStack">
          <Title>Your Account</Title>
          <YourAccount showTitle={false} />
        </Stack>
        <Stack className="SendStack">
          <Stack className="FormStack">
            <div>
              <Text>Send</Text>
              <Input placeholder="Enter amount" />
              <Text>{tokenName}</Text>
            </div>
            <div>
              <Text>to</Text>
              <Input placeholder="Enter address" />
            </div>
          </Stack>
          <Button type="primary" disabled={!allowSend}>
            Send
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
}

export default TokenSend;
