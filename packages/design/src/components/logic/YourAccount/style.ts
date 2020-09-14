import styled from "styled-components";
import { Stack } from "../../layout/Stack";

export const AccountStack = styled(Stack)`
  & > * {
    --gap: var(--s-2);
  }

  h3,
  div[role="separator"] {
    margin: 0;
  }

  span,
  button {
    overflow-wrap: anywhere;
  }

  span {
    display: block;
    font-size: var(--s-1);
  }

  span + span {
    font-weight: bold;
  }

  button,
  button span {
    font-size: var(--s0);
  }

  button {
    height: 100%;
    white-space: normal;
  }
`;
