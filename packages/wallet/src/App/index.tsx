import { AccountProvider, BurnerWalletProvider, ErrorProvider } from "@cosmicdapp/logic";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { config } from "../config";
import { pathLogin, pathSend, pathTokens } from "./paths";
import Login from "./routes/Login";
import TokenDetail from "./routes/TokenDetail";
import TokenList from "./routes/TokenList";
import TokenSend from "./routes/TokenSend";

function App(): JSX.Element {
  return (
    <ErrorProvider>
      <BurnerWalletProvider config={config}>
        <AccountProvider>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path={pathLogin} component={Login} />
              <Route exact path={pathTokens} component={TokenList} />
              <Route exact path={`${pathTokens}/:tokenName`} component={TokenDetail} />
              <Route exact path={`${pathTokens}/:tokenName${pathSend}`} component={TokenSend} />
            </Switch>
          </Router>
        </AccountProvider>
      </BurnerWalletProvider>
    </ErrorProvider>
  );
}

export default App;
