import { GlobalStyle } from "@cosmicdapp/design";
import { ContractsProvider, ErrorProvider, ProtectedSwitch, SdkProvider } from "@cosmicdapp/logic";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { config } from "../config";
import {
  pathDetail,
  pathLogin,
  pathOperationResult,
  pathDelegate,
  pathUndelegate,
  pathValidator,
  pathValidators,
  pathWallet,
} from "./paths";
import { Login } from "./routes/Login";
import { OperationResult } from "./routes/OperationResult";
import { Delegate } from "./routes/Delegate";
import { Undelegate } from "./routes/Undelegate";
import { ValidatorDetail } from "./routes/ValidatorDetail";
import { ValidatorHome } from "./routes/ValidatorHome";
import { Validators } from "./routes/Validators";
import { Wallet } from "./routes/Wallet";

export function App(): JSX.Element {
  return (
    <ErrorProvider>
      <SdkProvider config={config}>
        <ContractsProvider>
          <GlobalStyle />
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path={pathLogin} component={Login} />
              <ProtectedSwitch authPath={pathLogin}>
                <Route exact path={pathValidators} component={Validators} />
                <Route exact path={`${pathValidator}/:validatorAddress`} component={ValidatorHome} />
                <Route
                  exact
                  path={`${pathValidator}/:validatorAddress${pathDetail}`}
                  component={ValidatorDetail}
                />
                <Route exact path={`${pathWallet}/:validatorAddress`} component={Wallet} />
                <Route exact path={`${pathDelegate}/:validatorAddress`} component={Delegate} />
                <Route exact path={`${pathUndelegate}/:validatorAddress`} component={Undelegate} />
                <Route exact path={pathOperationResult} component={OperationResult} />
              </ProtectedSwitch>
            </Switch>
          </Router>
        </ContractsProvider>
      </SdkProvider>
    </ErrorProvider>
  );
}
