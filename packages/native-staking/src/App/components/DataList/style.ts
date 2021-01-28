import { Stack } from "@cosmicdapp/design";
import { Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const ListStack = styled(Stack)`
  & > * {
    --gap: var(--s0);
  }

  div[role="separator"] {
    margin-bottom: 0;
  }
`;

export const DataRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const KeyText = styled(Text)`
  font-family: var(--ff-iceland);
  font-size: var(--s2);
  line-height: var(--s2);
`;

export const ValueText = styled(Text)`
  font-family: var(--ff-montserrat);
  font-weight: bolder;
  font-size: var(--s-1);
  line-height: var(--s-1);
`;
