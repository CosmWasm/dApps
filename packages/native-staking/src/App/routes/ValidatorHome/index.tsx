import { PageLayout } from "@cosmicdapp/design";
import { nativeCoinToDisplay } from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/launchpad";
import { Button, Typography } from "antd";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { config } from "../../../config";
import { DataList } from "../../components/DataList";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import {
  pathDetail,
  pathPurchase,
  pathUndelegate,
  pathValidator,
  pathValidators,
  pathWallet,
} from "../../paths";
import { StakingValidator, useStakingValidator } from "../../utils/staking";
import { ButtonStack, MainStack, NavCenter, TitleNavStack } from "./style";

const { Title } = Typography;

function getValidatorMap(validator?: StakingValidator) {
  if (!validator) return {};

  const tokensCoin: Coin = { denom: config.stakingToken, amount: validator.tokens };
  const tokensAmount = nativeCoinToDisplay(tokensCoin, config.coinMap).amount;

  return {
    Tokens: tokensAmount,
    "Delegator Shares": validator.delegatorShares,
    "Min. Delegation": validator.minSelfDelegation,
  };
}

interface ValidatorHomeParams {
  readonly validatorAddress: string;
}

export function ValidatorHome(): JSX.Element {
  const history = useHistory();
  const { validatorAddress } = useParams<ValidatorHomeParams>();

  const validator = useStakingValidator(validatorAddress);

  function goToWallet() {
    history.push(`${pathWallet}/${validatorAddress}`);
  }

  function goToValidatorDetail() {
    history.push(`${pathValidator}/${validatorAddress}${pathDetail}`);
  }

  function goToPurchase() {
    history.push(`${pathPurchase}/${validatorAddress}`);
  }

  function goToUndelegate() {
    history.push(`${pathUndelegate}/${validatorAddress}`);
  }

  return (
    <PageLayout>
      <MainStack>
        <HeaderBackMenu path={pathValidators} />
        <TitleNavStack>
          <Title>{validator?.description.moniker ?? ""}</Title>
          <NavCenter>
            <ButtonStack>
              <Button type="primary" onClick={goToWallet}>
                Wallet
              </Button>
              <Button type="primary" onClick={goToValidatorDetail}>
                View Details
              </Button>
            </ButtonStack>
          </NavCenter>
        </TitleNavStack>
        <DataList {...getValidatorMap(validator)} />
        <ButtonStack>
          <Button type="primary" onClick={goToPurchase}>
            Buy
          </Button>
          <Button type="primary" onClick={goToUndelegate}>
            Undelegate
          </Button>
        </ButtonStack>
      </MainStack>
    </PageLayout>
  );
}
