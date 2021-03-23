// Search form not present in form-antd: https://github.com/jannikbuschke/formik-antd/blob/master/src/input/index.tsx
import { Input as BaseInput } from "antd";
import { InputProps as BaseInputProps, SearchProps as BaseSearchProps } from "antd/lib/input";
import { FieldProps } from "formik";
import { Field } from "formik-antd";
import * as React from "react";
import Search from "antd/lib/input/Search";

interface FormikFieldProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate?: (value: any) => undefined | string | Promise<any>;
  fast?: boolean;
}

type InputProps = FormikFieldProps & BaseInputProps;

interface InputType
  extends React.ForwardRefExoticComponent<
    FormikFieldProps & BaseInputProps & React.RefAttributes<BaseInput>
  > {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  Search: React.ForwardRefExoticComponent<FormikFieldProps & BaseSearchProps & React.RefAttributes<Search>>;
}

// eslint-disable-next-line react/display-name
const Input = React.forwardRef((
  { name, validate, fast, onChange: $onChange, onBlur: $onBlur, ...restProps }: InputProps,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  ref: React.Ref<Search>,
) => (
  <Field name={name} validate={validate} fast={fast}>
    {({ field: { value, onChange, onBlur } }: FieldProps) => (
      <BaseInput
        ref={ref}
        name={name}
        value={value}
        onChange={(event) => {
          onChange(event);
          $onChange && $onChange(event);
        }}
        onBlur={(event) => {
          onBlur(event);
          $onBlur && $onBlur(event);
        }}
        {...restProps}
      />
    )}
  </Field>
));

const TypedInput = (Input as unknown) as InputType;
type SearchProps = FormikFieldProps & BaseSearchProps;

// eslint-disable-next-line react/display-name
TypedInput.Search = React.forwardRef(
  (
    { name, validate, fast, onChange: $onChange, onBlur: $onBlur, ...restProps }: SearchProps,
    ref: React.Ref<BaseInput>,
  ) => (
    <Field name={name} validate={validate} fast={fast}>
      {({ field: { value, onChange, onBlur } }: FieldProps) => (
        <BaseInput.Search
          ref={ref}
          name={name}
          value={value}
          onChange={(event) => {
            onChange(event);
            $onChange && $onChange(event);
          }}
          onBlur={(event) => {
            onBlur(event);
            $onBlur && $onBlur(event);
          }}
          {...restProps}
        />
      )}
    </Field>
  ),
);

export default TypedInput.Search;
