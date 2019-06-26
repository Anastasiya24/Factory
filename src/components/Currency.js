import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

class Currency extends Component {
  render() {
    let { initialSum, initialCurrency, finalSum, finallyCurrency } = this.props;
    return (
      <Paper style={{ textAlign: "center" }}>
        <h1>Курс на сегодня</h1>
        <h2>
          {initialSum} {initialCurrency} = {finalSum} {finallyCurrency}
        </h2>
      </Paper>
    );
  }
}

export default Currency;
