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

export interface FormUndelegateBalanceFields {
  readonly amount: string;
}

interface FormUndelegateBalanceProps {
  readonly validator: StakingValidator;
  readonly submitUndelegateBalance: (values: FormUndelegateBalanceFields) => Promise<void>;
}

export function FormUndelegateBalance({
  validator,
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
