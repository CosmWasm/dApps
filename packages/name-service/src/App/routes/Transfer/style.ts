import { Stack } from "@cosmicdapp/design";
import styled from "styled-components";

export const MainStack = styled(Stack)`
  h1 {
    margin: 0;
  }

  span {
    font-size: var(--s-1);
    overflow-wrap: anywhere;
  }
`;

export const BackTransferStack = styled(Stack)`
  & > * {
    --gap: var(--s4);
  }
`;

export const TransferStack = styled(Stack)`
  & > * {
    --gap: var(--s3);
  }

  .ant-form {
    margin-top: var(--gap);
  }
`;
