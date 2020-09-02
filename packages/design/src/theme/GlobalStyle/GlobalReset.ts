import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    min-height: 100vh;
    line-height: 1.5;
    text-rendering: optimizeSpeed;
  }
  
  body,
  h1,
  h2,
  p,
  ul[class],
  ol[class] {
    margin: 0;
  }
  
  ul[class],
  ol[class] {
    padding: 0;
    list-style: none;
  }
  
  button,
  input,
  select,
  textarea {
    font: inherit;
  }
  
  img {
    display: block;
    max-width: 100%;
  }
  
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01s !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01s !important;
      scroll-behavior: auto !important;
    }
  }
`;
