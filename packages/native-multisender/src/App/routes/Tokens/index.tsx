import { PageLayout, YourAccount } from "@cosmicdapp/design";
import { Button, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { pathTokensAdd } from "../../paths";
import { MainStack } from "./style";
import TokenList from "./TokenList";

const { Title } = Typography;

function Tokens(): JSX.Element {
  return (
    <PageLayout>
      <MainStack>
        <Title>Tokens</Title>
        <TokenList />
        <Link to={pathTokensAdd}>
          <Button type="primary">Add another</Button>
        </Link>
        <YourAccount hideBalance />
      </MainStack>
    </PageLayout>
  );
}

export default Tokens;
