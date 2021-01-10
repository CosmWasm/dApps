import { createGlobalStyle } from "styled-components";

export const Buttons = createGlobalStyle`
  :root {
    --border-width: 1px;
    --border-radius: 1.375rem;
  }
  
  // TODO: move to global
  body {
    background-image: radial-gradient(circle at 50% 50%, #1f1f1f, #1f2035, #1f2048), linear-gradient(to bottom, #171834, #171834);
  }

  .ant-btn-primary,
  .ant-btn-default {
    align-self: center;
    
    width: min(13.625rem, var(--max-width, 999rem));
    min-height: 2.75rem;
    height: auto;

    border-color: transparent;
    border-width: var(--border-width);
    border-radius: var(--border-radius);

    white-space: normal;

    &:hover {
      color: #f9b77a;
      border-color: transparent;
    }

    &:disabled,
    &:disabled:hover {
      color: #828282;
      background-color: #333333;
      border-color: #333333;
      
      &::after {
        display: none;
      }
    }

    & span {
      font-family: var(--ff-montserrat);
      font-size: var(--s-1);
    }
  }

  .ant-btn-primary,
  .ant-btn-primary:hover {
    position: relative;

    background-color: #1f1f1f;
    background-clip: padding-box;

    &::after {
      content: '';
      z-index: -1;
      position: absolute;
      top: 0; bottom: 0; left: 0; right: 0;

      margin: calc(-1 * var(--border-width));
      border-radius: inherit;

      background: linear-gradient(to bottom, #fcecb2, #ff8b89, #fc8adc, #7954ff, #70bcff);
    }
  }

  .ant-btn-primary:focus,
  .ant-btn-primary:focus:hover {
    background: linear-gradient(90deg, rgba(113,100,246,1) 0%, rgba(125,97,243,1) 12%, rgba(174,117,231,1) 33%, rgba(90,67,245,1) 49%, rgba(66,160,255,1) 91%);
    border: none;

    &::after {
      display: none;
    }
  }

  .ant-btn-default,
  .ant-btn-default:hover {
    background: linear-gradient(90deg, #453d75 0%, #2f2f46 75%);
    border: none;
  }

  .ant-btn-default,
  .ant-btn-default:focus {
    color: white;
  }

  .ant-btn-default:focus,
  .ant-btn-default:focus:hover {
    background: linear-gradient(90deg, rgba(140,136,182,1) 0%, rgba(135,126,173,1) 12%, rgba(96,80,113,1) 33%, rgba(72,59,164,1) 49%, rgba(27,85,144,1) 91%);
    border: none;
  }
  
  .ant-btn-default:focus:hover {
    color: #f9b77a;
  }

  .ant-btn-primary[data-size="large"] {
    width: 100%;
    min-height: var(--s6);
    height: auto;

    --border-radius: 1.25rem;
    border: var(--border-width);

    color: white;
    background: linear-gradient(180deg, rgba(36,36,61,1) 0%, rgba(52,48,117,1) 100%);

    white-space: normal;

    &:hover {
      color: #f9b77a;
    }

    &:focus {
      background: linear-gradient(90deg, rgba(140,136,182,1) 0%, rgba(135,126,173,1) 12%, rgba(96,80,113,1) 33%, rgba(72,59,164,1) 49%, rgba(27,85,144,1) 91%);
    }

    &:disabled,
    &:disabled:hover {
      color: #828282;
      background: none;
      background-color: #333333;
    }

    & span {
      font-family: var(--ff-iceland);
      font-size: var(--s2);
      color: inherit;
    }

    &::after {
      display: none;
    }
  }
`;
