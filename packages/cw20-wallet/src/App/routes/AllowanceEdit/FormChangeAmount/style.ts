import { Stack } from "@cosmicdapp/design";
import styled from "styled-components";

export const FormStack = styled(Stack)`
  & > * {
    --gap: var(--s8);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s8);
  }
`;
