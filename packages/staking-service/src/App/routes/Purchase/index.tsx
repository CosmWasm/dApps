import { PageLayout } from "@cosmicdapp/design";
import { CW20, CW20Instance, Investment, TokenInfo, useSdk } from "@cosmicdapp/logic";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { FormBuyShares } from "./FormBuyShares";
import { HeaderTitleStack, MainStack } from "./style";

const { Title } = Typography;

export interface ValidatorData {
  readonly address: string;
  readonly cw20Contract: CW20Instance;
  readonly tokenInfo: TokenInfo;
  readonly investment: Investment;
}

interface PurchaseParams {
  readonly validatorAddress: string;
}

export function Purchase(): JSX.Element {
  const { validatorAddress } = useParams<PurchaseParams>();
  const { getClient } = useSdk();

  const [validatorData, setValidatorData] = useState<ValidatorData>();

  useEffect(() => {
    const client = getClient();

    (async function updateValidatorData() {
      const contract = await client.getContract(validatorAddress);
      const cw20Contract = CW20(client).use(contract.address);

      const [tokenInfo, investment] = await Promise.all([
        cw20Contract.tokenInfo(),
        cw20Contract.investment(),
      ]);

      setValidatorData({ address: validatorAddress, cw20Contract, tokenInfo, investment });
    })();
  }, [getClient, validatorAddress]);

  return (
    <PageLayout>
      <MainStack>
        <HeaderTitleStack>
          <HeaderBackMenu />
          <Title>Purchase</Title>
          <Title level={2}>{validatorData?.tokenInfo.name ?? ""}</Title>
        </HeaderTitleStack>
        <FormBuyShares validatorData={validatorData} />
      </MainStack>
    </PageLayout>
  );
}
