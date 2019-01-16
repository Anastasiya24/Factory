import React, { Component } from "react";
import { withRouter } from "react-router";
// import Typography from '@material-ui/core/Typography';
import {
  Grid,
  Table,
  TableHeaderRow
} from "@devexpress/dx-react-grid-material-ui";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { dropFactory } from "../actions/factoriesActions";
import { bindActionCreators } from "redux";


const gridColumn = [
  { name: "articte", title: "Артикул" },
  { name: "material", title: "Всего разобрано,м" },
  { name: "plan", title: "1 сорт: План" },
  { name: "fact", title: "1 сорт: Факт" }
];

const gridRows = [
  { articte: "A1", material: 1000, plan: 20, fact: 12 },
  { articte: "A2", material: 2000, plan: 40, fact: 38 },
  { articte: "A3", material: 3000, plan: 50, fact: 43 },
  { articte: "A4", material: 4000, plan: 80, fact: 55 }
];

class Quality extends Component {
  Cell = props => {
    return <Table.Cell {...props} />;
  };

  TableRow = ({ row, ...restProps }) => (
    <Table.Row
      id={row.articte}
      {...restProps}
      style={{ cursor: "pointer" }}
      onClick={() => this.props.history.push(`/date/article/${row.articte}`)}
    />
  );

  render() {
    return (
      <div>
        <Button
          variant="contained"
          style={{ margin: "30px 0 0 30px" }}
          onClick={() => this.props.history.push("/")}
        >
          Ago
        </Button>
        <Paper style={{ margin: 30, padding: 20 }}>
          <Grid columns={gridColumn} rows={gridRows}>
            <Table rowComponent={this.TableRow} cellComponent={this.Cell} />
            <TableHeaderRow />
          </Grid>
        </Paper>
        <Button
          variant="contained"
          style={{ margin: "30px 0 0 30px" }}
          onClick={() => {
            console.log(this.props.match.params.factoryId);

            this.props.dropFactory();
            this.props.history.push("/");
          }}
        >
          Drop the factory
        </Button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ dropFactory });
}

export default withRouter(connect(mapDispatchToProps)(Quality));