import { useSdk } from "@cosmicdapp/logic";
import { Decimal } from "@cosmjs/math";
import { Button, Typography } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { StakingValidator } from "../../../utils/staking";
import { FormField, FormStack } from "./style";

const { Text } = Typography;

export interface FormWithdrawBalanceFields {
  readonly amount: string;
}

interface FormWithdrawBalanceProps {
  readonly validator: StakingValidator;
  readonly submitWithdrawBalance: (values: FormWithdrawBalanceFields) => Promise<void>;
}

export function FormWithdrawBalance({
  validator,
  submitWithdrawBalance,
}: FormWithdrawBalanceProps): JSX.Element {
  const { config, getStakingClient, address } = useSdk();

  const [balance, setBalance] = useState<Decimal>(Decimal.fromUserInput("0", 0));

  const maxAmount = balance.toFloatApproximation();
  const withdrawBalanceValidationSchema = Yup.object().shape({
    amount: Yup.number()
      .required("An amount is required")
      .positive("Amount should be positive")
      .max(maxAmount),
  });

  useEffect(() => {
    if (!validator) return;

    (async function updateBalance() {
      const { delegationResponse } = await getStakingClient().staking.unverified.delegation(
        address,
        validator.operatorAddress,
      );
      const { balance } = delegationResponse;
      const balanceDecimal = Decimal.fromAtomics(
        balance.amount,
        config.coinMap[config.stakingToken].fractionalDigits,
      );

      setBalance(balanceDecimal);
    })();
  }, [address, validator, config, getStakingClient]);

  return (
    <Formik
      initialValues={{ amount: "" }}
      onSubmit={submitWithdrawBalance}
      validationSchema={withdrawBalanceValidationSchema}
    >
      {(formikProps) => (
        <Form>
          <FormStack>
            <FormField>
              <Text>Balance</Text>
              <Text>{balance.toString()}</Text>
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
