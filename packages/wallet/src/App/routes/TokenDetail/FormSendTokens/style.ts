import { Stack } from "@cosmicdapp/design";
import styled from "styled-components";

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

  & > * + * {
    margin-left: var(--s0);
  }

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
  }
`;
