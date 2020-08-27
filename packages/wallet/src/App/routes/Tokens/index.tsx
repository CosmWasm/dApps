import { Center, Stack } from "@cosmicdapp/design";
import { useAccount } from "@cosmicdapp/logic";
import { Typography } from "antd";
import React, { useState } from "react";
import YourAccount from "../../components/YourAccount";
import FormSearchName from "./components/FormSearchName";
import TokenList from "./components/TokenList";
import "./Tokens.less";

const { Title } = Typography;

function Tokens(): JSX.Element {
  const { account } = useAccount();
  const [currentAddress, setCurrentAddress] = useState(account.address);

  return (
    <Center tag="main" className="Center Tokens">
      <Stack className="Stack MainStack">
        <Title>Tokens</Title>
        <FormSearchName currentAddress={currentAddress} setCurrentAddress={setCurrentAddress} />
        <TokenList currentAddress={currentAddress} />
        <YourAccount />
      </Stack>
    </Center>
  );
}

export default Tokens;
