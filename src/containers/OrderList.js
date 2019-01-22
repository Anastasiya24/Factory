import React, { Component } from "react";
import { withRouter } from "react-router";
import {
  Grid,
  Table,
  TableHeaderRow
} from "@devexpress/dx-react-grid-material-ui";
import orderGridColumnName from "../constants/orderGridColumnName";

class OrderList extends Component {
  Cell = props => {
    return <Table.Cell {...props} />;
  };

  TableRow = ({ row, ...restProps }) => (
    <Table.Row
      id={row.id}
      {...restProps}
      style={{ cursor: "pointer" }}
      onClick={() => this.props.onOpenDialogWindows(row.id)}
    />
  );

  render() {
    return (
      <div>
        <Grid columns={orderGridColumnName} rows={this.props.ordersList}>
          <Table rowComponent={this.TableRow} cellComponent={this.Cell} />
          <TableHeaderRow />
        </Grid>
      </div>
    );
  }
}

export default withRouter(OrderList);
