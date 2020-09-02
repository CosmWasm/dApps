import { Stack } from "@cosmicdapp/design";
import styled from "styled-components";

const MainStack = styled(Stack)`
  h1 {
    margin: 0;
    text-transform: capitalize;
  }

  span {
    font-size: var(--s-1);
    overflow-wrap: anywhere;
  }
`;

const BackSearchResultStack = styled(Stack)`
  & > * {
    --gap: var(--s4);
  }
`;

const SearchStack = styled(Stack)`
  & > * {
    --gap: var(--s2);
  }

  .ant-form {
    margin-top: var(--gap);
  }
`;

export { MainStack, BackSearchResultStack, SearchStack };
