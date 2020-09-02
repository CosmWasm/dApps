import { createGlobalStyle } from "styled-components";

export const GlobalColors = createGlobalStyle`
  :root {
    --color-primary: #2f80ed;
    --button-color: #1890ff;
    --text-color: var(--color-primary);
    --heading-color: var(--color-primary);
    --form-error: #eb5757;
  }
`;
