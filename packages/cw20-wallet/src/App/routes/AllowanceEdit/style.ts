import { Stack } from "@cosmicdapp/design";
import styled from "styled-components";

export const MainStack = styled(Stack)`
  & > * {
    --gap: var(--s3);
  }

  h1 {
    margin: 0;
  }
`;

export const Amount = styled.div`
  display: flex;
  justify-content: space-between;
`;
