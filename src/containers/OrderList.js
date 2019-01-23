import React, { Component } from "react";
import { withRouter } from "react-router";
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel
} from "@devexpress/dx-react-grid-material-ui";
import { PagingState, CustomPaging } from "@devexpress/dx-react-grid";
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
    const { currentPage, pageSize, totalCount } = this.props;
    return (
      <div>
        <Grid columns={orderGridColumnName} rows={this.props.ordersList}>
          <PagingState
            currentPage={currentPage}
            onCurrentPageChange={this.props.onChangeCurrentPage}
            pageSize={pageSize}
          />
          <CustomPaging totalCount={totalCount} />
          <Table rowComponent={this.TableRow} cellComponent={this.Cell} />
          <TableHeaderRow />
          <PagingPanel pageSizes={[10, 15, 20]} />
        </Grid>
      </div>
    );
  }
}

OrderList.defaultProps = {
  currentPage: 1,
  pageSize: 10,
  totalCount: 30
};

export default withRouter(OrderList);
