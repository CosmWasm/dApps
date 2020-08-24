import { Button, Typography } from "antd";
import copyToClipboard from "clipboard-copy";
import React from "react";
import Center, { CenterProps } from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import "./YourAccount.less";

const { Title, Text } = Typography;

interface YourAccountProps extends CenterProps {
  readonly showTitle?: boolean;
}

function YourAccount({ showTitle, ...props }: YourAccountProps): JSX.Element {
  return (
    <Center className="YourAccount" {...props}>
      <Stack>
        {showTitle || (typeof showTitle === "undefined" && <Title level={3}>Your Account</Title>)}
        <Text>cosmos1jllyqyelctsqhdq6jkdnyf7900ollfnfkfop0090</Text>
        <Button
          type="primary"
          onClick={() => copyToClipboard("cosmos1jllyqyelctsqhdq6jkdnyf7900ollfnfkfop0090")}
        >
          Copy Account Address
        </Button>
      </Stack>
    </Center>
  );
}

export default YourAccount;
