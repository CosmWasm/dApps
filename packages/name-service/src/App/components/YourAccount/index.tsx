import { printableBalance, useAccount } from "@cosmicdapp/logic";
import { Button, Divider, Typography } from "antd";
import copyToClipboard from "clipboard-copy";
import React from "react";
import Center, { CenterProps } from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import "./YourAccount.less";

const { Title, Text } = Typography;

function YourAccount(props: CenterProps): JSX.Element {
  const accountProvider = useAccount();

  return (
    <Center className="YourAccount" {...props}>
      <Stack>
        <header>
          <Title level={3}>Your Account</Title>
          <Divider />
        </header>
        {accountProvider.account && (
          <>
            <Typography>
              <Text>{accountProvider.account.address}</Text>
              <Text>({printableBalance(accountProvider.account.balance)})</Text>
            </Typography>
            <Button type="primary" onClick={() => copyToClipboard(accountProvider.account.address)}>
              Copy Account Address
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
}

export default YourAccount;
