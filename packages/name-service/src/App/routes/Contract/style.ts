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

export const BackSearchResultStack = styled(Stack)`
  & > * {
    --gap: var(--s4);
  }
`;

export const SearchStack = styled(Stack)`
  & > * {
    --gap: var(--s2);
  }

  .ant-form {
    margin-top: var(--gap);
  }
`;
