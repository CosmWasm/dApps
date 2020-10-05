import { PageLayout } from "@cosmicdapp/design";
import { Typography } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { useStakingValidator } from "../../utils/staking";
import { FormBuyShares } from "./FormBuyShares";
import { HeaderTitleStack, MainStack } from "./style";

const { Title } = Typography;

interface PurchaseParams {
  readonly validatorAddress: string;
}

export function Purchase(): JSX.Element {
  const { validatorAddress } = useParams<PurchaseParams>();
  const validator = useStakingValidator(validatorAddress);

  return (
    <PageLayout>
      <MainStack>
        <HeaderTitleStack>
          <HeaderBackMenu />
          <Title>Purchase</Title>
          <Title level={2}>{validator?.description.moniker ?? ""}</Title>
        </HeaderTitleStack>
        <FormBuyShares validator={validator} />
      </MainStack>
    </PageLayout>
  );
}
