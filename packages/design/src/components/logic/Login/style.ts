import { Typography } from "antd";
import styled from "styled-components";
import { Stack } from "../../layout/Stack";

const { Text } = Typography;

export const StackLogoText = styled(Stack)`
  & > * {
    --gap: var(--s5);
  }
`;

export const Logo = styled.img`
  height: 4rem;
`;

export const StackTextButtons = styled(Stack)`
  & > * {
    --gap: var(--s3);
  }
`;

export const StackText = styled(Typography)`
  & > * {
    --gap: var(--s-1);
  }

  .ant-typography {
    margin: 0;

    & + .ant-typography {
      margin-top: var(--gap);
    }
  }
`;

export const LightText = styled(Text)`
  display: block;
  font-weight: lighter;
  color: #7c95ff;
`;

export const StackButtonsError = styled(Stack)`
  & > * {
    --gap: var(--s1);
  }
`;

export const StackButtons = styled(Stack)`
  & > * {
    --gap: var(--s-1);
  }
`;

export const ErrorText = styled(Text)`
  && {
    text-align: left;
    color: var(--color-red);
  }
`;
