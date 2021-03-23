import { Formik } from "formik";
import { Form, FormItem } from "formik-antd";
import React from "react";
import Search from "../../../forms/Search";
import { searchAddressValidationSchema } from "../../../forms/validationSchemas";

interface FormSearchAllowingProps {
  readonly initialAddress?: string;
  readonly setSearchedAddress: (value: React.SetStateAction<string>) => void;
}

function FormSearchAllowing({ initialAddress, setSearchedAddress }: FormSearchAllowingProps): JSX.Element {
  return (
    <Formik
      initialValues={{ address: initialAddress }}
      validationSchema={searchAddressValidationSchema}
      onSubmit={(values) => {
        setSearchedAddress(values.address);
      }}
    >
      {(formikProps) => (
        <Form>
          <FormItem name="address">
            <Search
              name="address"
              placeholder="Search"
              enterButton
              onSearch={(value) => {
                formikProps.isValid && setSearchedAddress(value);
              }}
            />
          </FormItem>
        </Form>
      )}
    </Formik>
  );
}

export default FormSearchAllowing;
