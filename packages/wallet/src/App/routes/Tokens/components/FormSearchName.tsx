import { Formik } from "formik";
import { Form, FormItem } from "formik-antd";
import React from "react";
import Search from "../../../forms/Search";
import { searchValidationSchema } from "../../../forms/validationSchemas";

interface FormSearchNameProps {
  readonly currentAddress: string;
  readonly setCurrentAddress: (value: React.SetStateAction<string>) => void;
}

export function FormSearchName({ currentAddress, setCurrentAddress }: FormSearchNameProps): JSX.Element {
  return (
    <Formik
      initialValues={{ address: currentAddress }}
      validationSchema={searchValidationSchema}
      onSubmit={(values) => {
        setCurrentAddress(values.address);
      }}
    >
      {(formikProps) => (
        <Form>
          <FormItem name="address">
            <Search
              name="address"
              placeholder="Enter address"
              enterButton
              onSearch={formikProps.submitForm}
            />
          </FormItem>
        </Form>
      )}
    </Formik>
  );
}
