import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { dropFactory } from "../actions/factoriesActions";
import { dropOrder } from "../actions/ordersActions";
import { addUser } from "../actions/userActions";
import Production from "./Production";
import OrderBlock from "./OrderBlock";
import ActiveButton from "./ActiveButton";
import DialogWindow from "./DialogWindow";
import CreateUser from "./CreateUser";
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

  onAddNewUser = user => {
    this.props.addUser(user);
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
        <CreateUser onAddNewUser={this.onAddNewUser} />
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

function mapStateToProps(state) {
  return {
    factoriesList: state.factories.factoriesList
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { dropFactory, dropOrder, addUser }
  )(FactoryPage)
);
