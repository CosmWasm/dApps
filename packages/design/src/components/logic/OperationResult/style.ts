import { Typography } from "antd";
import styled from "styled-components";
import { Stack } from "../../layout/Stack";

const { Text } = Typography;

export const MainStack = styled(Stack)`
  & > * {
    --gap: var(--s3);
  }
`;

export const ResultText = styled(Text)`
  font-size: var(--s-1);

  &[data-result="success"] {
    color: var(--color-green);
  }

  &[data-result="failure"] {
    color: var(--color-red);
  }
`;
