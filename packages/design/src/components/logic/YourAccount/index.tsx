import { printableBalance, useSdk } from "@cosmicdapp/logic";
import { Button, Divider, Typography } from "antd";
import copyToClipboard from "clipboard-copy";
import React from "react";
import { StackProps } from "../../layout/Stack";
import { AccountStack } from "./style";

const { Title, Text } = Typography;

interface YourAccountProps extends StackProps {
  readonly hideTitle?: boolean;
  readonly hideBalance?: boolean;
}

export function YourAccount({ tag, hideTitle, hideBalance }: YourAccountProps): JSX.Element {
  const { address, balance } = useSdk();

  return (
    <AccountStack tag={tag}>
      {!hideTitle && (
        <header>
          <Title level={3}>Your Account</Title>
          {!hideBalance && <Divider />}
        </header>
      )}
      <Text>{address}</Text>
      {!hideBalance && <Text>({printableBalance(balance)})</Text>}
      <Button type="primary" onClick={() => copyToClipboard(address)}>
        Copy Account Address
      </Button>
    </AccountStack>
  );
}
