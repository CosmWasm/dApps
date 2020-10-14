import { PageLayout } from "@cosmicdapp/design";
import { CW20, CW20Instance, TokenInfo, useAccount, useSdk } from "@cosmicdapp/logic";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { FormWithdrawBalance } from "./FormWithdrawBalance";
import { HeaderTitleStack, MainStack } from "./style";

const { Title } = Typography;

export interface ValidatorData {
  readonly address: string;
  readonly cw20Contract: CW20Instance;
  readonly tokenInfo: TokenInfo;
  readonly balance: string;
}

interface WithdrawParams {
  readonly validatorAddress: string;
}

export function Withdraw(): JSX.Element {
  const { validatorAddress } = useParams<WithdrawParams>();
  const { getClient } = useSdk();
  const { account } = useAccount();

  const [validatorData, setValidatorData] = useState<ValidatorData>();

  useEffect(() => {
    const client = getClient();

    (async function updateValidatorData() {
      const contract = await client.getContract(validatorAddress);
      const cw20Contract = CW20(client).use(contract.address);

      const [tokenInfo, balance] = await Promise.all([
        cw20Contract.tokenInfo(),
        cw20Contract.balance(account.address),
      ]);

      setValidatorData({ address: validatorAddress, cw20Contract, tokenInfo, balance });
    })();
  }, [getClient, validatorAddress, account.address]);

  return (
    <PageLayout>
      <MainStack>
        <HeaderTitleStack>
          <HeaderBackMenu />
          <Title>Withdraw</Title>
          <Title level={2}>{validatorData?.tokenInfo.name ?? ""}</Title>
        </HeaderTitleStack>
        <FormWithdrawBalance validatorData={validatorData} />
      </MainStack>
    </PageLayout>
  );
}
