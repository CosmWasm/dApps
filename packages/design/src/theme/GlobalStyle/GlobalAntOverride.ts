import { createGlobalStyle } from "styled-components";

export const GlobalAntOverride = createGlobalStyle`
  .ant-btn:not(.ant-input-search-button) {
    width: var(--max-width);
    max-width: 100vw;
  }
  
  .ant-form div[role="alert"] li {
    color: var(--form-error);
    font-size: var(--s-1);
    text-align: left;
    margin: var(--s-1);
  
    &::before {
      content: "* ";
    }
  }
`;
