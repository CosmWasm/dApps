import { PageLayout, Loading } from "@cosmicdapp/design";
import {
  CW20,
  CW20Instance,
  TokenInfo,
  useAccount,
  useSdk,
  displayAmountToNative,
  getErrorFromStackTrace,
} from "@cosmicdapp/logic";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { FormWithdrawBalance, FormWithdrawBalanceFields } from "./FormWithdrawBalance";
import { HeaderTitleStack, MainStack } from "./style";
import { config } from "../../../config";
import { pathOperationResult, pathWallet, pathWithdraw } from "../../paths";

const { Title } = Typography;

export interface ValidatorData {
  readonly tokenInfo: TokenInfo;
  readonly balance: string;
}

interface WithdrawParams {
  readonly validatorAddress: string;
}

export function Withdraw(): JSX.Element {
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { validatorAddress } = useParams<WithdrawParams>();
  const { getClient } = useSdk();
  const { account, refreshAccount } = useAccount();

  const [cw20Contract, setCw20Contract] = useState<CW20Instance>();
  const [validatorData, setValidatorData] = useState<ValidatorData>();

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
    setLoading(true);

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

  return (
    (loading && <Loading loadingText={`Withdrawing...`} />) ||
    (!loading && (
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
    ))
  );
}
