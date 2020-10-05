import { Stack } from "@cosmicdapp/design";
import styled from "styled-components";

export const MainStack = styled(Stack)`
  width: 100%;

  & > * {
    --gap: var(--s5);
  }
`;
