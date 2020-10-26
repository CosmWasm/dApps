import { Stack } from "@cosmicdapp/design";
import styled from "styled-components";

export const ButtonStack = styled(Stack)`
  & > * {
    --gap: var(--s2);
  }
`;
