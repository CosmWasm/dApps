import { Button, Typography } from "antd";
import React from "react";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import cosmWasmLogo from "./assets/cosmWasmLogo.svg";
import "./Login.less";

const { Title, Text } = Typography;

function Login(): JSX.Element {
  return (
    <Center tag="main" className="Login">
      <Stack className="MainStack">
        <img src={cosmWasmLogo} alt="CosmWasm logo" />
        <Stack className="WelcomeStack">
          <Typography>
            <Title level={2}>Wallet</Title>
            <Text className="LightText">Select one of the following options to start:</Text>
          </Typography>
          <Button disabled type="primary">
            Browser (Demo)
          </Button>
          <Button disabled type="primary">
            Keplr (Secure)
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
}

export default Login;
