import { Login as LoginDesign } from "@cosmicdapp/design";
import React from "react";
import { config } from "../../../config";
import { pathTokens } from "../../paths";
import cosmWasmLogo from "./assets/cosmWasmLogo.svg";

function Login(): JSX.Element {
  return (
    <LoginDesign pathAfterLogin={pathTokens} appName="CW20 Wallet" appLogo={cosmWasmLogo} config={config} />
  );
}

export default Login;
