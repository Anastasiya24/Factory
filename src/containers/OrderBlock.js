import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import OrderList from "./OrderList";
import { showOrdersList, addOrder } from "../actions/ordersActions";
import { showUserList } from "../actions/userActions";
import CreateOrder from "./CreateOrder";

const styles = theme => ({
  root: {
    marginTop: "50px",
    width: "100%"
  }
});

class OrderBlock extends React.Component {
  state = {
    openPopup: false
  };

  componentDidMount() {
    this.props.showOrdersList(this.props.factoryId, 0);
    this.props.showUserList();
  }

  onOpenPopup = event => {
    event.stopPropagation();
    this.setState({
      openPopup: true
    });
  };

  onClosePopup = () => {
    this.setState({
      openPopup: false
    });
  };

  onAddOrder = info => {
    this.onClosePopup();
    info.factoryId = this.props.factoryId;
    this.props.addOrder(info);
  };

  onChangeCurrentPage = (currentPage) => {
    this.props.showOrdersList(this.props.factoryId, currentPage);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="display1">Orders</Typography>
            <Button
              color="secondary"
              variant="outlined"
              style={{ margin: "0px 0 0 30px" }}
              onClick={this.onOpenPopup}
            >
              add order
            </Button>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <OrderList
              ordersList={this.props.ordersList}
              onOpenDialogWindows={this.props.onOpenDialogWindows}
              onChangeCurrentPage={this.onChangeCurrentPage}
              totalCount={this.props.totalCount}
              currentPage={this.props.currentPage}
              pageSize={this.props.pageSize}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {this.state.openPopup && (
          <CreateOrder
            onClosePopup={this.onClosePopup}
            goods={this.props.productList}
            usersList={this.props.usersList}
            onAddOrder={this.onAddOrder}
          />
        )}
      </div>
    );
  }
}

function formatterOrderList(ordersList, usersList) {
  if (usersList.length !== 0) {
    let newOrderList = ordersList.map(el => {
      let userObj = usersList.find(user => user.id === el.user_id);
      let newOrderObject = {
        id: el.id,
        user_name: userObj.user_name,
        user_email: userObj.user_email,
        is_delete: el.is_delete,
        createdAt: el.createdAt
      };
      return newOrderObject;
    });
    return newOrderList;
  }
}

function mapStateToProps(state) {
  return {
    usersList: state.users.clientList,
    productList: state.products.productsList,
    ordersList:
      formatterOrderList(state.orders.ordersList, state.users.clientList) || [],
    totalCount: state.orders.totalCount,
    currentPage: state.orders.currentPage,
    pageSize: state.orders.pageSize
  };
}

export default connect(
  mapStateToProps,
  { showOrdersList, showUserList, addOrder }
)(withStyles(styles)(OrderBlock));
