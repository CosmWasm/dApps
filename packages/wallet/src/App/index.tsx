import { AccountProvider, BurnerWalletProvider, ErrorProvider } from "@cosmicdapp/logic";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { config } from "../config";
import ProtectedSwitch from "./components/ProtectedSwitch";
import { pathLogin, pathOperationResult, pathTokens } from "./paths";
import Login from "./routes/Login";
import OperationResult from "./routes/OperationResult";
import TokenDetail from "./routes/TokenDetail";
import Tokens from "./routes/Tokens";

function App(): JSX.Element {
  return (
    <ErrorProvider>
      <BurnerWalletProvider config={config}>
        <AccountProvider>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path={pathLogin} component={Login} />
              <ProtectedSwitch>
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

export default App;
