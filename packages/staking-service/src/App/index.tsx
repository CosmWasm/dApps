import { GlobalStyle } from "@cosmicdapp/design";
import { ContractsProvider, ErrorProvider, ProtectedSwitch, SdkProvider } from "@cosmicdapp/logic";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { config } from "../config";
import {
  pathClaims,
  pathDetail,
  pathLogin,
  pathOperationResult,
  pathPurchase,
  pathValidator,
  pathValidators,
  pathWallet,
  pathWithdraw,
} from "./paths";
import { Claims } from "./routes/Claims";
import { Login } from "./routes/Login";
import { OperationResult } from "./routes/OperationResult";
import { Purchase } from "./routes/Purchase";
import { ValidatorDetail } from "./routes/ValidatorDetail";
import { ValidatorHome } from "./routes/ValidatorHome";
import { Validators } from "./routes/Validators";
import { Wallet } from "./routes/Wallet";
import { Withdraw } from "./routes/Withdraw";

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
                <Route exact path={`${pathPurchase}/:validatorAddress`} component={Purchase} />
                <Route exact path={`${pathWithdraw}/:validatorAddress`} component={Withdraw} />
                <Route exact path={`${pathClaims}/:validatorAddress`} component={Claims} />
                <Route exact path={pathOperationResult} component={OperationResult} />
              </ProtectedSwitch>
            </Switch>
          </Router>
        </ContractsProvider>
      </SdkProvider>
    </ErrorProvider>
  );
}
