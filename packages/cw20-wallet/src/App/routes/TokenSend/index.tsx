import { BackButton, Loading, OperationResultState, PageLayout, YourAccount } from "@cosmicdapp/design";
import { getErrorFromStackTrace, useAccount, useSdk } from "@cosmicdapp/logic";
import { Decimal } from "@cosmjs/math";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import backArrowIcon from "../../assets/backArrow.svg";
import { pathOperationResult, pathTokens } from "../../paths";
import { CW20 } from "../../service/cw20";
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
  const { getClient } = useSdk();
  const { account, refreshAccount } = useAccount();

  const { contractAddress, allowingAddress }: TokenSendParams = useParams();

  const [tokenName, setTokenName] = useState("");
  const [tokenAmount, setTokenAmount] = useState("0");
  const [tokenDecimals, setTokenDecimals] = useState(0);

  useEffect(() => {
    const cw20Contract = CW20(getClient()).use(contractAddress);
    const tokenAddress = allowingAddress ?? account.address;

    cw20Contract.tokenInfo().then(({ symbol, decimals }) => {
      setTokenName(symbol);
      setTokenDecimals(decimals);
    });

    if (allowingAddress) {
      cw20Contract
        .allowance(allowingAddress, account.address)
        .then((response) => setTokenAmount(response.allowance));
    } else {
      cw20Contract.balance(tokenAddress).then((balance) => setTokenAmount(balance));
    }
  }, [getClient, contractAddress, allowingAddress, account.address]);

  const sendTokensAction = (values) => {
    setLoading(true);
    const { address: recipientAddress, amount }: FormSendTokensFields = values;
    const transferAmount = Decimal.fromUserInput(amount, tokenDecimals).atomics;

    const cw20Contract = CW20(getClient()).use(contractAddress);

    try {
      if (allowingAddress) {
        cw20Contract.transferFrom(allowingAddress, recipientAddress, transferAmount).then((txHash) => {
          if (!txHash) {
            return Promise.reject("Transfer from failed");
          }

          refreshAccount();

          history.push({
            pathname: pathOperationResult,
            state: {
              success: true,
              message: `${amount} ${tokenName} succesfully sent to ${recipientAddress} with allowance from ${allowingAddress}`,
              customButtonText: "Tokens",
            } as OperationResultState,
          });
        });
      } else {
        cw20Contract.transfer(recipientAddress, transferAmount).then((txHash) => {
          if (!txHash) {
            return Promise.reject("Transfer failed");
          }

          refreshAccount();

          history.push({
            pathname: pathOperationResult,
            state: {
              success: true,
              message: `${amount} ${tokenName} succesfully sent to ${recipientAddress}`,
              customButtonText: "Tokens",
            } as OperationResultState,
          });
        });
      }
    } catch (stackTrace) {
      console.error(stackTrace);

      const allowingAddressPath = allowingAddress ?? "";
      const tokenDetailPath = `${pathTokens}/${contractAddress}/${allowingAddressPath}`;

      history.push({
        pathname: pathOperationResult,
        state: {
          success: false,
          message: "Send transaction failed:",
          error: getErrorFromStackTrace(stackTrace),
          customButtonActionPath: tokenDetailPath,
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
