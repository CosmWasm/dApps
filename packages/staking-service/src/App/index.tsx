import { GlobalStyle } from "@cosmicdapp/design";
import { AccountProvider, BurnerWalletProvider, ErrorProvider, ProtectedSwitch } from "@cosmicdapp/logic";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { config } from "../config";
import {
  pathClaims,
  pathDetails,
  pathHome,
  pathLogin,
  pathPurchase,
  pathWallet,
  pathWithdraw,
} from "./paths";
import { Claims } from "./routes/Claims";
import { Details } from "./routes/Details";
import { Home } from "./routes/Home";
import { Login } from "./routes/Login";
import { Purchase } from "./routes/Purchase";
import { Wallet } from "./routes/Wallet";
import { Withdraw } from "./routes/Withdraw";

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
                <Route exact path={pathHome} component={Home} />
                <Route exact path={pathDetails} component={Details} />
                <Route exact path={pathWallet} component={Wallet} />
                <Route exact path={pathPurchase} component={Purchase} />
                <Route exact path={pathWithdraw} component={Withdraw} />
                <Route exact path={pathClaims} component={Claims} />
              </ProtectedSwitch>
            </Switch>
          </Router>
        </AccountProvider>
      </BurnerWalletProvider>
    </ErrorProvider>
  );
}
