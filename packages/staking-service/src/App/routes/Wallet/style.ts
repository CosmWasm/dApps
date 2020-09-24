import { Center, Stack } from "@cosmicdapp/design";
import styled from "styled-components";

export const MainStack = styled(Stack)`
  & > * {
    --gap: var(--s5);
  }
`;

export const TitleNavStack = styled(Stack)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }
`;

export const NavCenter = styled(Center)`
  --max-width: none;
`;

export const ButtonStack = styled(Stack)`
  & > * {
    --gap: var(--s0);
  }
`;
