import { Button, Typography } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import React from "react";
import * as Yup from "yup";
import { sendAddressValidationSchema } from "../../../forms/validationSchemas";
import { FormField, FormStack } from "./style";

const { Text } = Typography;

interface FormSendTokensProps {
  readonly tokenName: string;
  readonly tokenAmount: string;
  readonly sendTokensAction: (values: unknown) => void;
}

export function FormSendTokens({
  tokenName,
  tokenAmount,
  sendTokensAction,
}: FormSendTokensProps): JSX.Element {
  // const sendAmountValidationSchema = Yup.object().shape({
  //   amount: Yup.number()
  //     .required("An amount is required")
  //     .positive("Amount should be positive")
  //     .max(parseFloat(tokenAmount), `Amount cannot be greater than ${tokenAmount}`),
  // });

  // const sendValidationSchema = sendAmountValidationSchema.concat(sendAddressValidationSchema);

  return (
    <Formik
      initialValues={{ data: "" }}
      onSubmit={sendTokensAction}
      // validationSchema={sendValidationSchema}
    >
      {(formikProps) => (
        <Form>
          <FormStack>
            <Text>Amount and address</Text>
            <FormField>
              <FormItem name="data">
                <Input.TextArea name="data" placeholder="Enter amount and account" />
              </FormItem>
            </FormField>
            <Button
              type="primary"
              onClick={formikProps.submitForm}
              disabled={!(formikProps.isValid && formikProps.dirty)}
            >
              Send
            </Button>
          </FormStack>
        </Form>
      )}
    </Formik>
  );
}
