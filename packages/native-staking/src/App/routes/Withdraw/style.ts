import { Center, Stack } from "@cosmicdapp/design";
import { Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const MainStack = styled(Stack)`
  & > * {
    --gap: var(--s6);
  }
`;

export const HeaderTitleStack = styled(Stack)`
  & > * {
    --gap: var(--s0);
  }

  h1.ant-typography,
  h2.ant-typography {
    margin: 0;
    margin-top: var(--gap);
  }

  h1 {
    font-size: var(--s2);
    line-height: var(--s2);
  }

  h2 {
    font-size: var(--s5);
    line-height: var(--s5);
  }
`;

export const NavCenter = styled(Center)`
  --max-width: none;
`;

export const ButtonStack = styled(Stack)`
  & > * {
    --gap: var(--s0);
  }
`;

export const ConfirmStack = styled(Stack)`
  & > * {
    --gap: var(--s3);
  }
`;

export const ConfirmText = styled(Text)`
  font-size: var(--s-1);
  color: var(--color-blue);
`;
