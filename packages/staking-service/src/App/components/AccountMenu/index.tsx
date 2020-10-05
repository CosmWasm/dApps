import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { pathValidator } from "../../paths";
import avatarIcon from "./assets/avatar.svg";
import copyIcon from "./assets/copy.svg";
import closeMenuButton from "./assets/cross.svg";
import openMenuButton from "./assets/hamburger.svg";
import {
  AddressCopy,
  AddressCopyBox,
  AddressText,
  AvatarName,
  CloseAccountStack,
  CloseMenuButton,
  LinksStack,
  LinkText,
  MenuCenter,
  MenuStack,
  NameText,
  OpenMenuButton,
} from "./style";

export interface AccountMenuProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  readonly name?: string;
}

export function AccountMenu({ name, ...props }: AccountMenuProps): JSX.Element {
  const history = useHistory();
  function goToHelp() {
    //TODO: set path to help
    history.push(pathValidator);
  }
  function goToLogout() {
    //TODO: set path to logout
    history.push(pathValidator);
  }

  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  const accountName = name ? `${name}'s` : "Your";

  return (
    <>
      <OpenMenuButton src={openMenuButton} alt="Open account menu" onClick={openMenu} {...props} />
      {open && (
        <MenuCenter {...props}>
          <MenuStack>
            <CloseAccountStack>
              <CloseMenuButton src={closeMenuButton} alt="Close account menu" onClick={closeMenu} />
              <AvatarName>
                <img src={avatarIcon} alt="Avatar" />
                <NameText>{accountName} account</NameText>
              </AvatarName>
              <AddressCopyBox>
                <AddressText>coraladdress234jl2k34ljk234</AddressText>
                <AddressCopy src={copyIcon} alt="Copy address icon" />
              </AddressCopyBox>
            </CloseAccountStack>
            <LinksStack>
              <div onClick={goToHelp}>
                <LinkText>Help</LinkText>
              </div>
              <div onClick={goToLogout}>
                <LinkText>Logout</LinkText>
              </div>
            </LinksStack>
          </MenuStack>
        </MenuCenter>
      )}
    </>
  );
}
