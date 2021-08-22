import { PageLayout } from "@cosmicdapp/design";
import { nativeCoinToDisplay, useSdk } from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/stargate";
import { Decimal } from "@cosmjs/math";
import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { config } from "../../../config";
import { DataList } from "../../components/DataList";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { pathDelegate, pathRewards, pathUndelegate, pathValidators } from "../../paths";
import { StakingValidator, useStakingValidator } from "../../utils/staking";
import { ButtonStack, MainStack, TitleNavStack } from "./style";

const { Title } = Typography;

function getValidatorMap(balance: Decimal, validator?: StakingValidator) {
  if (!validator) return {};

  const tokensCoin: Coin = { denom: config.stakingToken, amount: validator.tokens };
  const tokensAmount = nativeCoinToDisplay(tokensCoin, config.coinMap).amount;
  const tokens = `${tokensAmount} ${config.coinMap[config.stakingToken].denom}`;
  const commissionPercent = `${validator.commission.commissionRates.rate.slice(0, -16)} %`;

  return {
    Tokens: tokens,
    Commission: commissionPercent,
    Balance: balance.toString(),
  };
}

interface ValidatorParams {
  readonly validatorAddress: string;
}

export function Validator(): JSX.Element {
  const history = useHistory();
  const { validatorAddress } = useParams<ValidatorParams>();
  const validator = useStakingValidator(validatorAddress);

  const { config, getStakingClient, address } = useSdk();
  const [balance, setBalance] = useState<Decimal>(Decimal.fromUserInput("0", 0));

  useEffect(() => {
    (async function updateBalance() {
      try {
        const { delegationResponse } = await getStakingClient().staking.delegation(
          address,
          validatorAddress,
        );
        const balance = Decimal.fromAtomics(
          delegationResponse.balance.amount,
          config.coinMap[config.stakingToken].fractionalDigits,
        );

        setBalance(balance);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, [getStakingClient, address, validatorAddress, config]);

  function goToDelegate() {
    history.push(`${pathValidators}/${validatorAddress}${pathDelegate}`);
  }

  function goToUndelegate() {
    history.push(`${pathValidators}/${validatorAddress}${pathUndelegate}`);
  }

  function goToRewards() {
    history.push(`${pathValidators}/${validatorAddress}${pathRewards}`);
  }

  return (
    <PageLayout>
      <MainStack>
        <HeaderBackMenu path={pathValidators} />
        <TitleNavStack>
          <Title>{validator?.description.moniker ?? ""}</Title>
        </TitleNavStack>
        <DataList {...getValidatorMap(balance, validator)} />
        <ButtonStack>
          <Button type="primary" onClick={goToDelegate}>
            Delegate
          </Button>
          <Button type="primary" onClick={goToUndelegate}>
            Undelegate
          </Button>
          <Button type="primary" onClick={goToRewards}>
            Rewards
          </Button>
        </ButtonStack>
      </MainStack>
    </PageLayout>
  );
}
