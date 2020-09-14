import styled from "styled-components";
import { Stack } from "./component";

export const StyledStack = styled(Stack)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: var(--gap, var(--s0));
  }
`;
