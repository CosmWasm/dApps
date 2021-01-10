import { createGlobalStyle } from "styled-components";

export const GlobalFonts = createGlobalStyle`
  :root {
    --ff-montserrat: Montserrat, sans-serif;
    --ff-iceland: Iceland, serif;

    --ff-text: var(--ff-montserrat);
    --ff-heading: var(--ff-iceland);
    
    font-family: var(--ff-text);
    font-size: var(--s0);
  }

  span.ant-typography,
  div.ant-typography,
  p.ant-typography,
  h1.ant-typography,
  h2.ant-typography,
  h3.ant-typography {
    overflow-wrap: anywhere;
    line-height: var(--ratio);
  }

  span.ant-typography,
  div.ant-typography,
  p.ant-typography {
    font-family: var(--ff-text);
    font-size: var(--s0);
    color: #7c95ff;
  }
  
  h1.ant-typography,
  h2.ant-typography,
  h3.ant-typography {
    font-family: var(--ff-heading);
    color: transparent;
    background: linear-gradient(
      90deg,
      rgba(113, 100, 246, 1) 0%,
      rgba(125, 97, 243, 1) 12%,
      rgba(174, 117, 231, 1) 33%,
      rgba(90, 67, 245, 1) 49%,
      rgba(66, 160, 255, 1) 91%
    );
    background-clip: text;
    -webkit-background-clip: text;
  }

  h1.ant-typography {
    font-size: var(--s5);
  }

  h2.ant-typography {
    font-size: var(--s4);
  }

  h3.ant-typography {
    font-size: var(--s3);
  }
`;
