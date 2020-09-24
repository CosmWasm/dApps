import { Button, Typography } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import React from "react";
import { FormField, FormStack } from "./style";

const { Text } = Typography;

export interface FormBuySharesFields {
  readonly amount: string;
  readonly shares: string;
}

interface FormBuySharesProps {
  readonly submitBuyShares: (values: unknown) => void;
}

export function FormBuyShares({ submitBuyShares }: FormBuySharesProps): JSX.Element {
  return (
    <Formik initialValues={{ amount: "", shares: "" }} onSubmit={submitBuyShares}>
      {(formikProps) => (
        <Form>
          <FormStack>
            <FormField>
              <Text>Atom</Text>
              <FormItem name="amount">
                <Input name="amount" placeholder="Enter amount" />
              </FormItem>
            </FormField>
            <FormField>
              <Text>Iris Net Shares</Text>
              <FormItem name="shares">
                <Input name="shares" placeholder="XXXXXX" />
              </FormItem>
            </FormField>
            <Button
              type="primary"
              onClick={formikProps.submitForm}
              disabled={!(formikProps.isValid && formikProps.dirty)}
            >
              Buy
            </Button>
          </FormStack>
        </Form>
      )}
    </Formik>
  );
}
