import { Stack } from "@cosmicdapp/design";
import { Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

const MainStack = styled(Stack)`
  & > * {
    --gap: var(--s9);
  }
`;

const WelcomeStack = styled(Stack)`
  & > * {
    --gap: var(--s3);
  }
`;

const LightText = styled(Text)`
  display: block;
  font-weight: lighter;
`;

export { MainStack, WelcomeStack, LightText };
