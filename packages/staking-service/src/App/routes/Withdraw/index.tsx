import { Loading, PageLayout } from "@cosmicdapp/design";
import {
  CW20,
  CW20Instance,
  displayAmountToNative,
  getErrorFromStackTrace,
  TokenInfo,
  useAccount,
  useSdk,
} from "@cosmicdapp/logic";
import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { config } from "../../../config";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { pathOperationResult, pathWallet, pathWithdraw } from "../../paths";
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
  const { getClient } = useSdk();
  const { account, refreshAccount } = useAccount();

  const [cw20Contract, setCw20Contract] = useState<CW20Instance>();
  const [validatorData, setValidatorData] = useState<ValidatorData>();
  const [amount, setAmount] = useState("0");

  useEffect(() => {
    const client = getClient();

    client.getContract(validatorAddress).then((contract) => {
      const cw20Contract = CW20(client).use(contract.address);
      setCw20Contract(cw20Contract);
    });
  }, [getClient, validatorAddress]);

  useEffect(() => {
    if (!cw20Contract) return;

    (async function updateValidatorData() {
      const [tokenInfo, balance] = await Promise.all([
        cw20Contract.tokenInfo(),
        cw20Contract.balance(account.address),
      ]);

      setValidatorData({ tokenInfo, balance });
    })();
  }, [cw20Contract, account.address]);

  async function submitWithdrawBalance({ amount }: FormWithdrawBalanceFields) {
    setAmount(amount);
    setView(View.Confirm);
  }

  async function acceptConfirm() {
    setView(View.Loading);

    const nativeAmountString = displayAmountToNative(amount, config.coinMap, config.stakingToken);

    try {
      const txHash = await cw20Contract.unbond(nativeAmountString);
      if (!txHash) {
        throw Error("Transfer from failed");
      }

      refreshAccount();

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
          customButtonActionPath: `${pathWithdraw}/${validatorAddress}`,
        },
      });
    }
  }

  function declineConfirm() {
    setAmount("0");
    setView(View.Form);
  }

  return (
    (view === View.Form && (
      <PageLayout>
        <MainStack>
          <HeaderTitleStack>
            <HeaderBackMenu />
            <Title>Withdraw</Title>
            <Title level={2}>{validatorData?.tokenInfo.name ?? ""}</Title>
          </HeaderTitleStack>
          <FormWithdrawBalance validatorData={validatorData} submitWithdrawBalance={submitWithdrawBalance} />
        </MainStack>
      </PageLayout>
    )) ||
    (view === View.Confirm && (
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
    )) ||
    (view === View.Loading && <Loading loadingText={`Withdrawing...`} />)
  );
}
