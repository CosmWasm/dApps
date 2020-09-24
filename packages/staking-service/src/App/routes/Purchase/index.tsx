import { PageLayout } from "@cosmicdapp/design";
import { Typography } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { pathOperationResult } from "../../paths";
import { FormBuyShares } from "./FormBuyShares";
import { HeaderTitleStack, MainStack } from "./style";

const { Title } = Typography;

export function Purchase(): JSX.Element {
  const history = useHistory();

  function submitBuyShares() {
    history.push(pathOperationResult);
  }

  return (
    <PageLayout>
      <MainStack>
        <HeaderTitleStack>
          <HeaderBackMenu />
          <Title>Purchase</Title>
          <Title level={2}>Iris Net</Title>
        </HeaderTitleStack>
        <FormBuyShares submitBuyShares={submitBuyShares} />
      </MainStack>
    </PageLayout>
  );
}
