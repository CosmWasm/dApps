import { Formik } from "formik";
import { Form, FormItem } from "formik-antd";
import React from "react";
import Search from "../../../forms/Search";
import { SearchValidationSchema } from "../../../forms/validationSchemas";

interface FormSearchNameProps {
  readonly initialName?: string;
  readonly setSearchedName: (value: React.SetStateAction<string>) => void;
}

export function FormSearchName({ initialName, setSearchedName }: FormSearchNameProps): JSX.Element {
  return (
    <Formik
      initialValues={{ name: initialName }}
      validationSchema={SearchValidationSchema}
      onSubmit={(values) => {
        setSearchedName(values.name);
      }}
    >
      {(formikProps) => (
        <Form>
          <FormItem name="name">
            <Search
              name="name"
              placeholder="Name"
              enterButton
              onSearch={(value) => {
                formikProps.isValid && setSearchedName(value);
              }}
            />
          </FormItem>
        </Form>
      )}
    </Formik>
  );
}
