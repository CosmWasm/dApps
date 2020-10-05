import { PageLayout } from "@cosmicdapp/design";
import { Typography } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import { DataList } from "../../components/DataList";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { pathValidator } from "../../paths";
import { formatShares, formatUpdateTime, StakingValidator, useStakingValidator } from "../../utils/staking";
import { MainStack } from "./style";

const { Title } = Typography;

function getValidatorDataMap(validator: StakingValidator) {
  const totalStake = formatShares(validator?.delegator_shares ?? "0");
  const comissionPercent =
    (parseFloat(validator?.commission.commission_rates.rate ?? "0") * 100).toString() + " %";
  // TODO: update time !== uptime
  const updateTime = formatUpdateTime(validator?.commission.update_time ?? "");

  return { "Total Stake": totalStake, Comission: comissionPercent, "Update Time": updateTime };
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
        <DataList {...getValidatorDataMap(validator)} />
      </MainStack>
    </PageLayout>
  );
}
