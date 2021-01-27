import { PageLayout } from "@cosmicdapp/design";
import { nativeCoinToDisplay, useSdk } from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/launchpad";
import { Button, Typography } from "antd";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { config } from "../../../config";
import { DataList } from "../../components/DataList";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { pathDetail, pathPurchase, pathUndelegate, pathValidator } from "../../paths";
import { StakingValidator, useStakingValidator } from "../../utils/staking";
import { ButtonStack, MainStack, NavCenter, TitleNavStack } from "./style";

const { Title } = Typography;

function getValidatorMap(validator: StakingValidator, balance: readonly Coin[]) {
  if (!validator) return {};

  const stakingCoin = balance.find((coin) => coin.denom === config.stakingToken);
  const stakingBalance = nativeCoinToDisplay(stakingCoin, config.coinMap).amount;

  return { "Min. Delegation": validator.minSelfDelegation, Balance: stakingBalance };
}

interface WalletParams {
  readonly validatorAddress: string;
}

export function Wallet(): JSX.Element {
  const history = useHistory();
  const { validatorAddress } = useParams<WalletParams>();
  const { balance } = useSdk();

  const validator = useStakingValidator(validatorAddress);

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
        <HeaderBackMenu path={`${pathValidator}/${validatorAddress}`} />
        <TitleNavStack>
          <Title>{validator?.description.moniker ?? ""}</Title>
          <NavCenter>
            <Button type="primary" onClick={goToValidatorDetail}>
              View Details
            </Button>
          </NavCenter>
        </TitleNavStack>
        <DataList {...getValidatorMap(validator, balance)} />
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
