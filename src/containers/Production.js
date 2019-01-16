import React, { Component } from "react";
import { withRouter } from "react-router";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  Table,
  TableHeaderRow
} from "@devexpress/dx-react-grid-material-ui";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import productsGridColumnName from "../constants/productsGridColumnName";

class Production extends Component {
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
          `/date/${this.props.match.params.factoryId}/products/${row.articte}`
        )
      }
    />
  );

  render() {
    return (
      <div>
        <Typography variant="display1"> Productions </Typography>
        <Button
          variant="contained"
          style={{ margin: "30px 0 0 30px" }}
          onClick={() => this.props.history.push("/")}
        >
          Ago
        </Button>
        <Paper style={{ margin: 30, padding: 20 }}>
          <Grid columns={productsGridColumnName} rows={this.props.productList}>
            <Table rowComponent={this.TableRow} cellComponent={this.Cell} />
            <TableHeaderRow />
          </Grid>
        </Paper>
        <Button
          variant="contained"
          style={{ margin: "30px 0 0 30px" }}
          onClick={() => {
            this.props.dropFactory(this.props.match.params.factoryId);
            this.props.history.push("/");
          }}
        >
          Drop the factory
        </Button>
      </div>
    );
  }
}

export default withRouter(Production);
