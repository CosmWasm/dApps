import { Stack } from "@cosmicdapp/design";
import { Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const ResultStack = styled(Stack)`
  & > * {
    --gap: var(--s-3);
  }
`;

export const BlackText = styled(Text)`
  color: var(--color-black);
`;

export const LightText = styled(Text)`
  font-weight: lighter;
`;
