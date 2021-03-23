import { BackButton, Loading, OperationResultState, PageLayout } from "@cosmicdapp/design";
import { CW20, getErrorFromStackTrace, useSdk } from "@cosmicdapp/logic";
import { Decimal } from "@cosmjs/math";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import backArrowIcon from "../../assets/backArrow.svg";
import { pathAllowances, pathOperationResult, pathTokens } from "../../paths";
import { FormChangeAmount, FormChangeAmountFields } from "./FormChangeAmount";
import { Amount, MainStack } from "./style";

const { Title, Text } = Typography;

interface AllowanceEditParams {
  readonly contractAddress: string;
  readonly spenderAddress: string;
}

function AllowanceEdit(): JSX.Element {
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { getClient, address } = useSdk();

  const { contractAddress, spenderAddress }: AllowanceEditParams = useParams();

  const [tokenName, setTokenName] = useState("");
  const [tokenDecimals, setTokenDecimals] = useState(0);
  const [allowanceAmount, setAllowanceAmount] = useState("0");

  useEffect(() => {
    const cw20Contract = CW20(getClient()).use(contractAddress);

    cw20Contract.tokenInfo().then((tokenInfo) => {
      setTokenName(tokenInfo.symbol);
      setTokenDecimals(tokenInfo.decimals);
    });
    cw20Contract.allowance(address, spenderAddress).then(({ allowance }) => setAllowanceAmount(allowance));
  }, [getClient, contractAddress, address, spenderAddress]);

  const submitChangeAmount = (values: FormChangeAmountFields) => {
    setLoading(true);

    const { newAmount } = values;

    const decNewAmount = Decimal.fromUserInput(newAmount, tokenDecimals);
    const decCurrentAmount = Decimal.fromAtomics(allowanceAmount, tokenDecimals);
    const cw20Contract = CW20(getClient()).use(contractAddress);

    try {
      let allowanceOperation: Promise<string> = Promise.reject("");

      if (decNewAmount.isGreaterThan(decCurrentAmount)) {
        allowanceOperation = cw20Contract.increaseAllowance(
          address,
          spenderAddress,
          decNewAmount.minus(decCurrentAmount).atomics,
        );
      } else {
        allowanceOperation = cw20Contract.decreaseAllowance(
          address,
          spenderAddress,
          decCurrentAmount.minus(decNewAmount).atomics,
        );
      }

      allowanceOperation.then(() => {
        history.push({
          pathname: pathOperationResult,
          state: {
            success: true,
            message: `${tokenName} allowance successfully set to ${newAmount} for ${spenderAddress}`,
            customButtonText: "Tokens",
          } as OperationResultState,
        });
      });
    } catch (stackTrace) {
      console.error(stackTrace);

      history.push({
        pathname: pathOperationResult,
        state: {
          success: false,
          message: "Could not set allowance:",
          error: getErrorFromStackTrace(stackTrace),
          customButtonActionPath: `${pathAllowances}/${contractAddress}`,
        } as OperationResultState,
      });
    }
  };

  const amountToDisplay = Decimal.fromAtomics(allowanceAmount, tokenDecimals).toString();

  return (
    (loading && <Loading loadingText={`Changing allowance...`} />) ||
    (!loading && (
      <PageLayout>
        <MainStack>
          <BackButton icon={backArrowIcon} path={pathTokens} />
          <Title>Allowance</Title>
          <Text>{spenderAddress}</Text>
          <Amount>
            <Text>Current</Text>
            <Text>{amountToDisplay}</Text>
            <Text>{tokenName}</Text>
          </Amount>
          <FormChangeAmount submitChangeAmount={submitChangeAmount} />
        </MainStack>
      </PageLayout>
    ))
  );
}

export default AllowanceEdit;
