import { Loading, PageLayout } from "@cosmicdapp/design";
import { displayAmountToNative, getErrorFromStackTrace, useSdk } from "@cosmicdapp/logic";
import { Coin, coins } from "@cosmjs/launchpad";
import { isBroadcastTxFailure } from "@cosmjs/stargate";
import { Button, Typography } from "antd";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { config } from "../../../config";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { pathOperationResult, pathValidator, pathWallet, pathWithdraw } from "../../paths";
import { useStakingValidator } from "../../utils/staking";
import confirmIcon from "./assets/confirmIcon.svg";
import { FormWithdrawBalance, FormWithdrawBalanceFields } from "./FormWithdrawBalance";
import { ConfirmStack, ConfirmText, HeaderTitleStack, MainStack } from "./style";

const { Title } = Typography;

enum View {
  Form = "FORM",
  Confirm = "CONFIRM",
  Loading = "LOADING",
}

interface WithdrawParams {
  readonly validatorAddress: string;
}

export function Withdraw(): JSX.Element {
  const [view, setView] = useState(View.Form);

  const history = useHistory();
  const { validatorAddress } = useParams<WithdrawParams>();
  const { getClient, address, refreshBalance } = useSdk();

  const validator = useStakingValidator(validatorAddress);
  const [amount, setAmount] = useState("0");

  async function submitWithdrawBalance({ amount }: FormWithdrawBalanceFields) {
    setAmount(amount);
    setView(View.Confirm);
  }

  async function acceptConfirm() {
    setView(View.Loading);

    const nativeAmountString = displayAmountToNative(amount, config.coinMap, config.stakingToken);
    const nativeAmountCoin: Coin = { amount: nativeAmountString, denom: config.stakingToken };

    const undelegateMsg = {
      typeUrl: "cosmos-sdk/MsgUndelegate",
      value: {
        delegator_address: address,
        validator_address: validatorAddress,
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
      const response = await getClient().signAndBroadcast(address, [undelegateMsg], fee);
      if (isBroadcastTxFailure(response)) {
        throw Error("Withdrawal failed");
      }

      refreshBalance();

      history.push({
        pathname: pathOperationResult,
        state: {
          success: true,
          message: `${amount} ${config.stakingToken} successfully unbonded`,
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
          message: "Unbond transaction failed:",
          error: getErrorFromStackTrace(stackTrace),
          customButtonActionPath: `${pathWithdraw}/${validatorAddress}`,
        },
      });
    }
  }

  function declineConfirm() {
    setAmount("0");
    setView(View.Form);
  }

  function renderForm() {
    return (
      <PageLayout>
        <MainStack>
          <HeaderTitleStack>
            <HeaderBackMenu path={`${pathValidator}/${validatorAddress}`} />
            <Title>Withdraw</Title>
            <Title level={2}>{validator?.description.moniker ?? ""}</Title>
          </HeaderTitleStack>
          <FormWithdrawBalance validator={validator} submitWithdrawBalance={submitWithdrawBalance} />
        </MainStack>
      </PageLayout>
    );
  }

  function renderConfirm() {
    return (
      <PageLayout>
        <ConfirmStack>
          <img src={confirmIcon} alt="Confirm icon" />
          <ConfirmText>Your tokens could take up to 3 weeks to be withdrawn...</ConfirmText>
          <Button type="primary" onClick={acceptConfirm}>
            Accept
          </Button>
          <Button type="primary" onClick={declineConfirm}>
            Decline
          </Button>
        </ConfirmStack>
      </PageLayout>
    );
  }

  function renderLoading() {
    return <Loading loadingText={`Withdrawing...`} />;
  }

  switch (view) {
    case View.Form:
      return renderForm();
    case View.Confirm:
      return renderConfirm();
    case View.Loading:
      return renderLoading();
    default:
      return renderForm();
  }
}
