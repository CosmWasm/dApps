import { OperationResultState } from "@cosmicdapp/design";
import { displayAmountToNative, getErrorFromStackTrace, useAccount } from "@cosmicdapp/logic";
import { Decimal } from "@cosmjs/math";
import { Button, Typography } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { ValidatorData } from "..";
import { config } from "../../../../config";
import { pathOperationResult, pathWallet, pathWithdraw } from "../../../paths";
import { FormField, FormStack } from "./style";

const { Text } = Typography;

interface FormWithdrawBalanceFields {
  readonly amount: string;
}

interface FormWithdrawBalanceProps {
  readonly validatorData: ValidatorData;
}

export function FormWithdrawBalance({ validatorData }: FormWithdrawBalanceProps): JSX.Element {
  const history = useHistory();
  const { refreshAccount } = useAccount();

  async function submitWithdrawBalance({ amount }: FormWithdrawBalanceFields) {
    const nativeAmountString = displayAmountToNative(amount, config.coinMap, config.stakingToken);

    try {
      const txHash = await validatorData.cw20contract.unbond(nativeAmountString);
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
          customButtonActionPath: `${pathWithdraw}/${validatorData.address}`,
        } as OperationResultState,
      });
    }
  }

  const balance = validatorData
    ? Decimal.fromAtomics(validatorData.balance, validatorData.tokenInfo.decimals).toString()
    : "0";

  return (
    <Formik initialValues={{ amount: "" }} onSubmit={submitWithdrawBalance}>
      {(formikProps) => (
        <Form>
          <FormStack>
            <FormField>
              <Text>Balance</Text>
              <Text>{balance}</Text>
            </FormField>
            <FormField>
              <Text>Withdraw</Text>
              <FormItem name="amount">
                <Input name="amount" placeholder="Enter amount" />
              </FormItem>
            </FormField>
            <Button
              type="primary"
              onClick={formikProps.submitForm}
              disabled={!(formikProps.isValid && formikProps.dirty)}
            >
              Withdraw
            </Button>
          </FormStack>
        </Form>
      )}
    </Formik>
  );
}
