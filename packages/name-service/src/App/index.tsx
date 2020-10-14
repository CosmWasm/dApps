import { GlobalStyle } from "@cosmicdapp/design";
import { AccountProvider, ErrorProvider, ProtectedSwitch, SdkProvider } from "@cosmicdapp/logic";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { config } from "../config";
import { pathContract, pathHome, pathLogin, pathOperationResult, pathTransfer } from "./paths";
import { Contract } from "./routes/Contract";
import { Home } from "./routes/Home";
import { Login } from "./routes/Login";
import { OperationResult } from "./routes/OperationResult";
import { Transfer } from "./routes/Transfer";

export function App(): JSX.Element {
  return (
    <ErrorProvider>
      <SdkProvider config={config}>
        <AccountProvider>
          <GlobalStyle />
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path={pathLogin} component={Login} />
              <ProtectedSwitch authPath={pathLogin}>
                <Route exact path={pathHome} component={Home} />
                <Route exact path={`${pathContract}/:label/:address/:name?`} component={Contract} />
                <Route
                  exact
                  path={`${pathTransfer}/:contractLabel/:contractAddress/:name`}
                  component={Transfer}
                />
                <Route exact path={pathOperationResult} component={OperationResult} />
              </ProtectedSwitch>
            </Switch>
          </Router>
        </AccountProvider>
      </SdkProvider>
    </ErrorProvider>
  );
}
