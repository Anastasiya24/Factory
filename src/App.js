import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./logo.png";
import Currency from "./components/Currency";
import Quality from "./components/Quality";
import MainPage from "./components/MainPage";
import Article from "./components/Article";
import "./App.css";

class App extends Component {
  state = {
    initialSum: null,
    finalSum: null,
    finallyCurrency: null,
    initialCurrency: null
  };

  componentDidMount() {
    fetch("https://currency-convert.azurewebsites.net/get-currency").then(result => {
      result.json().then(data => {
        this.setState({
          initialSum: data.initialSum,
          finalSum: data.finalSum,
          finallyCurrency: data.finallyCurrency,
          initialCurrency: data.initialCurrency
        });
      });
    });
  }

  render() {
    let { initialSum, initialCurrency, finalSum, finallyCurrency } = this.state;
    return (
      <div className="main">
        <AppBar position="static" color="default">
          <Toolbar>
            <img
              src={Logo}
              style={{ width: "150px", cursor: "pointer" }}
              alt="Mogotex"
              onClick={() => this.props.history.push("/")}
            />
          </Toolbar>
        </AppBar>
        <Currency 
          initialSum={initialSum} 
          initialCurrency={initialCurrency}
          finalSum={finalSum}
          finallyCurrency={finallyCurrency}
        />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/quality" exact component={Quality} />
          <Route path="/quality/article/:articleId" component={Article} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
