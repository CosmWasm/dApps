import { Spin } from "antd";
import styled from "styled-components";

export const StyledSpin = styled(Spin)`
  & > span + div {
    margin-top: var(--s2);
  }
`;
