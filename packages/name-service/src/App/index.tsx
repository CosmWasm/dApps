import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { config } from "../config";
import { AccountProvider, BurnerWalletProvider, ErrorProvider } from "../service";
import { pathContract, pathHome, pathLogin, pathOperationResult, pathTransfer } from "./paths";
import Contract from "./routes/Contract";
import Home from "./routes/Home";
import Login from "./routes/Login";
import OperationResult from "./routes/OperationResult";
import Transfer from "./routes/Transfer";

function App(): JSX.Element {
  return (
    <ErrorProvider>
      <BurnerWalletProvider config={config}>
        <AccountProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path={pathLogin} component={Login} />
              <Route exact path={pathHome} component={Home} />
              <Route exact path={`${pathContract}/:label/:address`} component={Contract} />
              <Route exact path={pathTransfer} component={Transfer} />
              <Route exact path={pathOperationResult} component={OperationResult} />
            </Switch>
          </Router>
        </AccountProvider>
      </BurnerWalletProvider>
    </ErrorProvider>
  );
}

export default App;
