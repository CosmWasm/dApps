import { PageLayout } from "@cosmicdapp/design";
import { Investment, nativeCoinToDisplay, TokenInfo } from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/launchpad";
import { Typography } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import { config } from "../../../config";
import { DataList } from "../../components/DataList";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { pathValidator } from "../../paths";
import { StakingValidator, useStakingValidator } from "../../utils/staking";
import { MainStack } from "./style";

const { Title } = Typography;

interface ValidatorData {
  readonly tokenInfo: TokenInfo;
  readonly investment: Investment;
}

function getValidatorMap(validator?: StakingValidator) {
  if (!validator) return {};

  const tokensCoin: Coin = { denom: config.stakingToken, amount: validator.tokens };
  const tokensAmount = nativeCoinToDisplay(tokensCoin, config.coinMap).amount;
  const commissionPercent = `${parseFloat(validator.commission.commission_rates.rate)} %`;

  return { Tokens: tokensAmount, Commission: commissionPercent };
}

interface ValidatorDetailParams {
  readonly validatorAddress: string;
}

export function ValidatorDetail(): JSX.Element {
  const { validatorAddress } = useParams<ValidatorDetailParams>();
  const validator = useStakingValidator(validatorAddress);

  return (
    <PageLayout>
      <MainStack>
        <HeaderBackMenu path={`${pathValidator}/${validatorAddress}`} />
        <Title>{validator?.description.moniker ?? ""}</Title>
        <DataList {...getValidatorMap(validator)} />
      </MainStack>
    </PageLayout>
  );
}
