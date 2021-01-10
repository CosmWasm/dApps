import { Spin } from "antd";
import styled from "styled-components";

export const StyledSpin = styled(Spin)`
  & > span + div {
    margin-top: var(--s2);
    font-family: var(--ff-text);
    font-size: var(--s0);
    color: #7c95ff;
  }
`;
