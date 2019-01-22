import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import FactoryPage from "./containers/FactoryPage";
import FactoriesMain from "./containers/FactoriesMain";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={FactoriesMain} />
        <Route path="/date/:factoryId" exact component={FactoryPage} />
      </Switch>
    );
  }
}

export default withRouter(App);
