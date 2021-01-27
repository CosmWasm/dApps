import { Loading, PageLayout } from "@cosmicdapp/design";
import { displayAmountToNative, getErrorFromStackTrace, useSdk } from "@cosmicdapp/logic";
import { Coin, coins } from "@cosmjs/launchpad";
import { isBroadcastTxFailure } from "@cosmjs/stargate";
import { Typography } from "antd";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { config } from "../../../config";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { pathOperationResult, pathPurchase, pathValidator, pathWallet } from "../../paths";
import { EncodeMsgDelegate, useStakingValidator } from "../../utils/staking";
import { FormBuyShares, FormBuySharesFields } from "./FormBuyShares";
import { HeaderTitleStack, MainStack } from "./style";

const { Title } = Typography;

interface PurchaseParams {
  readonly validatorAddress: string;
}

export function Purchase(): JSX.Element {
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { validatorAddress } = useParams<PurchaseParams>();
  const { getClient, address, refreshBalance } = useSdk();

  const validator = useStakingValidator(validatorAddress);

  async function submitBuyShares({ amount }: FormBuySharesFields) {
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
        throw Error("Purchase failed");
      }

      refreshBalance();

      history.push({
        pathname: pathOperationResult,
        state: {
          success: true,
          message: `${amount} ${config.stakingToken} successfully bonded`,
          customButtonText: "Wallet",
          customButtonActionPath: `${pathWallet}/${validatorAddress}`,
        },
      });
    } catch (stackTrace) {
      console.error(stackTrace);

      history.push({
        pathname: pathOperationResult,
        state: {
          success: false,
          message: "Bond transaction failed:",
          error: getErrorFromStackTrace(stackTrace),
          customButtonActionPath: `${pathPurchase}/${validatorAddress}`,
        },
      });
    }
  }

  return (
    (loading && <Loading loadingText={`Bonding...`} />) ||
    (!loading && (
      <PageLayout>
        <MainStack>
          <HeaderTitleStack>
            <HeaderBackMenu path={`${pathValidator}/${validatorAddress}`} />
            <Title>Purchase</Title>
            <Title level={2}>{validator?.description.moniker ?? ""}</Title>
          </HeaderTitleStack>
          <FormBuyShares validator={validator} submitBuyShares={submitBuyShares} />
        </MainStack>
      </PageLayout>
    ))
  );
}
