import { Typography } from "antd";
import styled from "styled-components";
import { Stack } from "../../layout/Stack";

const { Text } = Typography;

const MainStack = styled(Stack)`
  & > * {
    --gap: var(--s3);
  }
`;

const ResultText = styled(Text)`
  font-size: var(--s-1);

  &[data-result="success"] {
    color: var(--color-green);
  }

  &[data-result="failure"] {
    color: var(--color-red);
  }
`;

export { MainStack, ResultText };
