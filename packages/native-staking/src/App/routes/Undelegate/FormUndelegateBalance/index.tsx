import { useSdk } from "@cosmicdapp/logic";
import { Decimal } from "@cosmjs/math";
import { Button, Typography } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { FormField, FormStack } from "./style";

const { Text } = Typography;

export interface FormUndelegateBalanceFields {
  readonly amount: string;
}

interface FormUndelegateBalanceProps {
  readonly validatorAddress: string;
  readonly submitUndelegateBalance: (values: FormUndelegateBalanceFields) => Promise<void>;
}

export function FormUndelegateBalance({
  validatorAddress,
  submitUndelegateBalance,
}: FormUndelegateBalanceProps): JSX.Element {
  const { config, getStakingClient, address } = useSdk();

  const [balance, setBalance] = useState<Decimal>(Decimal.fromUserInput("0", 0));

  const maxAmount = balance.toFloatApproximation();
  const undelegateBalanceValidationSchema = Yup.object().shape({
    amount: Yup.number()
      .required("An amount is required")
      .positive("Amount should be positive")
      .max(maxAmount),
  });

  useEffect(() => {
    (async function updateBalance() {
      try {
        const { delegationResponse } = await getStakingClient().staking.delegation(
          address,
          validatorAddress,
        );
        const { balance } = delegationResponse;
        const balanceDecimal = Decimal.fromAtomics(
          balance.amount,
          config.coinMap[config.stakingToken].fractionalDigits,
        );

        setBalance(balanceDecimal);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, [address, validatorAddress, config, getStakingClient]);

  return (
    <Formik
      initialValues={{ amount: "" }}
      onSubmit={submitUndelegateBalance}
      validationSchema={undelegateBalanceValidationSchema}
    >
      {(formikProps) => (
        <Form>
          <FormStack>
            <FormField>
              <Text>Balance</Text>
              <Text>{balance.toString()}</Text>
            </FormField>
            <FormField>
              <Text>Undelegate</Text>
              <FormItem name="amount">
                <Input name="amount" placeholder="Enter amount" />
              </FormItem>
            </FormField>
            <Button
              type="primary"
              onClick={formikProps.submitForm}
              disabled={!(formikProps.isValid && formikProps.dirty)}
            >
              Undelegate
            </Button>
          </FormStack>
        </Form>
      )}
    </Formik>
  );
}
