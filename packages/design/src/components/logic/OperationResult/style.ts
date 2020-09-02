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
    color: green;
  }

  &[data-result="fail"] {
    color: red;
  }
`;

export { MainStack, ResultText };
