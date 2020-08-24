import { Button, Typography } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import { pathTokens } from "../../paths";
import cosmWasmLogo from "./assets/cosmWasmLogo.svg";
import "./Login.less";

const { Title, Text } = Typography;

function Login(): JSX.Element {
  const history = useHistory();

  function goTokenList() {
    history.push(pathTokens);
  }

  return (
    <Center tag="main" className="Login">
      <Stack className="MainStack">
        <img src={cosmWasmLogo} alt="CosmWasm logo" />
        <Stack className="WelcomeStack">
          <Typography>
            <Title level={2}>Hello!</Title>
            <Text className="LightText">Welcome to your Wallet</Text>
            <Text className="LightText">Select one of the following options to start:</Text>
          </Typography>
          <Button type="primary" onClick={goTokenList}>
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
