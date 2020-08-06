import { Button, Input, Typography } from "antd";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import YourAccount from "../../components/YourAccount";
import { pathOperationResult } from "../../paths";
import "./Transfer.less";

const { Title, Text } = Typography;

function Transfer(): JSX.Element {
  const name = useLocation().state as string;
  const history = useHistory();

  function tryTransfer() {
    history.push({
      pathname: pathOperationResult,
      state: { success: false, message: "Could not transfer name" },
    });
  }

  return (
    <Center tag="main" className="Transfer">
      <Stack className="MainStack">
        <Stack className="TransferStack">
          <Title>Transfer</Title>
          <Typography>
            <Text>Name: </Text>
            <Text>{name}</Text>
          </Typography>
          <Text>to</Text>
          <Input placeholder="Enter address" />
          <Button type="primary" onClick={tryTransfer}>
            Transfer 1 COSM
          </Button>
        </Stack>
        <YourAccount tag="footer" />
      </Stack>
    </Center>
  );
}

export default Transfer;
