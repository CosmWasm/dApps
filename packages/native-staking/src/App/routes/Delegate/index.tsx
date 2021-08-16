import { Loading, PageLayout } from "@cosmicdapp/design";
import { displayAmountToNative, getErrorFromStackTrace, useSdk } from "@cosmicdapp/logic";
import { Coin, coins } from "@cosmjs/stargate";
import { isBroadcastTxFailure } from "@cosmjs/stargate";
import { Typography } from "antd";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { config } from "../../../config";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { pathDelegate, pathOperationResult, pathValidators } from "../../paths";
import { EncodeMsgDelegate, useStakingValidator } from "../../utils/staking";
import { FormDelegateBalance, FormDelegateBalanceFields } from "./FormDelegateBalance";
import { HeaderTitleStack, MainStack } from "./style";

const { Title } = Typography;

interface DelegateParams {
  readonly validatorAddress: string;
}

export function Delegate(): JSX.Element {
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { validatorAddress } = useParams<DelegateParams>();
  const { getClient, address, refreshBalance } = useSdk();

  const validator = useStakingValidator(validatorAddress);

  async function submitDelegateBalance({ amount }: FormDelegateBalanceFields) {
    setLoading(true);

    const nativeAmountString = displayAmountToNative(amount, config.coinMap, config.stakingToken);
    const nativeAmountCoin: Coin = { amount: nativeAmountString, denom: config.stakingToken };

    const delegateMsg: EncodeMsgDelegate = {
      typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
      value: {
        delegatorAddress: address,
        validatorAddress: validatorAddress,
        amount: nativeAmountCoin,
      },
    };

    const fee = {
      amount: coins(
        config.gasPrice * 10 ** config.coinMap[config.feeToken].fractionalDigits,
        config.feeToken,
      ),
      gas: "1500000",
    };

    try {
      const response = await getClient().signAndBroadcast(address, [delegateMsg], fee);
      if (isBroadcastTxFailure(response)) {
        throw Error("Delegate failed");
      }

      refreshBalance();

      history.push({
        pathname: pathOperationResult,
        state: {
          success: true,
          message: `${amount} ${config.coinMap[config.stakingToken].denom} successfully delegated`,
          customButtonText: "Validator home",
          customButtonActionPath: `${pathValidators}/${validatorAddress}`,
        },
      });
    } catch (stackTrace) {
      console.error(stackTrace);

      history.push({
        pathname: pathOperationResult,
        state: {
          success: false,
          message: "Delegate transaction failed:",
          error: getErrorFromStackTrace(stackTrace),
          customButtonActionPath: `${pathValidators}/${validatorAddress}${pathDelegate}`,
        },
      });
    }
  }

  return (
    (loading && <Loading loadingText={`Delegating...`} />) ||
    (!loading && (
      <PageLayout>
        <MainStack>
          <HeaderTitleStack>
            <HeaderBackMenu path={`${pathValidators}/${validatorAddress}`} />
            <Title>Delegate</Title>
            <Title level={2}>{validator?.description.moniker ?? ""}</Title>
          </HeaderTitleStack>
          <FormDelegateBalance submitDelegateBalance={submitDelegateBalance} />
        </MainStack>
      </PageLayout>
    ))
  );
}
