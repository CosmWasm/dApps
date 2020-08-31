import { Stack } from "@cosmicdapp/design";
import styled from "styled-components";

export const AccountStack = styled(Stack)`
  & > * {
    --gap: var(--s0);
  }

  h3 {
    margin: 0;
  }

  span {
    display: block;
    font-size: var(--s-1);
  }

  h3 + span {
    text-decoration: underline;
  }

  span,
  button {
    overflow-wrap: anywhere;
  }

  button {
    height: 100%;
    white-space: normal;
    font-size: var(--s0);
  }

  button span {
    font-size: var(--s0);
  }
`;
