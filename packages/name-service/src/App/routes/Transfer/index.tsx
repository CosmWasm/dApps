import { Button, Input, Typography } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import YourAccount from "../../components/YourAccount";
import "./Transfer.less";

const { Title, Text } = Typography;

function Transfer(): JSX.Element {
  const name = useLocation().state as string;

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
          <Button type="primary">Transfer 1 COSM</Button>
        </Stack>
        <YourAccount tag="footer" />
      </Stack>
    </Center>
  );
}

export default Transfer;
