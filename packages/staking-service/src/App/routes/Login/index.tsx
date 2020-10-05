import { Login as LoginDesign } from "@cosmicdapp/design";
import React from "react";
import { pathValidators } from "../../paths";
import cosmWasmLogo from "./assets/cosmWasmLogo.svg";

export function Login(): JSX.Element {
  return <LoginDesign pathAfterLogin={pathValidators} appName="Staking service" appLogo={cosmWasmLogo} />;
}
