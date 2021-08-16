import { Loading, PageLayout } from "@cosmicdapp/design";
import {
  CW20,
  CW20Instance,
  displayAmountToNative,
  getErrorFromStackTrace,
  Investment,
  TokenInfo,
  useSdk,
} from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/stargate";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { config } from "../../../config";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { pathOperationResult, pathPurchase, pathValidator, pathWallet } from "../../paths";
import { FormBuyShares, FormBuySharesFields } from "./FormBuyShares";
import { HeaderTitleStack, MainStack } from "./style";

const { Title } = Typography;

export interface ValidatorData {
  readonly tokenInfo: TokenInfo;
  readonly investment: Investment;
}

interface PurchaseParams {
  readonly validatorAddress: string;
}

export function Purchase(): JSX.Element {
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { validatorAddress } = useParams<PurchaseParams>();
  const { getClient, address, refreshBalance } = useSdk();

  const [cw20Contract, setCw20Contract] = useState<CW20Instance>();
  const [validatorData, setValidatorData] = useState<ValidatorData>();

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
      const [tokenInfo, investment] = await Promise.all([
        cw20Contract.tokenInfo(),
        cw20Contract.investment(),
      ]);

      setValidatorData({ tokenInfo, investment });
    })();
  }, [cw20Contract]);

  async function submitBuyShares({ amount }: FormBuySharesFields) {
    setLoading(true);

    const nativeAmountString = displayAmountToNative(amount, config.coinMap, config.stakingToken);
    const nativeAmountCoin: Coin = { amount: nativeAmountString, denom: config.stakingToken };

    try {
      const txHash = await cw20Contract.bond(address, nativeAmountCoin);
      if (!txHash) {
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
            <Title level={2}>{validatorData?.tokenInfo.name ?? ""}</Title>
          </HeaderTitleStack>
          <FormBuyShares validatorData={validatorData} submitBuyShares={submitBuyShares} />
        </MainStack>
      </PageLayout>
    ))
  );
}
