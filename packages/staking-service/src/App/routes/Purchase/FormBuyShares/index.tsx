import { useSdk } from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/stargate";
import { Decimal } from "@cosmjs/math";
import { Button, Typography } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import React from "react";
import * as Yup from "yup";
import { ValidatorData } from "..";
import { config } from "../../../../config";
import { FormField, FormStack, StakePerToken } from "./style";

const { Text } = Typography;

export interface FormBuySharesFields {
  readonly amount: string;
}

interface FormBuySharesProps {
  readonly validatorData: ValidatorData;
  readonly submitBuyShares: (values: FormBuySharesFields) => Promise<void>;
}

export function FormBuyShares({ validatorData, submitBuyShares }: FormBuySharesProps): JSX.Element {
  const { balance } = useSdk();

  const stakingBalance: Coin = balance.find((coin) => coin.denom === config.stakingToken);
  const stakingDecimals = config.coinMap[config.stakingToken].fractionalDigits;
  const maxAmount = stakingBalance
    ? Decimal.fromAtomics(stakingBalance.amount, stakingDecimals).toFloatApproximation()
    : 0;

  const buySharesValidationSchema = Yup.object().shape({
    amount: Yup.number()
      .required("An amount is required")
      .positive("Amount should be positive")
      .max(maxAmount),
  });

  return (
    <Formik
      initialValues={{ amount: "" }}
      onSubmit={submitBuyShares}
      validationSchema={buySharesValidationSchema}
    >
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
