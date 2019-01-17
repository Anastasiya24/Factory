import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  Table,
  TableHeaderRow
} from "@devexpress/dx-react-grid-material-ui";
import Paper from "@material-ui/core/Paper";
import productsGridColumnName from "../constants/productsGridColumnName";
import { showProductsList } from "../actions/productsActions"
class Production extends Component {
  componentDidMount(){
    this.props.showProductsList(this.props.factoryId)
  }


  Cell = props => {
    return <Table.Cell {...props} />;
  };

  TableRow = ({ row, ...restProps }) => (
    <Table.Row
      id={row.articte}
      {...restProps}
      style={{ cursor: "pointer" }}
      onClick={() =>
        this.props.history.push(
          `/date/${this.props.factoryId}/products/${row.articte}`
        )
      }
    />
  );

  render() {
    return (
      <div>
        <Typography variant="display1"> Productions </Typography>
        <Paper style={{ margin: 30, padding: 20 }}>
          <Grid columns={productsGridColumnName} rows={this.props.productList}>
            <Table rowComponent={this.TableRow} cellComponent={this.Cell} />
            <TableHeaderRow />
          </Grid>
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    productList: state.products.productsList
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { showProductsList }
  )(Production)
);
