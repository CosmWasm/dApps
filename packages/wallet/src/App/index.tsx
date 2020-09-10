import { GlobalStyle } from "@cosmicdapp/design";
import { AccountProvider, BurnerWalletProvider, ErrorProvider, ProtectedSwitch } from "@cosmicdapp/logic";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { config } from "../config";
import { pathLogin, pathOperationResult, pathTokens } from "./paths";
import { Login } from "./routes/Login";
import { OperationResult } from "./routes/OperationResult";
import { TokenDetail } from "./routes/TokenDetail";
import { Tokens } from "./routes/Tokens";

export function App(): JSX.Element {
  return (
    <ErrorProvider>
      <BurnerWalletProvider config={config}>
        <AccountProvider>
          <GlobalStyle />
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path={pathLogin} component={Login} />
              <ProtectedSwitch authPath={pathLogin}>
                <Route exact path={pathTokens} component={Tokens} />
                <Route exact path={`${pathTokens}/:tokenName`} component={TokenDetail} />
                <Route exact path={pathOperationResult} component={OperationResult} />
              </ProtectedSwitch>
            </Switch>
          </Router>
        </AccountProvider>
      </BurnerWalletProvider>
    </ErrorProvider>
  );
}
