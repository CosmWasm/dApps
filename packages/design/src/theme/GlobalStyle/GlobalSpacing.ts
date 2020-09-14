import { createGlobalStyle } from "styled-components";

export const GlobalSpacing = createGlobalStyle`
  :root {
    --ratio: 1.25;

    --s-6: calc(var(--s-5) / var(--ratio));
    --s-5: calc(var(--s-4) / var(--ratio));
    --s-4: calc(var(--s-3) / var(--ratio));
    --s-3: calc(var(--s-2) / var(--ratio));
    --s-2: calc(var(--s-1) / var(--ratio));
    --s-1: calc(var(--s0) / var(--ratio));
    --s0: 1rem;
    --s1: calc(var(--s0) * var(--ratio));
    --s2: calc(var(--s1) * var(--ratio));
    --s3: calc(var(--s2) * var(--ratio));
    --s4: calc(var(--s3) * var(--ratio));
    --s5: calc(var(--s4) * var(--ratio));
    --s6: calc(var(--s5) * var(--ratio));
    --s7: calc(var(--s6) * var(--ratio));
    --s8: calc(var(--s7) * var(--ratio));
    --s9: calc(var(--s8) * var(--ratio));
  }
`;
