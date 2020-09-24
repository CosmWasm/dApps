import { Button, Typography } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import React from "react";
import { FormField, FormStack } from "./style";

const { Text } = Typography;

export interface FormWithdrawBalanceFields {
  readonly amount: string;
}

interface FormWithdrawBalanceProps {
  readonly submitWithdrawBalance: (values: unknown) => void;
}

export function FormWithdrawBalance({ submitWithdrawBalance }: FormWithdrawBalanceProps): JSX.Element {
  return (
    <Formik initialValues={{ amount: "" }} onSubmit={submitWithdrawBalance}>
      {(formikProps) => (
        <Form>
          <FormStack>
            <FormField>
              <Text>Atom</Text>
              <Text>1000,000</Text>
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
