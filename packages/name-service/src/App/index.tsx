import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { pathHome, pathLogin, pathLuxury, pathTestLoading } from "./paths";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Luxury from "./routes/Luxury";
import Loading from "./components/Loading";

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path={pathLogin} component={Login} />
        <Route exact path={pathHome} component={Home} />
        <Route exact path={pathLuxury} component={Luxury} />
        <Route exact path={pathTestLoading} component={Loading} />
      </Switch>
    </Router>
  );
}

export default App;
