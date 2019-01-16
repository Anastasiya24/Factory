import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { dropFactory } from "../actions/factoriesActions";
import Production from "./Production";
import OrderBlock from "./OrderBlock";
import ActiveButton from "./ActiveButton";

const productList = [
  { articte: "A1", material: 1000, plan: 20, fact: 12 },
  { articte: "A2", material: 2000, plan: 40, fact: 38 },
  { articte: "A3", material: 3000, plan: 50, fact: 43 },
  { articte: "A4", material: 4000, plan: 80, fact: 55 }
];

class FactoryPage extends Component {
  render() {
    return (
      <div>
        <ActiveButton
          text="Ago"
          onButtonClick={() => this.props.history.push("/")}
        />
        <Production
          productList={productList}
          dropFactory={this.props.dropFactory}
          factoryId={this.props.match.params.factoryId}
        />
        <OrderBlock factoryId={this.props.match.params.factoryId} />
        <ActiveButton
          text="Drop the factory"
          onButtonClick={() => {
            this.props.dropFactory(this.props.match.params.factoryId);
            this.props.history.push("/");
          }}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    factoriesList: state.factories.factoriesList
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { dropFactory }
  )(FactoryPage)
);
