import { PageLayout } from "@cosmicdapp/design";
import { CW20, Investment, TokenInfo, useSdk } from "@cosmicdapp/logic";
import { Decimal } from "@cosmjs/math";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataList } from "../../components/DataList";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { pathValidator } from "../../paths";
import { MainStack } from "./style";

const { Title } = Typography;

interface ValidatorData {
  readonly tokenInfo: TokenInfo;
  readonly investment: Investment;
}

function getValidatorDataMap(validatorData?: ValidatorData) {
  if (!validatorData) return {};

  const totalSupply = Decimal.fromAtomics(
    validatorData.tokenInfo.total_supply,
    validatorData.tokenInfo.decimals,
  ).toString();
  const commissionPercent = `${parseFloat(validatorData.investment.exit_tax)} %`;

  return { "Total Supply": totalSupply, Commission: commissionPercent };
}

interface ValidatorDetailParams {
  readonly validatorAddress: string;
}

export function ValidatorDetail(): JSX.Element {
  const { validatorAddress } = useParams<ValidatorDetailParams>();
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

      setValidatorData({ tokenInfo, investment });
    })();
  }, [getClient, validatorAddress]);

  return (
    <PageLayout>
      <MainStack>
        <HeaderBackMenu path={`${pathValidator}/${validatorAddress}`} />
        <Title>{validatorData?.tokenInfo.name ?? ""}</Title>
        <DataList {...getValidatorDataMap(validatorData)} />
      </MainStack>
    </PageLayout>
  );
}
