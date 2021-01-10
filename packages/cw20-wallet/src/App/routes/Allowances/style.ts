import { Stack } from "@cosmicdapp/design";
import styled from "styled-components";

export const MainStack = styled(Stack)`
  & > * {
    --gap: var(--s7);
  }

  h1 {
    margin: 0;
  }
`;

export const TitleAmountStack = styled(Stack)`
  & > * {
    --gap: var(--s2);
  }
`;

export const Amount = styled.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`;

export const AllowancesStack = styled(Stack)`
  & > * {
    --gap: var(--s0);
  }
`;

export const AllowanceItem = styled.div`
  max-width: var(--max-width);

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * + * {
    margin-left: var(--s1);
  }

  span.ant-typography {
    font-size: var(--s-1);
  }

  & > span.ant-typography {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const AllowanceAmountCopy = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: bolder;
    flex-grow: 1;
    flex-shrink: 0;
  }

  img {
    margin-left: var(--s-2);
    cursor: pointer;
    height: var(--s-1);
  }
`;
