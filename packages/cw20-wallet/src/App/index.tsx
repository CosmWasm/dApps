import { GlobalStyle } from "@cosmicdapp/design";
import { ContractsProvider, ErrorProvider, ProtectedSwitch, SdkProvider } from "@cosmicdapp/logic";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { config } from "../config";
import {
  pathAllowanceAdd,
  pathAllowanceEdit,
  pathAllowances,
  pathLogin,
  pathOperationResult,
  pathTokenDetail,
  pathTokens,
  pathTokensAdd,
  pathTokenSend,
} from "./paths";
import AllowanceAdd from "./routes/AllowanceAdd";
import AllowanceEdit from "./routes/AllowanceEdit";
import Allowances from "./routes/Allowances";
import Login from "./routes/Login";
import OperationResult from "./routes/OperationResult";
import TokenDetail from "./routes/TokenDetail";
import Tokens from "./routes/Tokens";
import TokensAdd from "./routes/TokensAdd";
import TokenSend from "./routes/TokenSend";

function App(): JSX.Element {
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
                <Route
                  exact
                  path={`${pathAllowances}/:contractAddress${pathAllowanceAdd}`}
                  component={AllowanceAdd}
                />
                <Route
                  exact
                  path={`${pathAllowances}/:contractAddress${pathAllowanceEdit}/:spenderAddress`}
                  component={AllowanceEdit}
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

export default App;
