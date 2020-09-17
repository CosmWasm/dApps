import { Stack } from "@cosmicdapp/design";
import styled from "styled-components";

export const MainStack = styled(Stack)`
  & > * {
    --gap: var(--s7);
  }

  h1 {
    margin: 0;
  }
`;

export const FormStack = styled(Stack)`
  & > * {
    --gap: var(--s7);
  }

  .ant-form-item {
    margin-bottom: 0;
  }
`;

export const FormFieldsStack = styled(Stack)`
  & > * {
    --gap: var(--s2);
  }
`;

export const Amount = styled.div`
  display: flex;
  align-items: baseline;

  span {
    margin-left: var(--s1);
    font-family: var(--ff-iceland);
    font-size: var(--s1);
  }
`;
