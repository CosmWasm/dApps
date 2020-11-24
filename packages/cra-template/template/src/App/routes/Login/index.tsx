import { Login as LoginDesign } from "@cosmicdapp/design";
import React from "react";
import { config } from "../../../config";
import { pathHome } from "../../paths";
import cosmWasmLogo from "./assets/cosmWasmLogo.svg";

export function Login(): JSX.Element {
  return (
    <LoginDesign pathAfterLogin={pathHome} appName="<app-name>" appLogo={cosmWasmLogo} config={config} />
  );
}
