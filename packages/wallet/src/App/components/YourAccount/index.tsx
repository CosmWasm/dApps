import { useAccount } from "@cosmicdapp/logic";
import { Button, Typography } from "antd";
import copyToClipboard from "clipboard-copy";
import React from "react";
import { AccountStack } from "./style";

const { Title, Text } = Typography;

interface YourAccountProps {
  readonly showTitle?: boolean;
}

export function YourAccount({ showTitle }: YourAccountProps): JSX.Element {
  const accountProvider = useAccount();

  return (
    <AccountStack>
      {showTitle !== false && <Title level={3}>Your Account</Title>}
      <Text>{accountProvider.account.address}</Text>
      <Button type="primary" onClick={() => copyToClipboard(accountProvider.account.address)}>
        Copy Account Address
      </Button>
    </AccountStack>
  );
}
