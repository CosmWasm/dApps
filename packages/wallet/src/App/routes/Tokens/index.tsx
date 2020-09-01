import { PageLayout, YourAccount } from "@cosmicdapp/design";
import { useAccount } from "@cosmicdapp/logic";
import { Typography } from "antd";
import React, { useState } from "react";
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
        <YourAccount hideTitle hideBalance />
      </MainStack>
    </PageLayout>
  );
}

export default Tokens;
