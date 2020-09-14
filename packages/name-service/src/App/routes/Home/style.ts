import { Stack } from "@cosmicdapp/design";
import styled from "styled-components";

export const MainStack = styled(Stack)`
  h1 {
    margin: 0;
    text-transform: capitalize;
  }

  span {
    font-size: var(--s-1);
    overflow-wrap: anywhere;
  }
`;

export const ContractStack = styled(Stack)`
  & > * {
    --gap: var(--s4);
  }
`;
