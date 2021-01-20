import { Loading, PageLayout } from "@cosmicdapp/design";
import {
  CW20,
  CW20Instance,
  displayAmountToNative,
  getErrorFromStackTrace,
  TokenInfo,
  useSdk,
} from "@cosmicdapp/logic";
import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { config } from "../../../config";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { pathOperationResult, pathValidator, pathWallet, pathWithdraw } from "../../paths";
import confirmIcon from "./assets/confirmIcon.svg";
import { FormWithdrawBalance, FormWithdrawBalanceFields } from "./FormWithdrawBalance";
import { ConfirmStack, ConfirmText, HeaderTitleStack, MainStack } from "./style";

const { Title } = Typography;

export interface ValidatorData {
  readonly tokenInfo: TokenInfo;
  readonly balance: string;
}

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

  const [cw20Contract, setCw20Contract] = useState<CW20Instance>();
  const [validatorData, setValidatorData] = useState<ValidatorData>();
  const [amount, setAmount] = useState("0");

  useEffect(() => {
    const client = getClient();

    (async function updateCw20Contract() {
      const contract = await client.getContract(validatorAddress);
      const cw20Contract = CW20(client).use(contract.address);
      setCw20Contract(cw20Contract);
    })();
  }, [getClient, validatorAddress]);

  useEffect(() => {
    if (!cw20Contract) return;

    (async function updateValidatorData() {
      const [tokenInfo, balance] = await Promise.all([
        cw20Contract.tokenInfo(),
        cw20Contract.balance(address),
      ]);

      setValidatorData({ tokenInfo, balance });
    })();
  }, [cw20Contract, address]);

  async function submitWithdrawBalance({ amount }: FormWithdrawBalanceFields) {
    setAmount(amount);
    setView(View.Confirm);
  }

  async function acceptConfirm() {
    setView(View.Loading);

    const nativeAmountString = displayAmountToNative(amount, config.coinMap, config.stakingToken);

    try {
      const txHash = await cw20Contract.unbond(address, nativeAmountString);
      if (!txHash) {
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
            <Title level={2}>{validatorData?.tokenInfo.name ?? ""}</Title>
          </HeaderTitleStack>
          <FormWithdrawBalance validatorData={validatorData} submitWithdrawBalance={submitWithdrawBalance} />
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
