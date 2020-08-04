import { Button, Typography } from "antd";
import React from "react";
import Center from "../theme/layout/Center";
import Stack from "../theme/layout/Stack";
import "./App.less";

const { Title, Text } = Typography;

const App = (): JSX.Element => (
  <Center tag="main" className="App">
    <Stack>
      <Typography>
        <Title>CosmWasm</Title>
        <Title level={2}>Hello!</Title>
        <Text>Select one of the following options to start:</Text>
      </Typography>
      <Button type="primary">Browser (Demo)</Button>
      <Button type="primary">Keplr (Secure)</Button>
    </Stack>
  </Center>
);

export default App;
