import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Logo from "./logo.png";
import Quality from "./components/Quality";
import Article from "./components/Article";
import FactoriesMain from "./containers/FactoriesMain";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={FactoriesMain} />
        <Route path="/date/:factoryId" exact component={Quality} />
        <Route path="/date/article/:articleId" component={Article} />
      </Switch>
    );
  }
}

export default withRouter(App);
