import { PageLayout } from "@cosmicdapp/design";
import { Typography } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { pathOperationResult } from "../../paths";
import { FormWithdrawBalance } from "./FormWithdrawBalance";
import { HeaderTitleStack, MainStack } from "./style";

const { Title } = Typography;

export function Withdraw(): JSX.Element {
  const history = useHistory();

  function submitWithdrawBalance() {
    history.push(pathOperationResult);
  }

  return (
    <PageLayout>
      <MainStack>
        <HeaderTitleStack>
          <HeaderBackMenu />
          <Title>Withdraw</Title>
          <Title level={2}>Iris Net</Title>
        </HeaderTitleStack>
        <FormWithdrawBalance submitWithdrawBalance={submitWithdrawBalance} />
      </MainStack>
    </PageLayout>
  );
}
