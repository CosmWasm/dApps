import { BackButton, Loading, OperationResultState, PageLayout, YourAccount } from "@cosmicdapp/design";
import { CW20, getErrorFromStackTrace, useSdk } from "@cosmicdapp/logic";
import { Decimal } from "@cosmjs/math";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import backArrowIcon from "../../assets/backArrow.svg";
import { pathOperationResult, pathTokenDetail, pathTokens } from "../../paths";
import { FormSendTokens, FormSendTokensFields } from "./FormSendTokens";
import { AccountStack, Amount, MainStack } from "./style";

const { Title, Text } = Typography;

interface TokenSendParams {
  readonly contractAddress: string;
  readonly allowingAddress?: string;
}

function TokenSend(): JSX.Element {
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { getClient, address, refreshBalance } = useSdk();

  const { contractAddress, allowingAddress }: TokenSendParams = useParams();
  const fullPathTokenDetail = `${pathTokenDetail}/${contractAddress}/${allowingAddress ?? ""}`;

  const [tokenName, setTokenName] = useState("");
  const [tokenAmount, setTokenAmount] = useState("0");
  const [tokenDecimals, setTokenDecimals] = useState(0);

  useEffect(() => {
    const cw20Contract = CW20(getClient()).use(contractAddress);
    const tokenAddress = allowingAddress ?? address;

    cw20Contract.tokenInfo().then(({ symbol, decimals }) => {
      setTokenName(symbol);
      setTokenDecimals(decimals);
    });

    if (allowingAddress) {
      cw20Contract.allowance(allowingAddress, address).then((response) => setTokenAmount(response.allowance));
    } else {
      cw20Contract.balance(tokenAddress).then((balance) => setTokenAmount(balance));
    }
  }, [getClient, contractAddress, allowingAddress, address]);

  const sendTokensAction = (values: FormSendTokensFields) => {
    setLoading(true);

    const { address: recipientAddress, amount } = values;
    const transferAmount = Decimal.fromUserInput(amount, tokenDecimals).atomics;

    const cw20Contract = CW20(getClient()).use(contractAddress);

    try {
      if (allowingAddress) {
        cw20Contract
          .transferFrom(address, allowingAddress, recipientAddress, transferAmount)
          .then((txHash) => {
            if (!txHash) {
              return Promise.reject("Transfer from failed");
            }

            refreshBalance();

            history.push({
              pathname: pathOperationResult,
              state: {
                success: true,
                message: `${amount} ${tokenName} successfully sent to ${recipientAddress} with allowance from ${allowingAddress}`,
                customButtonText: "Token detail",
                customButtonActionPath: fullPathTokenDetail,
              } as OperationResultState,
            });
          });
      } else {
        cw20Contract.transfer(address, recipientAddress, transferAmount).then((txHash) => {
          if (!txHash) {
            return Promise.reject("Transfer failed");
          }

          refreshBalance();

          history.push({
            pathname: pathOperationResult,
            state: {
              success: true,
              message: `${amount} ${tokenName} successfully sent to ${recipientAddress}`,
              customButtonText: "Token detail",
              customButtonActionPath: fullPathTokenDetail,
            } as OperationResultState,
          });
        });
      }
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

  const amountToDisplay = Decimal.fromAtomics(tokenAmount, tokenDecimals).toString();
  const [amountInteger, amountDecimal] = amountToDisplay.split(".");

  const maxAmount = Decimal.fromAtomics(tokenAmount, tokenDecimals);

  return (
    (loading && <Loading loadingText={`Sending ${tokenName}...`} />) ||
    (!loading && (
      <PageLayout>
        <MainStack>
          <BackButton icon={backArrowIcon} path={pathTokens} />
          <AccountStack>
            <Title>{tokenName}</Title>
            <YourAccount hideTitle hideBalance />
          </AccountStack>
          <Amount>
            <Text>{`${amountInteger}${amountDecimal ? "." : ""}`}</Text>
            {amountDecimal && <Text>{amountDecimal}</Text>}
            <Text>{" tokens"}</Text>
          </Amount>
          <FormSendTokens tokenName={tokenName} maxAmount={maxAmount} sendTokensAction={sendTokensAction} />
        </MainStack>
      </PageLayout>
    ))
  );
}

export default TokenSend;
