import { AccountProvider, BurnerWalletProvider, ErrorProvider } from "@cosmicdapp/logic";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { config } from "../config";
import Login from "./routes/Login";

function App(): JSX.Element {
  return (
    <ErrorProvider>
      <BurnerWalletProvider config={config}>
        <AccountProvider>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/" component={Login} />
            </Switch>
          </Router>
        </AccountProvider>
      </BurnerWalletProvider>
    </ErrorProvider>
  );
}

export default App;
