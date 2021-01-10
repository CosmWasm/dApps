import { Button } from "antd";
import { Formik } from "formik";
import { Form, Input } from "formik-antd";
import React from "react";
import * as Yup from "yup";
import { sendAddressValidationSchema } from "../../../forms/validationSchemas";
import { FormField, FormItemAddress, FormItemAmount, FormStack, FormText, FormTextToken } from "./style";

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
  const sendAmountValidationSchema = Yup.object().shape({
    amount: Yup.number()
      .required("An amount is required")
      .positive("Amount should be positive")
      .max(parseFloat(tokenAmount), `Amount cannot be greater than ${tokenAmount}`),
  });

  const sendValidationSchema = sendAmountValidationSchema.concat(sendAddressValidationSchema);

  return (
    <Formik
      initialValues={{ amount: "", address: "" }}
      onSubmit={sendTokensAction}
      validationSchema={sendValidationSchema}
    >
      {(formikProps) => (
        <Form>
          <FormStack>
            <FormField>
              <FormText>Send</FormText>
              <FormItemAmount name="amount">
                <Input name="amount" placeholder="Enter amount" />
              </FormItemAmount>
              <FormTextToken>{tokenName}</FormTextToken>
            </FormField>
            <FormField>
              <FormText>To</FormText>
              <FormItemAddress name="address">
                <Input name="address" placeholder="Enter address" />
              </FormItemAddress>
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
