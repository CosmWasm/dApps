import { Stack } from "@cosmicdapp/design";
import { Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const MainStack = styled(Stack)`
  & > * {
    --gap: var(--s9);
  }
`;

export const WelcomeStack = styled(Stack)`
  & > * {
    --gap: var(--s3);
  }
`;

export const LightText = styled(Text)`
  display: block;
  font-weight: lighter;
`;
