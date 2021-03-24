import { BackButton, Loading, OperationResultState, PageLayout, YourAccount } from "@cosmicdapp/design";
import {
  displayAmountToNative,
  getErrorFromStackTrace,
  nativeCoinToDisplay,
  useSdk,
} from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/launchpad";
import { isBroadcastTxFailure } from "@cosmjs/stargate";
import { Typography } from "antd";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { config } from "../../../config";
import backArrowIcon from "../../assets/backArrow.svg";
import { pathOperationResult, pathTokens, pathTokenDetail } from "../../paths";
import { FormSendTokens } from "./FormSendTokens";
import { AccountStack, Amount, MainStack } from "./style";
import { NativeMultiSend } from "./NativeMultiSend";

const { Title, Text } = Typography;

interface Recipient {
  readonly address: string;
  readonly amount: Coin[];
}

interface TokenDetailParams {
  readonly contractAddress: string;
  readonly tokenName: string;
}

export interface TokenDetailState {
  readonly tokenAmount: string;
}

export function TokenDetail(): JSX.Element {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const { contractAddress, tokenName }: TokenDetailParams = useParams();
  const fullPathTokenDetail = `${pathTokenDetail}/${contractAddress}`;
  const { tokenAmount } = history.location.state as TokenDetailState;

  const { getClient, address, refreshBalance } = useSdk();

  const sendTokensAction = (values: { data: string }) => {
    setLoading(true);

    const { data } = values;
    const tmp = data.split("\n");
    let total = 0;
    const recipients = tmp.map((row) => {
      const [address, quantity] = row.split(",").map((i) => i.trim());
      const amount = [{ denom: tokenName, amount: quantity }];
      total += Number(quantity);
      return { address, amount };
    });
    const sendFunds: Coin[] = [{ denom: tokenName, amount: String(total) }];

    const MULTISENDER_CONTRACT = "wasm1wngpd3exjy3nu2u2tdst0dz0zpjdampsf39n3v";
    const contract = NativeMultiSend(getClient()).use(contractAddress ?? MULTISENDER_CONTRACT);

    // // TODO: Add try catch so it does not fail i.e. too many decimals
    // const amountToTransfer = displayAmountToNative(amount, config.coinMap, tokenName);

    // const nativeTokenToTransfer: Coin = { denom: tokenName, amount: amountToTransfer };
    // const transferAmount: readonly Coin[] = [nativeTokenToTransfer];

    try {
      contract.transfer(address, recipients, sendFunds).then((txHash) => {
        if (!txHash) {
          return Promise.reject("Transfer from failed");
        }

        refreshBalance();

        history.push({
          pathname: pathOperationResult,
          state: {
            success: true,
            message: `${tokenName} successfully sent`,
            customButtonText: "Token detail",
            customButtonActionPath: fullPathTokenDetail,
          } as OperationResultState,
        });
      });
    } catch (stackTrace) {
      console.error(stackTrace);

      history.push({
        pathname: pathOperationResult,
        state: {
          success: false,
          message: "Send transaction failed:",
          error: getErrorFromStackTrace(stackTrace),
          customButtonActionPath: fullPathTokenDetail,
        } as OperationResultState,
      });
    }
  };

  const nativeToken: Coin = { denom: tokenName, amount: tokenAmount };
  // TODO: Add try catch so it does not fail i.e. too many decimals
  const { denom: nameToDisplay, amount: amountToDisplay } = nativeCoinToDisplay(nativeToken, config.coinMap);
  const [amountInteger, amountDecimal] = amountToDisplay.split(".");

  return (
    (loading && <Loading loadingText={`Sending ${nameToDisplay}...`} />) ||
    (!loading && (
      <PageLayout>
        <MainStack>
          <BackButton icon={backArrowIcon} path={pathTokens} />
          <AccountStack>
            <Title>{nameToDisplay}</Title>
            <YourAccount hideTitle hideBalance />
          </AccountStack>
          <Amount>
            <Text>{`${amountInteger}${amountDecimal ? "." : ""}`}</Text>
            {amountDecimal && <Text>{amountDecimal}</Text>}
            <Text>{" tokens"}</Text>
          </Amount>
          <FormSendTokens
            tokenName={nameToDisplay}
            tokenAmount={amountToDisplay}
            sendTokensAction={sendTokensAction}
          />
        </MainStack>
      </PageLayout>
    ))
  );
}
