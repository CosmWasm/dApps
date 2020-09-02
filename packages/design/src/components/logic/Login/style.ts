import { Typography } from "antd";
import styled from "styled-components";
import { Stack } from "../../layout/Stack";

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
