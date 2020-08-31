import { useAccount } from "@cosmicdapp/logic";
import { Typography } from "antd";
import React, { useState } from "react";
import { PageLayout } from "../../components/PageLayout";
import { YourAccount } from "../../components/YourAccount";
import FormSearchName from "./components/FormSearchName";
import TokenList from "./components/TokenList";
import { MainStack } from "./style";

const { Title } = Typography;

function Tokens(): JSX.Element {
  const { account } = useAccount();
  const [currentAddress, setCurrentAddress] = useState(account.address);

  return (
    <PageLayout>
      <MainStack>
        <Title>Tokens</Title>
        <FormSearchName currentAddress={currentAddress} setCurrentAddress={setCurrentAddress} />
        <TokenList currentAddress={currentAddress} />
        <YourAccount />
      </MainStack>
    </PageLayout>
  );
}

export default Tokens;
