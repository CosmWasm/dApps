import { Button, Divider, Typography } from "antd";
import React from "react";
import Center from "../../../theme/layout/Center";
import Stack, { StackProps } from "../../../theme/layout/Stack";
import "./YourAccount.less";

const { Title, Text } = Typography;

function YourAccount(props: StackProps): JSX.Element {
  return (
    <Center className="YourAccount" {...props}>
      <Stack>
        <header>
          <Title level={3}>Your Account</Title>
          <Divider />
        </header>
        <Typography>
          <Text>cosmos1jllyqyelctsqhdq6jkdnyf7900ollfnfkfop0090</Text>
          <Text>(7.995 COSM)</Text>
        </Typography>
        <Button disabled type="primary">
          Copy Account Address
        </Button>
      </Stack>
    </Center>
  );
}

export default YourAccount;
