import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import React from "react";
import { SearchValidationSchema } from "../../../forms/validationSchemas";

interface FormSearchNameProps {
  readonly setSearchedName: (value: React.SetStateAction<string>) => void;
}

function FormSearchName({ setSearchedName }: FormSearchNameProps): JSX.Element {
  return (
    <Formik
      initialValues={{ name: "" }}
      validationSchema={SearchValidationSchema}
      onSubmit={(values) => {
        setSearchedName(values.name);
      }}
    >
      <Form>
        <FormItem name="name">
          <Input name="name" placeholder="Name" />
        </FormItem>
      </Form>
    </Formik>
  );
}

export default FormSearchName;
