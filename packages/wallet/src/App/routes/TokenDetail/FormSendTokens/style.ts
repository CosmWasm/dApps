import { Stack } from "@cosmicdapp/design";
import styled from "styled-components";
import { FormItem } from "formik-antd";
import { Typography } from "antd";

const { Text } = Typography;

export const FormStack = styled(Stack)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`;

export const FormField = styled.div`
  display: flex;
  align-items: baseline;

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
  }
`;

export const FormText = styled(Text)`
  && {
    width: 20%;
    font-family: var(--ff-iceland);
    font-size: var(--s2);
    text-align: left;
  }
`;

export const FormItemAmount = styled(FormItem)`
  width: 60%;
`;

export const FormItemAddress = styled(FormItem)`
  width: 80%;
`;

export const FormTextToken = styled(FormText)`
  &&& {
    text-align: right;
  }
`;
