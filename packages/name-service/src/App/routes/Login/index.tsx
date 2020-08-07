import { Button, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import { pathHome } from "../../paths";
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
            <Title level={2}>Hello!</Title>
            <Text className="LightText">Select one of the following options to start:</Text>
          </Typography>
          <Link to={pathHome}>
            <Button type="primary">Browser (Demo)</Button>
          </Link>
          <Button disabled type="primary">
            Keplr (Secure)
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
}

export default Login;
