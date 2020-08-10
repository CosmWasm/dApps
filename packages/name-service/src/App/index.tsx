import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { config } from "../config";
import { AccountProvider, BurnerWalletProvider } from "../service";
import { pathHome, pathLogin, pathLuxury, pathOperationResult, pathTransfer } from "./paths";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Luxury from "./routes/Luxury";
import OperationResult from "./routes/OperationResult";
import Transfer from "./routes/Transfer";

function App(): JSX.Element {
  return (
    <BurnerWalletProvider config={config}>
      <AccountProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path={pathLogin} component={Login} />
            <Route exact path={pathHome} component={Home} />
            <Route exact path={`${pathLuxury}/:address`} component={Luxury} />
            <Route exact path={pathTransfer} component={Transfer} />
            <Route exact path={pathOperationResult} component={OperationResult} />
          </Switch>
        </Router>
      </AccountProvider>
    </BurnerWalletProvider>
  );
}

export default App;
