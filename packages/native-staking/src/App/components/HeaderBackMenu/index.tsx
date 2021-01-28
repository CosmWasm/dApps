import { BackButton, BackButtonProps } from "@cosmicdapp/design";
import React from "react";
import backArrowIcon from "../../assets/backArrow.svg";
import { AccountMenu, AccountMenuProps } from "../AccountMenu";
import { Header } from "./style";

type HeaderBackMenu = Omit<BackButtonProps, "icon"> & AccountMenuProps;

export function HeaderBackMenu({ path, state, name, ...props }: HeaderBackMenu): JSX.Element {
  return (
    <Header {...props}>
      <BackButton icon={backArrowIcon} path={path} state={state} />
      <AccountMenu name={name} />
    </Header>
  );
}
