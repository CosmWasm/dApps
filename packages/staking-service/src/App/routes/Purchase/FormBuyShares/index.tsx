import { OperationResultState } from "@cosmicdapp/design";
import { displayAmountToNative, getErrorFromStackTrace, useAccount } from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/launchpad";
import { Button, Typography } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { ValidatorData } from "..";
import { config } from "../../../../config";
import { pathOperationResult, pathPurchase, pathWallet } from "../../../paths";
import { FormField, FormStack, StakePerToken } from "./style";

const { Text } = Typography;

interface FormBuySharesFields {
  readonly amount: string;
}

interface FormBuySharesProps {
  readonly validatorData: ValidatorData;
}

export function FormBuyShares({ validatorData }: FormBuySharesProps): JSX.Element {
  const history = useHistory();
  const { refreshAccount } = useAccount();

  async function submitBuyShares({ amount }: FormBuySharesFields) {
    const nativeAmountString = displayAmountToNative(amount, config.coinMap, config.stakingToken);
    const nativeAmountCoin: Coin = { amount: nativeAmountString, denom: config.stakingToken };

    try {
      const txHash = await validatorData.cw20contract.bond(nativeAmountCoin);
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
          customButtonActionPath: `${pathWallet}/${validatorData.address}`,
        } as OperationResultState,
      });
    } catch (stackTrace) {
      console.error(stackTrace);

      history.push({
        pathname: pathOperationResult,
        state: {
          success: false,
          message: "Bond transaction failed:",
          error: getErrorFromStackTrace(stackTrace),
          customButtonActionPath: `${pathPurchase}/${validatorData.address}`,
        } as OperationResultState,
      });
    }
  }

  return (
    <Formik initialValues={{ amount: "" }} onSubmit={submitBuyShares}>
      {(formikProps) => {
        const formDisabled = !(formikProps.isValid && formikProps.dirty);

        return (
          <Form>
            <FormStack>
              <StakePerToken>
                <Text>Stake/Token:</Text>
                <Text>{validatorData?.investment.nominal_value}</Text>
              </StakePerToken>
              <FormField>
                <Text>{config.coinMap[config.stakingToken].denom}</Text>
                <FormItem name="amount">
                  <Input name="amount" placeholder="Enter amount" />
                </FormItem>
              </FormField>
              <Button type="primary" onClick={formikProps.submitForm} disabled={formDisabled}>
                Buy
              </Button>
            </FormStack>
          </Form>
        );
      }}
    </Formik>
  );
}
