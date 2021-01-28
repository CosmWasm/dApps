import { Center, Stack } from "@cosmicdapp/design";
import { Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const OpenMenuButton = styled.img`
  cursor: pointer;
  width: 2.625rem;
`;

export const CloseMenuButton = styled.img`
  cursor: pointer;
  width: 1.75rem;
`;

export const MenuCenter = styled(Center)`
  box-sizing: border-box;
  position: absolute;
  z-index: 1;

  min-width: var(--max-width);
  padding: var(--s0);
  background-color: var(--color-blue);
`;

export const MenuStack = styled(Stack)`
  width: 100%;
  color: var(--color-gray-light);

  & > * {
    --gap: var(--s4);
  }
`;

export const CloseAccountStack = styled(Stack)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  & > * {
    --gap: var(--s0);
  }

  & > img {
    align-self: flex-end;
  }
`;

export const AvatarName = styled.div`
  display: flex;
`;

export const NameText = styled(Text)`
  margin-left: var(--s-1);
  font-size: var(--s2);
  color: inherit;
`;

export const AddressCopyBox = styled.div`
  width: 100%;
  padding: var(--s-4) 0;
  border-radius: 2px;
  background-color: var(--color-gray-light);

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const AddressText = styled(Text)`
  font-size: var(--s-2);
`;

export const AddressCopy = styled.img`
  cursor: pointer;
`;

export const LinksStack = styled(Stack)`
  & > * {
    --gap: var(--s-3);
  }
`;

export const LinkText = styled(Text)`
  cursor: pointer;

  font-family: var(--ff-iceland);
  font-size: var(--s5);

  color: inherit;
`;
