import { Button } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import React from "react";
import { setAllowanceValidationSchema } from "../../../forms/validationSchemas";
import { FormStack } from "./style";

export interface FormChangeAmountFields {
  readonly newAmount: string;
}

interface FormChangeAmountProps {
  readonly submitChangeAmount: (values: unknown) => void;
}

export function FormChangeAmount({ submitChangeAmount }: FormChangeAmountProps): JSX.Element {
  return (
    <Formik
      initialValues={{ newAmount: "" }}
      onSubmit={submitChangeAmount}
      validationSchema={setAllowanceValidationSchema}
    >
      {(formikProps) => (
        <Form>
          <FormStack>
            <FormItem name="newAmount">
              <Input name="newAmount" placeholder="Enter new amount" />
            </FormItem>
            <Button
              type="primary"
              onClick={formikProps.submitForm}
              disabled={!(formikProps.isValid && formikProps.dirty)}
            >
              Confirm
            </Button>
          </FormStack>
        </Form>
      )}
    </Formik>
  );
}
