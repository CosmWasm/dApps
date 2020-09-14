import { GlobalStyle } from "@cosmicdapp/design";
import { AccountProvider, BurnerWalletProvider, ErrorProvider, ProtectedSwitch } from "@cosmicdapp/logic";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { config } from "../config";
import {
  pathAllowances,
  pathLogin,
  pathOperationResult,
  pathTokenDetail,
  pathTokens,
  pathTokensAdd,
  pathTokenSend,
} from "./paths";
import Allowances from "./routes/Allowances";
import Login from "./routes/Login";
import OperationResult from "./routes/OperationResult";
import TokenDetail from "./routes/TokenDetail";
import Tokens from "./routes/Tokens";
import TokensAdd from "./routes/TokensAdd";
import TokenSend from "./routes/TokenSend";
import { ContractsProvider } from "./service/contracts";

function App(): JSX.Element {
  return (
    <ErrorProvider>
      <BurnerWalletProvider config={config}>
        <AccountProvider>
          <ContractsProvider>
            <GlobalStyle />
            <Router basename={process.env.PUBLIC_URL}>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path={pathLogin} component={Login} />
                <ProtectedSwitch authPath={pathLogin}>
                  <Route exact path={pathTokens} component={Tokens} />
                  <Route exact path={`${pathTokensAdd}/:codeId?`} component={TokensAdd} />
                  <Route
                    exact
                    path={`${pathTokenDetail}/:contractAddress/:allowingAddress?`}
                    component={TokenDetail}
                  />
                  <Route
                    exact
                    path={`${pathTokenSend}/:contractAddress/:allowingAddress?`}
                    component={TokenSend}
                  />
                  <Route exact path={`${pathAllowances}/:contractAddress`} component={Allowances} />
                  <Route exact path={pathOperationResult} component={OperationResult} />
                </ProtectedSwitch>
              </Switch>
            </Router>
          </ContractsProvider>
        </AccountProvider>
      </BurnerWalletProvider>
    </ErrorProvider>
  );
}

export default App;
