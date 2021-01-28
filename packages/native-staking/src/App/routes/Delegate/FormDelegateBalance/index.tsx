import { useSdk } from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/launchpad";
import { Decimal } from "@cosmjs/math";
import { Button, Typography } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import React from "react";
import * as Yup from "yup";
import { config } from "../../../../config";
import { StakingValidator } from "../../../utils/staking";
import { FormField, FormStack, StakePerToken } from "./style";

const { Text } = Typography;

export interface FormDelegateBalanceFields {
  readonly amount: string;
}

interface FormDelegateBalanceProps {
  readonly validator: StakingValidator;
  readonly submitDelegateBalance: (values: FormDelegateBalanceFields) => Promise<void>;
}

export function FormDelegateBalance({
  validator,
  submitDelegateBalance,
}: FormDelegateBalanceProps): JSX.Element {
  const { balance } = useSdk();

  const stakingBalance: Coin = balance.find((coin) => coin.denom === config.stakingToken);
  const stakingDecimals = config.coinMap[config.stakingToken].fractionalDigits;
  const maxAmount = stakingBalance
    ? Decimal.fromAtomics(stakingBalance.amount, stakingDecimals).toFloatApproximation()
    : 0;

  const delegateBalanceValidationSchema = Yup.object().shape({
    amount: Yup.number()
      .required("An amount is required")
      .positive("Amount should be positive")
      .max(maxAmount),
  });

  return (
    <Formik
      initialValues={{ amount: "" }}
      onSubmit={submitDelegateBalance}
      validationSchema={delegateBalanceValidationSchema}
    >
      {(formikProps) => {
        const formDisabled = !(formikProps.isValid && formikProps.dirty);

        return (
          <Form>
            <FormStack>
              <StakePerToken>
                <Text>Min. Delegation:</Text>
                <Text>{validator?.minSelfDelegation}</Text>
              </StakePerToken>
              <FormField>
                <Text>{config.coinMap[config.stakingToken].denom}</Text>
                <FormItem name="amount">
                  <Input name="amount" placeholder="Enter amount" />
                </FormItem>
              </FormField>
              <Button type="primary" onClick={formikProps.submitForm} disabled={formDisabled}>
                Delegate
              </Button>
            </FormStack>
          </Form>
        );
      }}
    </Formik>
  );
}
