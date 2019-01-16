import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import OrderList from "./OrderList";
import { showOrdersList } from "../actions/ordersActions";

const styles = theme => ({
  root: {
    marginTop: "50px",
    width: "100%"
  }
});

class OrderBlock extends React.Component {
  componentDidMount() {
    this.props.showOrdersList(this.props.factoryId);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="display1">Orders</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <OrderList ordersList={this.props.ordersList} onOpenDialogWindows={this.props.onOpenDialogWindows}/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ordersList: state.orders.ordersList };
}

export default connect(
  mapStateToProps,
  { showOrdersList }
)(withStyles(styles)(OrderBlock));
