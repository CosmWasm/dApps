import { Center, CenterProps, Stack } from "@cosmicdapp/design";
import { useAccount } from "@cosmicdapp/logic";
import { Button, Typography } from "antd";
import copyToClipboard from "clipboard-copy";
import React from "react";
import "./YourAccount.less";

const { Title, Text } = Typography;

interface YourAccountProps extends CenterProps {
  readonly showTitle?: boolean;
}

function YourAccount({ showTitle, ...props }: YourAccountProps): JSX.Element {
  const accountProvider = useAccount();

  return (
    <Center className="Center YourAccount" {...props}>
      <Stack className="Stack MainStack">
        {showTitle || (typeof showTitle === "undefined" && <Title level={3}>Your Account</Title>)}
        <Text>{accountProvider.account.address}</Text>
        <Button type="primary" onClick={() => copyToClipboard(accountProvider.account.address)}>
          Copy Account Address
        </Button>
      </Stack>
    </Center>
  );
}

export default YourAccount;
