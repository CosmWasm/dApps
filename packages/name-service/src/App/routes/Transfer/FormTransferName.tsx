import { Button } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import React from "react";
import { TransferValidationSchema } from "../../forms/validationSchemas";

interface FormTransferNameProps {
  readonly setNewOwnerAddress: (value: React.SetStateAction<string>) => void;
  readonly transferButtonText: string;
  readonly transferButtonAction: () => void;
}

export function FormTransferName({
  setNewOwnerAddress,
  transferButtonText,
  transferButtonAction,
}: FormTransferNameProps): JSX.Element {
  return (
    <Formik
      initialValues={{ address: "" }}
      validationSchema={TransferValidationSchema}
      onSubmit={transferButtonAction}
    >
      {(formikProps) => (
        <Form>
          <FormItem name="address">
            <Input
              name="address"
              placeholder="Enter address"
              onChange={(event) => {
                setNewOwnerAddress(event.target.value);
              }}
            />
          </FormItem>
          <Button
            type="primary"
            onClick={transferButtonAction}
            disabled={!(formikProps.isValid && formikProps.dirty)}
          >
            {transferButtonText}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
