import { GlobalStyle } from "@cosmicdapp/design";
import { ContractsProvider, ErrorProvider, ProtectedSwitch, SdkProvider } from "@cosmicdapp/logic";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { config } from "../config";
import {
  pathDelegate,
  pathLogin,
  pathOperationResult,
  pathRewards,
  pathUndelegate,
  pathValidators,
} from "./paths";
import { Delegate } from "./routes/Delegate";
import { Login } from "./routes/Login";
import { OperationResult } from "./routes/OperationResult";
import { Rewards } from "./routes/Rewards";
import { Undelegate } from "./routes/Undelegate";
import { Validator } from "./routes/Validator";
import { Validators } from "./routes/Validators";

const paramValidatorAddress = "/:validatorAddress";

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
                <Route exact path={`${pathValidators}${paramValidatorAddress}`} component={Validator} />
                <Route
                  exact
                  path={`${pathValidators}${paramValidatorAddress}${pathDelegate}`}
                  component={Delegate}
                />
                <Route
                  exact
                  path={`${pathValidators}${paramValidatorAddress}${pathUndelegate}`}
                  component={Undelegate}
                />
                <Route
                  exact
                  path={`${pathValidators}${paramValidatorAddress}${pathRewards}`}
                  component={Rewards}
                />
                <Route exact path={pathOperationResult} component={OperationResult} />
              </ProtectedSwitch>
            </Switch>
          </Router>
        </ContractsProvider>
      </SdkProvider>
    </ErrorProvider>
  );
}
