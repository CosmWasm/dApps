import { Stack } from "@cosmicdapp/design";
import styled from "styled-components";

export const TokenStack = styled(Stack)`
  & > * {
    --gap: var(--s0);
  }
`;

export const TokenItem = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  & span.ant-typography + span.ant-typography {
    font-family: var(--ff-montserrat);
    font-size: var(--s-1);
    font-weight: bolder;
  }
`;
