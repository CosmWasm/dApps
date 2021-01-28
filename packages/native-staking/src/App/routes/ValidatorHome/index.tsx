import { PageLayout } from "@cosmicdapp/design";
import { nativeCoinToDisplay, useSdk } from "@cosmicdapp/logic";
import { Coin, coins } from "@cosmjs/launchpad";
import { Button, Typography } from "antd";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { config } from "../../../config";
import { DataList } from "../../components/DataList";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import {
  pathDelegate,
  pathDetail,
  pathUndelegate,
  pathValidator,
  pathValidators,
  pathWallet,
} from "../../paths";
import { EncodeMsgWithdrawDelegatorReward, StakingValidator, useStakingValidator } from "../../utils/staking";
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

  // TODO: remove code below
  const { getClient, getStakingClient, address } = useSdk();
  useEffect(() => {
    (async function checkRewards() {
      const res = await getStakingClient().distribution.unverified.delegationRewards(
        address,
        validatorAddress,
      );
      console.log(res);
      const withdrawRewardsMsg: EncodeMsgWithdrawDelegatorReward = {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: {
          delegatorAddress: address,
          validatorAddress: validatorAddress,
        },
      };

      const fee = {
        amount: coins(
          config.gasPrice * 10 ** config.coinMap[config.feeToken].fractionalDigits,
          config.feeToken,
        ),
        gas: "1500000",
      };
      const response = await getClient().signAndBroadcast(address, [withdrawRewardsMsg], fee);
      console.log(response);
    })();
  }, [address, getClient, getStakingClient, validatorAddress]);
  //TODO: remove code above

  function goToWallet() {
    history.push(`${pathWallet}/${validatorAddress}`);
  }

  function goToValidatorDetail() {
    history.push(`${pathValidator}/${validatorAddress}${pathDetail}`);
  }

  function goToDelegate() {
    history.push(`${pathDelegate}/${validatorAddress}`);
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
          <Button type="primary" onClick={goToDelegate}>
            Delegate
          </Button>
          <Button type="primary" onClick={goToUndelegate}>
            Undelegate
          </Button>
        </ButtonStack>
      </MainStack>
    </PageLayout>
  );
}
