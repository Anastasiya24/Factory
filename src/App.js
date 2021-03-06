import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./logo.png";
import Quality from "./components/Quality";
import MainPage from "./components/MainPage";
import Article from "./components/Article";
import "./App.css";
import Test from './components/Test';

class App extends Component {
  render() {
    return (
      <div className="main">
        <AppBar position="static" color="default">
          <Toolbar>
            <img
              src={Logo}
              style={{ width: "150px", cursor: "pointer" }}
              alt="Mogotex"
              onClick={() => this.props.history.push("/test")}
            />
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/test" exact component={Test} />
          <Route path="/quality" exact component={Quality} />
          <Route path="/quality/article/:articleId" component={Article} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
