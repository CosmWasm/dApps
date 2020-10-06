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
  pathClaims,
  pathDetail,
  pathPurchase,
  pathValidator,
  pathValidators,
  pathWallet,
  pathWithdraw,
} from "../../paths";
import { formatShares, StakingValidator, useStakingValidator } from "../../utils/staking";
import { ButtonStack, MainStack, NavCenter, TitleNavStack } from "./style";

const { Title } = Typography;

function getValidatorDataMap(validator?: StakingValidator) {
  if (!validator) return {};

  const totalStake = formatShares(validator.delegator_shares);
  const coin: Coin = { denom: config.feeToken, amount: validator.tokens };
  const tokens = nativeCoinToDisplay(coin, config.coinMap).amount;

  return { "Total Stake": totalStake, Tokens: tokens };
}

interface ValidatorParams {
  readonly validatorAddress: string;
}

export function ValidatorHome(): JSX.Element {
  const history = useHistory();
  const { validatorAddress } = useParams<ValidatorParams>();
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

  function goToWithdraw() {
    history.push(pathWithdraw);
  }

  function goToClaims() {
    history.push(pathClaims);
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
        <DataList {...getValidatorDataMap(validator)} />
        <ButtonStack>
          <Button type="primary" onClick={goToPurchase}>
            Buy
          </Button>
          <Button type="primary" onClick={goToWithdraw}>
            Withdraw
          </Button>
          <Button type="primary" onClick={goToClaims}>
            Claims
          </Button>
        </ButtonStack>
      </MainStack>
    </PageLayout>
  );
}
