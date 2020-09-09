import { Stack } from "@cosmicdapp/design";
import { Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

const ResultStack = styled(Stack)`
  & > * {
    --gap: var(--s-3);
  }
`;

const BlackText = styled(Text)`
  color: var(--color-black);
`;

const LightText = styled(Text)`
  font-weight: lighter;
`;

export { ResultStack, BlackText, LightText };
