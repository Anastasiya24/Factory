import React from "react";
import Typography from "@material-ui/core/Typography";
//redux
import { connect } from "react-redux";
import { showFactoriesList, addFactory } from "../actions/factoriesActions";
//components
import FactoriesList from "./FactoriesList";
import FactoriesAddNew from "./FactoriesAddNew";

class FactoriesMain extends React.Component {
  componentDidMount() {
    this.props.showFactoriesList();
  }

  onAddFactory = factoryInfo => {
    this.props.addFactory(factoryInfo);
  };

  onClickToFactory = factoryId => {
    this.props.history.push(`/date/${factoryId}`);
  };

  render() {
    return (
      <React.Fragment>
        <Typography style={{ margin: "30px" }} variant="display1">
          List of the factories
        </Typography>
        <FactoriesList
          factoriesList={this.props.factoriesList}
          onClickToFactory={this.onClickToFactory}
        />
        <FactoriesAddNew onAddFactory={this.onAddFactory} />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    factoriesList: state.factories.factoriesList
  };
}

export default connect(
  mapStateToProps,
  { showFactoriesList, addFactory }
)(FactoriesMain);
