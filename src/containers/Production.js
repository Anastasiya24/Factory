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
import { showProductsList, changeProduct } from "../actions/productsActions";
import ChangeProduct from "./ChangeProduct";

class Production extends Component {
  state = {
    openChangePopup: false,
    currentProduct: null
  };

  componentDidMount() {
    this.props.showProductsList(this.props.factoryId);
  }

  onOpenDialogWindow = id => {
    let currentProduct = this.props.productList.find(el => el.id === id);
    this.setState({
      currentProduct: currentProduct,
      openChangePopup: true,
    });
  };

  onCloseDialogWindows = () => {
    this.setState({
      openChangePopup: false,
      currentProduct: null
    });
  };

  Cell = props => {
    return <Table.Cell {...props} />;
  };

  TableRow = ({ row, ...restProps }) => (
    <Table.Row
      id={row.id}
      {...restProps}
      style={{ cursor: "pointer" }}
      onClick={() => this.onOpenDialogWindow(row.id)}
    />
  );

  onChangeProduct = (productId, options) => {
    this.props.changeProduct(productId, options);
  };

  render() {
    return (
      <div>
        {this.state.openChangePopup && (
          <ChangeProduct
            currentProduct={this.state.currentProduct}
            onChangeProduct={this.onChangeProduct}
            onCloseDialogWindows={this.onCloseDialogWindows}
          />
        )}
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
    { showProductsList, changeProduct }
  )(Production)
);
