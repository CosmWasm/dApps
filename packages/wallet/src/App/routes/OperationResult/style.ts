import { Stack } from "@cosmicdapp/design";
import { Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const MainStack = styled(Stack)`
  & > * {
    --gap: var(--s3);
  }
`;

export const ResultText = styled(Text)`
  font-size: var(--s-1);

  &[data-result="success"] {
    color: green;
  }

  &[data-result="fail"] {
    color: red;
  }
`;
