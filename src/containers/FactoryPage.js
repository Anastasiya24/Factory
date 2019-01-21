import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { dropFactory } from "../actions/factoriesActions";
import { dropOrder } from "../actions/ordersActions";
import Production from "./Production";
import OrderBlock from "./OrderBlock";
import ActiveButton from "./ActiveButton";
import DialogWindow from "./DialogWindow";

class FactoryPage extends Component {
  state = {
    dialogWindows: false,
    openOrder: null
  };

  onOpenDialogWindows = orderId => {
    this.setState({ dialogWindows: true, openOrder: orderId });
  };

  onCloseDialogWindows = () => {
    this.setState({ dialogWindows: false, openOrder: null });
  };

  onRemoveOrder = () => {
    this.props.dropOrder(this.state.openOrder);
    this.onCloseDialogWindows();
  };

  render() {
    return (
      <div>
        {this.state.dialogWindows && (
          <DialogWindow
            onCloseDialogWindows={this.onCloseDialogWindows}
            onRemoveOrder={this.onRemoveOrder}
          />
        )}
        <ActiveButton
          text="Ago"
          onButtonClick={() => this.props.history.push("/")}
        />
        <Production
          dropFactory={this.props.dropFactory}
          factoryId={this.props.match.params.factoryId}
        />
        <OrderBlock
          factoryId={this.props.match.params.factoryId}
          onOpenDialogWindows={this.onOpenDialogWindows}
        />
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

export default withRouter(
  connect(
    { dropFactory, dropOrder }
  )(FactoryPage)
);
